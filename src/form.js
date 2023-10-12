import React, {useState} from "react";


export default function Form(){
// const [formdata,formstate]=useState({
//     name:"",
//     email:""
// })


    return(
        <div>
        <form>
          <lable>Name:</lable>
          <br />
          <input name="name" />
          <br />
          <lable>Email:</lable>
          <br />
          <input name="email"/>
      {/* <Button variant="contained" color="primary">
        submit
    </Button> */}
        </form>
      </div>
    )
}