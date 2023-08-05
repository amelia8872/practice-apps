import React, {useState} from "react";



const Form1 = ({nextStep, handleChange}) => {
  return(
    <div className="form1">
      <h1>Account Create</h1>
      <h2>Name</h2>
      <input
      type="text"
      placeholder="Name"
      name="name"
      onChange={handleChange}
      />

      <h2>Email</h2>
      <input
      type="email"
      placeholder="Email"
      name="email"
      onChange={handleChange}
      />

      <h2>Password</h2>
      <input
      type="password"
      placeholder="Password"
      name="password"
      onChange={handleChange}

      />
      <br></br>

      <br></br>

      <button onClick={nextStep}>Next</button>

    </div>

  )
}

export default Form1;