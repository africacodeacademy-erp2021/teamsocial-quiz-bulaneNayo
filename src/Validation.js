export default function Validation(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username required";
    } else if (values.username.length < 2) {
      errors.username = "Your username should atleast be  2 characters long";
    } else if (values.username.length > 20) {
      errors.username = " characters of Username should be less than 20";
    } 
    return errors;
  }