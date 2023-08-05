import React, {useState} from "react";

const Form1 = ({nextStep}) => {
  return(
    <div className="form1">
      <h1>Account Create</h1>
      <h2>Name</h2>
      <input
      type="text"
      placeholder="Name"
      // value="name"
      />

      <h2>Email</h2>
      <input
      type="email"
      placeholder="Email"
      // value="email"
      />

      <h2>Password</h2>
      <input
      type="password"
      placeholder="Password"
      // value="password"
      />
      <br></br>

      <br></br>

      <button onClick={nextStep}>Next</button>

    </div>

  )
}

export default Form1;