import React, { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // console.log(call);
    // const fetchData = async () => {
      const datas = localStorage.getItem("datas");
      const newdatas = JSON.parse(datas);
      if (newdatas) {
        setData(newdatas);
        setLoading(false);
      }
    // };

    // fetchData();
  }, []);

const Delete=(email)=>{
  
data.filter((items ,index)=>items!==email)
}

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <table className="table" style={{ width: "30vw" }}>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="2">Loading...</td>
              </tr>
            ) : (
              data.map((items, index) => (
                <tr key={index}>
                  <td>{items.name}</td>
                  <td>{items.email}</td> 
                  <td><button onClick={()=>Delete(items.email)}>Delete</button></td> 
                </tr>
              )))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
