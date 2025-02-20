import React, { useState } from 'react'
import {Link}  from 'react-router-dom'

export default function Signup() {
  const [credentials,setcredentials] = useState({name:" ",email:" ",password:"",geolocation:" "})

  const handleSubmit = async(e)=>{

    e.preventDefault();// synthetic event 

    console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
    const response = await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
    });
    const json = await response.json()
    console.log(json)

    if(!json.success){
      alert("Enter valid credentials")
    }


  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div className='bg-dark vh-100 '>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3 ">
    <label htmlFor="name" className="form-label text-white">Name</label>
    <input type="text" className="form-control bg-dark text-white" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
    <input type="email" className="form-control bg-dark text-white" name='email' value={credentials.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label bg-dark text-white">Password</label>
    <input type="password" className="form-control bg-dark text-white" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label bg-dark text-white">Address</label>
    <input type="text" className="form-control bg-dark text-white" name='geolocation' value={credentials.geolocation} id="exampleInputAddress" onChange={onChange}/>
  </div>

  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
</form>
</div>
      
  </div>
  )
}
