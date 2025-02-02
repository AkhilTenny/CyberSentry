import {React,useEffect,useRef,useState} from 'react'
import { useApi } from '../../actions/api/useApi';


function EditUsernameModal(props) {

  const {checkDuplicateUsername,editUsername} = useApi();
  const [error,setError] = useState(true);

  const inputRef = useRef();

  

  function closeModal(){
    props.closeModal("username");
  }
  function submitEdit(){
    const value = inputRef.current.value
    editUsername(value);
    closeModal(); 
  }
  function inputChanged(e){
    const currentValue = e.target.value;

    checkDuplicateUsername(currentValue).then(isAvailable=>{

      if(currentValue == props.username){
        setError("Use a diffrent username to edit!")
      }else if(!isAvailable){
        setError("This username already exits!")

      }else{
        setError(false)
      }
    })


    if(currentValue== props.username){
      setError("change to another EmailId!")
    }
  }

  useEffect(()=>{
    inputRef.current.value = props.username
  },[])
  return (
    <div
      onClick={(e)=>{
        if(e.target == e.currentTarget){
          closeModal()
        }
      }}
     className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>  
      <div className='p-4 bg-gray-50 h-38 rounded-lg flex justify-around flex-col ' >
        <h1>Edit Username:</h1>
        <input
          onChange={(e)=>{
            inputChanged(e)
          }}
         ref={inputRef} type="text" className='p-2 mt-3 rounded-lg bg-gray-50 border-2' />
         {
          error&&
            <h1 className='text-red-900'>{error}</h1>
            
         }
        
        <div className='flex justify-between mt-3 text-white'>
        {
          error ? 
          <button className='px-2 py-1 hover:bg-gray-600 rounded-lg bg-gray-500 cursor-not-allowed'>Confirm</button>
          :
          <button className='px-2 py-1 hover:bg-sky-600 rounded-lg bg-sky-500 '
            onClick={submitEdit}
          >Confirm</button>

        }
          <button
            onClick={closeModal}
           className='px-2 py-1 rounded-lg hover:bg-red-500 bg-red-400 '>Cancel</button>

        </div>
      </div>    
    </div>
  )
}

export default EditUsernameModal
