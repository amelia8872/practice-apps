import React, {useState} from "react";

const Form2 = ({prevStep, nextStep}) => {
  return(
    <div className="form2">
      <h1>Shipping Address</h1>
      <h2>address:</h2>
      <h3>line1:</h3>
      <input
      type="text"
      placeholder="line1"
      // value="name"
      />

      <h3>line2:</h3>
      <input
      type="text"
      placeholder="line2"
      // value="email"
      />

      <h2>city:</h2>
      <input
      type="text"
      placeholder="city"
      // value="password"
      />

      <h2>state:</h2>
      <input
      type="text"
      placeholder="state"
      // value="password"
      />

      <h2>zipcode:</h2>
      <input
      type="text"
      placeholder="zipcode"
      // value="password"
      />
      <br></br>

      <br></br>
      <button onClick={prevStep}>Previous</button>

      <button onClick={nextStep}>Next</button>

    </div>

  )
}

export default Form2;