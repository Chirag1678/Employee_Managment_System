import { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
       <div className="border-2 border-emerald-600 px-20 py-40 rounded-xl">
        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center justify-center">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} required className="outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 mb-5 text-xl w-[25vw] rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your email"/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} required className="outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 mb-5 text-xl w-[25vw] rounded-full placeholder:text-gray-400" type="password" placeholder="Enter password"/>
            <button className="text-white bg-emerald-600 border-none outline-none py-3 px-7 rounded-full">Log In</button>
        </form>
       </div>
    </div>
  )
}

export default Login
