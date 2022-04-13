import React, { useState } from "react";
import './bootstrap.css'


function App() {
  const [submitted , setSubmitted] = useState(false);
  const [fName , setFName] = useState("");
  const [LName , setLName] = useState("");
  const [Ad , setAd] = useState("");
  const [gend , setGend] = useState("");
  const [mail , setMail] = useState("");
  const [bio , setBio] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    setSubmitted(!submitted)
  }
  const handleReset = () => {
    window.location.reload()
  }

  return (
    <div className="App d-flex w-100 justify-content-center align-items-start" style={{height : "100%"}}>
      <form
      
      onSubmit={(event)=> handleSubmit(event)}
      className="container w-lg-50 card p-lg-5 p-4 m-3 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-center">Submit Details </h4>
          <button onClick={handleReset} className="btn btn-info text-white">Reset</button>
        </div>

      <div className="row mb-4">
        <div className="col-sm-12 col-md-6">
          <div className="form-outline">
            <input value={fName} onChange={(e)=> setFName(e.target.value)} type="text" id="form6Example1" className="form-control" />
            <label className="form-label" htmlFor="form6Example1">First name</label>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-outline">
            <input value={LName} onChange={(e)=> setLName(e.target.value)} type="text" id="form6Example2" className="form-control" />
            <label className="form-label" htmlFor="form6Example2">Last name</label>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4">
        <input value={Ad} onChange={(e)=> setAd(e.target.value)} type="text" id="form6Example4" className="form-control" />
        <label  className="form-label" htmlFor="form6Example4">Address</label>
      </div>

      
      <div className="form-outline mb-4">
        <input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" id="form6Example5" className="form-control" />
        <label className="form-label" htmlFor="form6Example5">Email</label>
      </div>

      
      <div className="form-outline mb-4">
        <select onChange={(e)=> setGend(e.target.value)} name="Gender" id="Gender" className="form-control">
          <option className="" value="Male">Choose Gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      
      <div className="form-outline mb-4">
        <textarea value={bio} onChange={(e)=> setBio(e.target.value)} className="form-control" id="form6Example7" rows="1"></textarea>
        <label className="form-label" htmlFor="form6Example7">Bio</label>
      </div>

      
      <button type="submit" className="btn btn-info btn-block mb-4 text-white">Submit</button>

      { submitted &&
      <>
        <div className="card">
        <ul className="list-group">
          <li className="list-group-item">{`Firstname: ${fName? fName : "Not Provided"}`}</li>
          <li className="list-group-item">{`Lastname: ${LName? LName : "Not Provided"}`}</li>
          <li className="list-group-item">{`Gender: ${gend? gend : "Not Provided"}`}</li>
          <li className="list-group-item">{`Email: ${mail? mail : "Not Provided"}`}</li>
          <li className="list-group-item">{`Address: ${Ad? Ad : "Not Provided"}`}</li>
          <li className="list-group-item">{`Bio: ${bio? bio : "Not Provided"}`}</li>
        </ul>
        </div>
      </>
}
      


</form>

    
    </div>
  );
}

export default App;
