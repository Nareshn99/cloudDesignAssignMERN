import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function CreteTask() {

  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Status, setStatus] = useState("")


  const saveUser = async (e) => {
    e.preventDefault()
    let data = { Title, Description, Status}
    await fetch("/create", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log(result)
      if (result.status === 201) {
        window.alert("Successfully creteTask")
      } else if (result.status === 409) {
        window.alert("title is already Registered")
      } else {
        window.alert("Invalid creteTask Details")
      }
    })

  }
  return (

    <div>
      <form method="POST" className='controller'>
        <label className="label">Enter Your Task Title</label>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} /><br></br><br></br>
        <label className="label">Enter Your Task Discription</label>
        <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} /><br></br><br></br>
        <label className="label">Status Of Your Task</label>
        <input type="text" value={Status} onChange={(e) => setStatus(e.target.value)} /><br></br><br></br>
        <button className="butt" type="submit" onClick={saveUser}>Add Your Task</button><br></br><br></br>
      </form>
      </div>

  );
}

export default CreteTask;
