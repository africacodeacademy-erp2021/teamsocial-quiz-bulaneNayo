import React, { useState } from 'react';
import Registration from './Registration';
import Categories from './Categories';

const FormInput = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        {!isSubmitted ? (
          <Registration submitForm={submitForm} />
        ) : (
          <Categories />
        )}
     
    </>
  );
};

export default FormInput;