import React, { useState } from "react";

export default function Form() {
  const [nameerror,setnameerror]=useState();
  const [emailerror,setemailerror]=useState();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });

  const namehandle = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
    if(value.length<3){
      setnameerror(true)
    } else{
      
      setnameerror(false)
      
    }
    // console.log(error);
    
  };
  const emailhandle = (e) => {
    // console.log(error);
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
    if(value.length<3){
      setemailerror(true)
      
      
    }else{
      // setstatus(true)
      setemailerror(false)
    
    }

    // return false
  };

  const submit = (e) => {
    console.log(formdata.name.length<3);
    e.preventDefault()
    if(formdata.name.length<3 || formdata.email.length<3){
      setemailerror(true)
      alert("error")
    }else{
      alert("name:-"+formdata.name+" email:-"+formdata.email)
      console.log(formdata);
      
  }
}
  return (
    <div className="row">
      <form onSubmit={submit}>
        <label>Name:</label>
        <br />
        <input 
          placeholder="name"
          name="name"
          
          onChange={namehandle}
          type="text"
          value={formdata.name}
        /><br/>{nameerror?<span>Name is not valid</span>:null}  
      
        <br />
        <br />
        <label>Email:</label>
        <br />
        <input autoComplete="false"
          placeholder="email"
          onChange={emailhandle}
          name="email"
          type="email"
          value={formdata.email}
        /><br/>{emailerror?<span>Email is not valid</span>:null} 
        <br />
        <br />
        <button disabled={emailerror==true || nameerror==true } type="submit" className="btn btn-primary">
          Click me
        </button>
      </form>
    </div>
  );
}
