import { useState } from "react";


export default function RegistrationForm() {

  let data = { name:"", email:"", password:""};
  let [inputData, setInputData] = useState(data);
  let [flag, setFlag] = useState(false);
  function handleInput(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDafult();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All field are mandatory");
    }else{
      setFlag(true);
    }
  }

  return (
    <>
    <h1>Registration form</h1> <br/><br/>

    <pre>{flag? <p>hey{inputData.name} you have submitted the form</p> : ""}</pre>


      
        <input
          type="text"
          value={inputData.name}
          name="name"
          placeholder="Enter thr name"
          onChange={handleInput}
        />
        <br />
        <br />

        <input
          type="email"
          value={inputData.email}
          name="email"
          placeholder="Enter thr email id"
          onChange={handleInput}
        />
        <br />
        <br />

        <input
          type="password"
          value={inputData.password}
          name="password"
          placeholder="Enter thr password"
          onChange={handleInput}
        />

        <button type="submit" onClick={handleSubmit}>Submit</button>
      
    </>
  );
}

