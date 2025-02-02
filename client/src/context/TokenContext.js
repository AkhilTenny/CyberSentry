import { useContext,createContext,useState,useEffect } from "react";


const TokenContext = createContext();

export const useToken = ()=>{
  return useContext(TokenContext);
}



export const TokenProvider=({children})=>{

  const [userToken,setUserToken] = useState(localStorage.getItem("userToken") || null)

  function tokenSignIn(token){
    localStorage.setItem("userToken",token)
    setUserToken(token)
  }

  function tokenSignOut(){
    localStorage.removeItem("userToken");
    setUserToken(null)

   } useEffect(() => {
      const handleStorageChange = () => {
        setUserToken(localStorage.getItem("userToken") || null);
      };
  
      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

  return(
    <TokenContext.Provider value={{tokenSignIn,tokenSignOut,userToken}}>
    {children}
    </TokenContext.Provider>
  )


}