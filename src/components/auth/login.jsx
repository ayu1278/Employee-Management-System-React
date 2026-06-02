import React, { useState } from "react";


const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const submitHandler=(e) =>{
         e.preventDefault();
      handleLogin(email,password);
      console.log("email is", email);
      console.log("password is",password);
    console.log("your form is submitted");
    setEmail(''); 
    setPassword('');}
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-black">
      <div className="border-2 rounded-xl border-red-400 p-6 ">
        
        <form
        onSubmit={(e)=>{
          submitHandler(e);
        }

        }
        className="flex flex-col items-center justify-center gap-4">

          <input
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value); 
           }}
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full border-2 border-emerald-600 bg-transparent text-white placeholder:text-gray-400 outline-none"
          />

          <input
           value={password}
           onChange={
            (e)=>{
              setPassword(e.target.value);
            }
           }
            type="password"
            placeholder="Enter the password"
            className="px-5 py-3 rounded-full border-2 border-emerald-600 bg-transparent text-white placeholder:text-gray-400 outline-none"
          />

          <button
            type="submit"
            className="px-6 py-3 mt-5 rounded-full bg-emerald-600 text-white"
          >
            button 
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;