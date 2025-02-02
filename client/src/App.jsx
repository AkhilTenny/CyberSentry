import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { TokenProvider } from './context/TokenContext';
import Account from './pages/Account';
import Module1 from './pages/modulesPages/Module1';


function App() {
  return (
    <TokenProvider>
       <BrowserRouter >
          <Routes>
              <Route path="/" element={<Home/>}  />
              <Route path="/signIn" element={<SignIn/>}  />
              <Route path="/signUp" element={<SignUp/>}  />
              <Route path='/account' element={<Account/>}/>
              <Route path='/module1' element={<Module1/>}/>

          </Routes>
        
        </BrowserRouter>
    </TokenProvider>
   
  );
}

export default App;
