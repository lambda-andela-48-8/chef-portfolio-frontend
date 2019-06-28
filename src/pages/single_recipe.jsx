import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { singleRecipe } from '../actions/recipeActions';
import Header from './../components/header';
import Footer from './../components/footer';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter, CardHeader } from 'reactstrap';


class SingleRecipe extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.singleRecipe(id)
    }
    render() {
        const { recipe } = this.props

        if (recipe) {
            return (
                <Fragment>
                <Header/>
                <section id="boxes">
                <div className="container">
                <h1><span className="highlight">{recipe.title}</span> Recipe</h1>
                <div className='row'></div>
                <div>
                <Card>
                <CardImg src={recipe.image} alt="recipe" />
                  <CardBody>
                  <CardHeader><h4>{recipe.chefName}</h4></CardHeader>
                    <CardTitle><h5>Ingredients:</h5></CardTitle>
                    <CardSubtitle><h5>{recipe.ingredients && (recipe.ingredients).toString()}</h5></CardSubtitle>
                    <CardText>
                    {recipe.instructions}
                    </CardText>
                  <CardFooter>{recipe.mealType}</CardFooter>
                  </CardBody>
                </Card>
                </div>
                </div>
                </section>
                <Footer/>
                </Fragment>
            )
        } else return <h1>Loading...</h1>
    }
}

const mapStateToProps = state => ({
    recipe: state.recipes.recipe
});

export default connect(() => mapStateToProps, { singleRecipe })(SingleRecipe)
