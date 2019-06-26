import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name is required';
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last Name is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password';
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords  and Confirm Password must match';
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = 'Select your country';
  }
  if (Validator.isEmpty(data.states)) {
    errors.states = 'Select your states';
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber= 'Phone number is required';
  };



  return {
    errors,
    isValid: isEmpty(errors)
  }
}