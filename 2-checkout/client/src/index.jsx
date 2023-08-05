import React, {useState}from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import Confirmation from './components/Confirmation.jsx';




const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingZip: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const getStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Form1 nextStep={nextStep} />
        );
      case 2:
        return (
          <Form2 prevStep={prevStep} nextStep={nextStep} />
        );
      case 3:
        return (
          <Form3 prevStep={prevStep} nextStep={nextStep} />
        );
      case 4:
        return (
          <Confirmation prevStep={prevStep} setStep={setStep} />
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