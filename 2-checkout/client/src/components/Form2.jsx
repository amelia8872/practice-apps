import React, {useState} from "react";




const Form2 = ({prevStep, nextStep,handleChange}) => {
  return(
    <div className="form2">
      <h1>Shipping Address</h1>
      <h2>address:</h2>
      <h3>line1:</h3>
      <input
      type="text"
      placeholder="line1"
      name="address_line1"
      onChange={handleChange}
      />

      <h3>line2:</h3>
      <input
      type="text"
      placeholder="line2"
      name="address_line2"
      onChange={handleChange}
      />

      <h2>city:</h2>
      <input
      type="text"
      placeholder="city"
      name="city"
      onChange={handleChange}
      />

      <h2>state:</h2>
      <input
      type="text"
      placeholder="state"
      name="state"
      onChange={handleChange}
      />

      <h2>zipcode:</h2>
      <input
      type="text"
      placeholder="zipcode"
      name="zipcode"
      onChange={handleChange}
      />
      <br></br>

      <br></br>
      <button onClick={prevStep}>Previous</button>

      <button onClick={nextStep}>Next</button>

    </div>

  )
}

export default Form2;