import React from "react";


const Confirmation = ({prevStep,formData,handleSubmit}) => {
  return(
    <div className='confirmation'>
    <span>name: {formData.name}</span>
    <br></br>
    <span>email: {formData.email}</span>
    <br></br>
    <span>password: {formData.password}</span>
    <br></br>
    <span>address line1: {formData.address_line1}</span>
    <br></br>
    <span>address line2: {formData.address_line2}</span>
    <br></br>
    <span>city: {formData.city}</span>
    <br></br>
    <span>state: {formData.state}</span>
    <br></br>
    <span>zip: {formData.zipcode}</span>
    <br></br>
    <span>phone: {formData.phone_number}</span>
    <br></br>
    <span>cardNumber: {formData.creditcard}</span>
    <br></br>
    <span>expiryDate: {formData.expirydate}</span>
    <br></br>
    <span>cvv: {formData.cvv}</span>
    <br></br>
    <span>billingZip: {formData.billingzip}</span>

    <br></br>

    <br></br>
    <button onClick={prevStep}>Previous</button>
    <br></br>
    <button onClick={handleSubmit}>Purchase</button>



    </div>
  )
}

export default Confirmation;