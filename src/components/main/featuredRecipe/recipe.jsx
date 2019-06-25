import React,{Component} from 'react';
import PropTypes from 'prop-types';
import RecipeList from './recipeList';

class Recipe extends Component{
    render(){
      return this.props.recipeItem.map((item)=>(
        <div>
        <RecipeList key={item.id} item={item}/>
        </div>  
      )
      );
   }
  }
  Recipe.propTypes = {
    recipeItem: PropTypes.array.isRequired
  }
   export default Recipe;
  