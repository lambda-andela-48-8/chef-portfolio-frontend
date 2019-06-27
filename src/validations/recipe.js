import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  const { title, image, mealType, ingredientList, instructions } = data;

  if (Validator.isEmpty(title)) {
    errors.title = 'Title is required';
  }
  if (Validator.isEmpty(mealType)) {
    errors.mealType = 'Meal Type is required';
  }
  if (Validator.isEmpty(ingredientList)) {
    errors.ingredientList = 'Ingredients is required';
  }
  if (Validator.isEmpty(instructions)) {
    errors.instructions = 'Instructions is required';
  }
  if (!Validator.isURL(image)) {
    errors.image = 'Kindly upload recipe image';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}