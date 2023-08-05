import React, {useState} from "react";

"CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255), email varchar(255), password varchar(255), address_line1 varchar(255), address_line2 varchar(255), city varchar(255), state varchar(255), zipcode varchar(255), phone_number varchar(255), creditcard int, expirydate int, cvv int, billingzip int)"

const Form3 = ({prevStep, nextStep,handleChange}) => {
  return(
    <div className="form3">
      <h1>Payment Info</h1>
      <h2>Credit Card Number</h2>
      <input
      type="text"
      placeholder="card number"
      name="creditcard"
      onChange={handleChange}
      />

      <h2>Expiry Date</h2>
      <input
      type="text"
      placeholder="expiry date"
      name="expirydate"
      onChange={handleChange}
      />

      <h2>CVV</h2>
      <input
      type="text"
      placeholder="CVV"
      name="cvv"
      onChange={handleChange}
      />

      <h2>Zipcode</h2>
      <input
      type="text"
      placeholder="zipcode"
      name="billingzip"
      onChange={handleChange}
      />
      <br></br>

      <br></br>

      <button onClick={prevStep}>Previous</button>

      <button onClick={nextStep}>Next</button>

    </div>

  )
}

export default Form3;