import React, {useState} from "react";

const Form3 = ({prevStep, nextStep}) => {
  return(
    <div className="form3">
      <h1>Payment Info</h1>
      <h2>Credit Card Number</h2>
      <input
      type="text"
      placeholder="card number"
      // value="name"
      />

      <h2>Expiry Date</h2>
      <input
      type="text"
      placeholder="expiry date"
      // value="email"
      />

      <h2>CVV</h2>
      <input
      type="text"
      placeholder="CVV"
      // value="password"
      />

      <h2>Zipcode</h2>
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

export default Form3;