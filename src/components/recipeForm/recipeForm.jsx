import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import ValidateInput from './../../validations/recipe';
import FlashMessagesList from './../../flash/flashMessagesList';
import ImageUpload from './../uploadImage';
import './recipe.css';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          mealType: '',
          ingredients: [],
          ingredientList:'',
          instructions:'',
          image:'',
          errors:{},
          isLoading: false,
          invalid: false,
          redirect: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.setUrl = this.setUrl.bind(this);
      }

    onChange (e){
        this.setState({[e.target.name]: e.target.value})
       }
    
    addIngredient(val){
      const { ingredients } = this.state;
      const newIngredients = val.split(',');
      const finalIngredients = [...ingredients, ...newIngredients];
      this.setState({ ingredients: finalIngredients})
    }

    setUrl(url){
        this.setState({ image: url })
      }

    isValid(){
     const { errors, isValid }= ValidateInput(this.state);
     if(!isValid){
         this.setState({errors})
     }
     return isValid;
    }

    async onSubmit(e){
         e.preventDefault();
         await this.addIngredient(this.state.ingredientList);
         if(this.isValid()){
            this.setState({errors:{}, isLoading: true})
            this.props.addRecipeRequest(this.state)
            .then(
                ()=>{
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'Recipe added sucessfully!'
                      });
                      this.setState({ redirect: true })
                },
                (error) => {
                  this.setState({ errors: error.response.data, isLoading: false });
                  const { errors } = this.state;
                  const displayServerError = errors.error;
                  this.props.addFlashMessage({
                    type: 'error',
                    text: `${displayServerError}`
                  });
                }
                
                );
         };
     }
    render() {
        const { errors } = this.state;
        const { redirect } = this.state;

        if (redirect) {
         return <Redirect to='/user'/>;
        }
        return (
         <div className="card-body"> 
         <h3 className='d-flex justify-content-center'>Create New Recipe</h3> 
        <Form onSubmit={this.onSubmit}>
        <ImageUpload getUrl={this.setUrl} />
        <FormGroup>
        <Label  className='label'>Meal Title</Label>
        <Input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title"/>
        </FormGroup>
        {errors.title && <span className="warning">{errors.title}
      </span>}

      <FormGroup>
          <Label  className='label'>Meal Type</Label>
          <Input type="select" name="mealType"  value={this.state.mealType} onChange={this.onChange}>
            <option>Select meal type</option>
            <option value='Breakfast'>Breakfast</option>
            <option value='Lunch'>Lunch</option>
            <option value='Dinner'>Dinner</option>
            <option value='Desert'>Desert</option>
          </Input>
        </FormGroup>
        {errors.mealType && <span className="warning">{errors.mealType}
      </span>}

        <FormGroup>
          <Label className='label'>ingredients</Label>
          <Input type="textarea" name="ingredientList" id="exampleText"value={this.state.ingredientList} onChange={this.onChange} />
        </FormGroup>
        {errors.ingredientList&& <span className="warning">{errors.ingredientList}
      </span>}

        <FormGroup>
          <Label className='label'>Instructions</Label>
          <Input type="textarea" name="instructions" value={this.state.instructions} onChange={this.onChange} id="exampleText" />
        </FormGroup>
        {errors.instructions && <span className="warning">{errors.instructions}
      </span>}<br/>
      {errors.image && <span className="warning">{errors.image}
      </span>}<br/>
      {errors.ingredients && <span className="warning">{errors.ingredients}
      </span>}


        <FormGroup className="d-flex justify-content-center ">
		<Input type="submit" value="Add Recipe" disabled={this.state.isLoading || this.state.invalid} className="btn login_btn"/>
		</FormGroup>
        </Form>
        <FlashMessagesList/>
        </div>  
        )
    }
}
RecipeForm.propTypes = {
    addRecipeRequest: PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
  };

export default RecipeForm;
