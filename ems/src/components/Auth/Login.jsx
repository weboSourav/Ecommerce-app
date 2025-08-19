import React, { useState } from 'react'

const Login = () => {

const[email,setEmail] = useState('');
const[password,setPassword] = useState('');


    const SubmitHandler = (e) =>{
e.preventDefault();

console.log("hello bhaiyon aur behno")


}



  return (
    <div className = 'flex items-center justify-center min-h-screen bg-gray-600 '>

<form

onSubmit={(e) => {
SubmitHandler(e);

}
}







className='flex flex-col gap-7 justify-center items-center w-96 h-72 border-3 rounded-2xl border-emerald-600'>

<input required className = ' text-black w-66 h-14 outline-none bg-transparent border-3 border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400 '  type='email' placeholder='Enter your email'/>
<input required className =  ' text-black w-66 h-14 outline-none bg-transparent border-3 border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400 ' type = 'password' placeholder='Enter your password'/>
<button className = ' outline-none border-none w-44 bg-emerald-400 py-4 px-5 rounded-full placeholder:text-white'>Login</button>



</form>

</div>



  )
}

export default Login