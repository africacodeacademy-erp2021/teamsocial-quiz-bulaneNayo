import React from 'react';
import validate from './Validation';
import useForm from './useForm';
import './Components.css';


const Registration = ({ submitForm }) => {
const {handleSubmit, errors,handleChange, values } = useForm(submitForm,validate);

const CurrentPlayer = ()=>{
    localStorage.setItem('Current', values.username)
    //values.username.replace(/"/g, "");
    //JSON.parse('Current');
    };

  return (
    <div className='form-div'>

      <form onSubmit={handleSubmit} className='form' noValidate>

        <h2>ACA Team Social</h2>
        <div className='form-input-div'>
         <p><input className='input' type='text' name='username' id='username' pattern=' /^[A-Za-z]+$/i' placeholder='Enter UserName'
            value={values.username}
            onChange={handleChange}/></p>
          {errors.username && <p  className="errors">{errors.username}</p>}
         <p> <button className='btn'onClick={CurrentPlayer} type='submit'>
          Start playing
        </button></p>
        
       </div>
      </form>
    </div>
  );
 
};

export default Registration;
