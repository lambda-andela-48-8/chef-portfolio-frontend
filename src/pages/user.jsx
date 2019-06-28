import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllRecipe } from '../actions/recipeActions';
import PropTypes from 'prop-types'
import Header from './../components/header';
import SearchBar from './../components/main/searchbar';
import Footer from './../components/footer';
import Recipe from './../components/main/featuredRecipe/recipe';
import FlashMessagesList from './../flash/flashMessagesList';


class UserRecipe extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        const userId = this.props.user.sub;
        this.props.getAllRecipe(userId)
    }

    render() {
        const chefName = this.props.user.name;
        const userRecipeItem = this.props.userRecipe;
        return (
        <Fragment>
        <Header/>
        <SearchBar/>
        <section id="boxes">
            <div className="container">
            <h1><span className="highlight">{chefName}</span> Recipe Portfolio</h1>
            <FlashMessagesList/>
            <div className='row'>
            <Recipe recipeItem = {userRecipeItem}/>  
            </div>
            </div>
        </section>
        <Footer/>
        </Fragment>  
        )
    }
}
const mapStateToProps = state => {
    return {
        allRecipes: state.recipes.recipes,
        userRecipe: state.recipes.userRecipes,
        user: state.auth.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllRecipe: (userId) => dispatch(getAllRecipe(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipe)