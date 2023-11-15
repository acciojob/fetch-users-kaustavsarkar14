
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [data, setData] = useState(null)
  function getData(){
    fetch('https://reqres.in/api/users')
    .then(data=>data.json())
    .then(data=>setData(data.data))
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Blue Whales</h1>
        <button onClick={getData} className="btn" >Get User List</button>
        <table style={{width:"100%"}}>
          <thead>
            <tr >
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {data?
              (data.map(el=>{
                return (
                  <tr key={el.id}>
                    <td>{el.first_name}</td>
                    <td>{el.last_name}</td>
                    <td>{el.email}</td>
                    <td><img src={el.avatar} alt="" /></td>
                  </tr>
                )
              }))
              :
              <tr><td>No data found to display.</td></tr>
            }
          </tbody>
        </table>
    </div>
  )
}

export default App
