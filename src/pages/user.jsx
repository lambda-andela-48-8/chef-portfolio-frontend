import React, { Fragment } from 'react';
import Header from './../components/header';
import SearchBar from './../components/main/searchbar';
import Footer from './../components/footer';
import FeaturedRecipe from './../components/main/featuredRecipe';


export default function home() {
    return (
        <Fragment>
        <Header/>
        <SearchBar/>
        <FeaturedRecipe/>
        <Footer/>
        </Fragment>
    )
}
