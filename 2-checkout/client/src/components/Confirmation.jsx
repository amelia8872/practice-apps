import React from "react";


const Confirmation = ({prevStep}) => {
  return(
    <div className='confirmation'>
    <span>name</span>
    <br></br>
    <span>email</span>
    <br></br>
    <span>password</span>
    <br></br>
    <span>address</span>
    <br></br>
    <span>city</span>
    <br></br>
    <span>state</span>
    <br></br>
    <span>zip</span>
    <br></br>
    <span>phone</span>
    <br></br>
    <span>cardNumber</span>
    <br></br>
    <span>expiryDate</span>
    <br></br>
    <span>cvv</span>
    <br></br>
    <span>billingZip</span>

    <br></br>

    <br></br>
    <button onClick={prevStep}>Previous</button>
    <br></br>
    <button>Purchase</button>



    </div>
  )
}

export default Confirmation;