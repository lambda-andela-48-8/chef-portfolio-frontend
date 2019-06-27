import instance from './../config/axios';



const addRecipeRequest=(recipeData)=> {
  return dispatch => {
    return instance.post('/recipe', recipeData)
  }
}
export default addRecipeRequest;