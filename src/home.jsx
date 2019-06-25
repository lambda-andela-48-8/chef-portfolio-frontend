import React, { Fragment } from 'react';
import Header from './components/header';
import Main from './components/main/main';
import Footer from './components/footer';
import FeaturedRecipe from './components/main/featuredRecipe';


export default function home() {
    return (
        <Fragment>
        <Header/>
        <Main/>
        <FeaturedRecipe/>
        <Footer/>
        </Fragment>
    )
}
