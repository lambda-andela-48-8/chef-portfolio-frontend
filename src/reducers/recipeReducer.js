import { FETCH_RECIPE, NEW_RECIPE } from './../actions/types';

const initialState = {
  recipes: [],
  recipe: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPE:
      return {
        ...state,
        recipes: action.payload
      };
    case NEW_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };
    default:
      return state;
  }
}