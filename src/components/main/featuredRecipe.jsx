import React, { Component } from 'react';
import Recipe from './featuredRecipe/recipe';
import RecipeItem from './featuredRecipe/recipeItem';
import './featuredRecipe.css'

export default class featuredRecipe extends Component {
    constructor(){
        super()
        this.state = {
            RecipeItem,
        }
    }
    render() {
        return (
            <section id="boxes">
                <div className="container">
                    <h1><span className="highlight">Featured </span>Recipe</h1>
                    <div className='row'>
                    <Recipe recipeItem = {this.state.RecipeItem}/>                  
                    </div>
                </div>
            </section>
          )
    }
}
