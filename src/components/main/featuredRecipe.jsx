import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllRecipe } from './../../actions/recipeActions';
import FlashMessagesList from './../../flash/flashMessagesList';
import Recipe from './featuredRecipe/recipe';

import './featuredRecipe.css'

class featuredRecipe extends Component {

    componentDidMount () {
        this.props.getAllRecipe(this.props.user);
      }

    render() {
        const {recipes } = this.props.recipes;
        return (
            <section id="boxes">
                <div className="container">
                    <h1><span className="highlight">Featured </span>Recipe</h1>
                    <FlashMessagesList/>
                    <div className='row'>
                    <Recipe recipeItem = {recipes}/>  
                    </div>
                </div>
            </section>
          )
    }
}
featuredRecipe.propTypes = {
    getAllRecipe: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    recipes: state.recipes,
    recipe: state.recipe,
    userId: state.auth.user.sub
  });


  
  export default connect(mapStateToProps, {getAllRecipe})(featuredRecipe);