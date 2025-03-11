import React from 'react'
import { Navigate , Outlet } from "react-router-dom";
import { useToken } from './context/TokenContext';

function Layout() {
  const {userToken} = useToken();


  return userToken? <Outlet/>:<Navigate to="/signin" replace/>

}

export default Layout
