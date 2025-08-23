
import React, { useState, useEffect } from "react";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/employeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalstorage } from "./utils/localStorage";
const App = () => {
const [user,setUser] = useState(null)

const handleLogin = (email,password) => {

  if(email=== 'admin@123.com' && password === '12345' ){
    setUser('admin')
    console.log(user)
  } else if(email === 'user@123.com' && password === '12345'){
    setUser('employee')
console.log(user)
  }else{
    window.alert('invalid credentials')
  }

handleLogin('user@123.com','12345')

}




  return (
    <>
      {!user ?  <Login handleLogin = {handleLogin} /> : ''}

      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard />}
    </>
  );
};

export default App