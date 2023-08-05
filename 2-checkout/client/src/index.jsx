import React, {useState}from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import Confirmation from './components/Confirmation.jsx';
import axios from 'axios';




const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address_line1: '',
    address_line2:'',
    city: '',
    state: '',
    zipcode: '',
    phone_number: '',
    creditcard: '',
    expirydate: '',
    cvv: '',
    billingzip: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const {name, value} = event.target;
    setFormData({...formData, [name]:value})
    // console.log(formData)
  }

  const handleSubmit = () => {
    axios.post('/api/checkout', formData)
      .then((response) => {
        console.log('response.data from client',response.data);
      })
      .catch((err) => {
        console.log('Error checkout', err);
      })

    setStep(1);
  }



  const getStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Form1 nextStep={nextStep} handleChange={handleChange} />
        );
      case 2:
        return (
          <Form2 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} />
        );
      case 3:
        return (
          <Form3 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} />
        );
      case 4:
        return (
          <Confirmation prevStep={prevStep} setStep={setStep} formData={formData} handleSubmit={handleSubmit}/>
        );
    }

  }


  return (

      <div>
      <h1>Welcome to our Online Store!!!</h1>
      {getStepComponent()}

      <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>

      </div>


  );
};

ReactDOM.render(<App />, document.getElementById("root"));