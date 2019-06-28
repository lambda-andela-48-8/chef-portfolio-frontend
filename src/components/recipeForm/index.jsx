import React,{Component} from 'react';
import RecipeForm from './recipeForm';
import FormComponent from './../formComponent';
import { addRecipeRequest } from './../../actions/recipeActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage }  from './../../actions/flashMessages';

class RecipeFormComponent extends Component{
  static propTypes = {
    prop: PropTypes
}
    render(){
      const {addRecipeRequest, addFlashMessage} = this.props;
      const RecipeFormItem = FormComponent(RecipeForm);
      return (
        <div>
        <RecipeFormItem addRecipeRequest={addRecipeRequest} addFlashMessage={addFlashMessage}/>
        </div>
      )
    }
   }

   RecipeFormComponent.propTypes = {
    addRecipeRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }
   export default connect(null,{addRecipeRequest, addFlashMessage})(RecipeFormComponent);