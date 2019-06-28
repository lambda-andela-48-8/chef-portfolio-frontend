import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, CardHeader, Button } from 'reactstrap';

const RecipeList = (props) => {
  return (
    <div>
      <Card>
      <CardImg src={props.item.image} alt="recipe" />
        <CardBody>
        <CardHeader><h4>{props.item.title}</h4></CardHeader>
          <CardTitle><h6>{props.item.chefName}</h6></CardTitle>
          <CardSubtitle><h5>Ingredients:</h5></CardSubtitle>
          <CardText>
          {props.item.ingredients && (props.item.ingredients).toString()}
          <Button key={props.item.id} color='danger'>View Instructions>></Button>
          </CardText>
        <CardFooter>{props.item.mealType}</CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};
RecipeList.propTypes = {
    item: PropTypes.object.isRequired,
  }
export default RecipeList;