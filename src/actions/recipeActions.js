import instance from './../config/axios';
import { FETCH_RECIPE, SINGLE_RECIPE} from './../actions/types';




export const addRecipeRequest=(recipeData)=> {
  return dispatch => {
    return instance.post('/recipe', recipeData)
  }
}

export const fetchRecipes = (recipes, id) => {
  return {
    type: FETCH_RECIPE,
    payload: recipes,
    id
  }
};

export const getAllRecipe = (userId) => {
  return (dispatch) => {
    return instance.get('recipe')
      .then(res => {
        dispatch(fetchRecipes(res.data.data, userId))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const singleRecipe = (id) => {
  return (dispatch) => {
    return instance.get(`/recipe/${id}`)
      .then(res => {
        dispatch({
          type: SINGLE_RECIPE,
          recipe: res.data.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const getUserRecipe = (userId) => {
  return (dispatch) => {
    dispatch(getAllRecipe())
    dispatch({
      type: 'GET_USER_RECIPE',
      id: userId
    })
  }
}
