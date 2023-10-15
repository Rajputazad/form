import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Form() {
  const [nameerror, setnameerror] = useState();
  const [emailerror, setemailerror] = useState();
  const arr = [];
  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
    email: "",
  });

  const namehandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
    if (value.length < 3) {
      setnameerror(true);
    } else {
      setnameerror(false);
    }
    // console.log(error);
  };
  const emailhandle = (e) => {
    // console.log(error);
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
    if (value.length < 3) {
      setemailerror(true);
    } else {
      // setstatus(true)
      setemailerror(false);
    }

    // return false
  };

  const [data, setdata] = useState([]);
  const submit = async (e) => {
    // console.log(data);
    console.log(formdata.name.length < 3);
    e.preventDefault();
    if (formdata.name.length < 3 || formdata.email.length < 3) {
      setemailerror(true);
      setnameerror(true);
      alert("error");
    } else {
      data.length=0;
      await setdata(data); // data.pop();
      // data.pop();
      // const nulls=[]
      console.log(data, data.length == 0);
      if (data.length == 0) {
        const datas = localStorage.getItem("datas");
        const newdatas = JSON.parse(datas);
        if (newdatas) {
          localStorage.removeItem("data");

          newdatas.map((item, index) => {
            data.push(item);
          });
        }
        data.push(formdata);
        // console.log(arr);
        alert("name:-" + formdata.name + " email:-" + formdata.email);
        console.log(formdata);
        setdata([...data]);
        localStorage.setItem("datas", JSON.stringify(data));
      } else {
        console.log("notclear");
      }
    }
  };

  function clear() {
    // data.
    setdata([]);
  }
  // useEffect(() => {
  //   localStorage.setItem("datas", JSON.stringify(data));
  // }, [data]);

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <form onSubmit={submit}>
            <label>Name:</label>
            <br />
            <input
              placeholder="name"
              name="name"
              onChange={namehandle}
              type="text"
              value={formdata.name}
            />
            <br />
            {nameerror ? <span>Name is invalid</span> : null}

            <br />
            <br />
            <label>Email:</label>
            <br />
            <input
              autoComplete="false"
              placeholder="email"
              onChange={emailhandle}
              name="email"
              type="email"
              value={formdata.email}
            />
            <br />
            {emailerror ? <span>Email is invalid</span> : null}
            <br />
            <br />
            <button
              disabled={emailerror || nameerror}
              type="submit"
              className="btn btn-primary"
            >
              Click me
            </button>
          </form>
          <br />
          <li>
            <Link to="/data">next page</Link>
          </li>
        </div>
      </div>
    </div>
  );
}
