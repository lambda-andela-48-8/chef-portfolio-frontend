import { FETCH_RECIPE, NEW_RECIPE, SINGLE_RECIPE, GET_USER_RECIPE } from './../actions/types';

const initialState = {
  recipes: [],
  recipe: {},
  userRecipes: []
};

export default function(state = initialState, action) {

  switch (action.type) {
    case FETCH_RECIPE:
      return {
        ...state,
        recipes: action.payload,
        userRecipes: action.payload.filter(recipe => recipe.userId === action.id)
      };
    case NEW_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };
    case SINGLE_RECIPE:
      return {
        ...state,
        recipe: action.recipe
      }
    case GET_USER_RECIPE:
      const allRecipes = [...state.recipes];
      const filteredRecipes = allRecipes.filter(rec => {
        return rec.userId === action.id
      })
        return {
          ...state,
          userRecipes: filteredRecipes,
        }
    default:
      return state;
  }
}