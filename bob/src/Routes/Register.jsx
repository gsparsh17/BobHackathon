import React, { useState } from 'react';
import './Register.css';
import pic1 from '../Images/pic (1).png';
import pic2 from '../Images/pic (2).png';
import pic3 from '../Images/pic (3).png';

function Register() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleSubmit = () => {
    alert('Form submitted!');
  };

  return (
    <div className='register-container'>
      <form className='register-form'>
        {step === 1 && (
          <div className='form-section'>
            <h1>User Details</h1>
            <label>Name</label>
            <input type="text" />
            <label>Address</label>
            <input type="text" />
            <label>Phone Number</label>
            <input type="number" />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className='form-section'>
            <h1>User Details</h1>
            <label>Username</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div className='form-section'>
            <h1>Do You Want to Save Money For The Future?</h1>
            <img src={pic1} alt="Savings" />
            <label>Monthly Salary</label>
            <input type="number" />
            <label>Monthly Expense</label>
            <input type="number" />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 4 && (
          <div className='form-section'>
            <h1>Planning For Retirement?</h1>
            <img src={pic2} alt="Retirement Planning" />
            <label>Your Age</label>
            <input type="number" />
            <label>Retirement Age</label>
            <input type="number" />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 5 && (
          <div className='form-section'>
            <h1>Any Debt?</h1>
            <img src={pic3} alt="Debt Management" />
            <label>Amount</label>
            <input type="number" />
            <button type="button" onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
