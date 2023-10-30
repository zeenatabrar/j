import React, { useState } from 'react'

function Signup() {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")

    const handleRegistration=()=>{
        const payload={
            username,
            email,
            pass
        }
        fetch("https://wild-puce-tuna-tux.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <h2>Registration page</h2>
        <input type="text" placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='enter password' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="" id="" placeholder='enter password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleRegistration} >register</button>
    </div>

  )
}

export default Signup