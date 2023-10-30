import React, { useState } from 'react'

function Login() {
   
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")

    const handleAuth=()=>{
        const payload={
           
            email,
            pass
        }
        fetch("https://wild-puce-tuna-tux.cyclic.app/users/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <h2>login page</h2>
       
        <input type="text" placeholder='enter password' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="" id="" placeholder='enter password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleAuth} >login</button>
    </div>

  )
}

export default Login