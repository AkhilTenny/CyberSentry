import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { TokenProvider } from './context/TokenContext';
import Account from './pages/Account';
import Module1 from './pages/modulesPages/Module1';
import Module2 from './pages/modulesPages/Module2';
import Module3 from './pages/modulesPages/Module3';
import Module4 from './pages/modulesPages/Module4';
import Layout from './Layout';



function App() {
  return (
    <TokenProvider>
       <BrowserRouter >
          <Routes>
              <Route path="/signIn" element={<SignIn/>}  />
              <Route path="/signUp" element={<SignUp/>}  />
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}  />
                  <Route path='/account' element={<Account/>}/>
                  <Route path='/module1' element={<Module1/>}/>
                  <Route path='/module2' element={<Module2/>}/>
                  <Route path='/module3' element={<Module3/>}/>
                  <Route path='/module4' element={<Module4/>}/>
                </Route>
               

             


          </Routes>
        
        </BrowserRouter>
    </TokenProvider>
   
  );
}

export default App;
