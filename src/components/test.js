import React from 'react';
import PropTypes from 'prop-types';
import RegisterSave from './registration/register';
import RegisterShow from './registration/show';
import { Grid, Cell } from 'react-mdl';

class RecipeReviewCard extends React.Component {
  state = { 
    expanded: false ,
    value: 'female',
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

 
  render() {
    return (

      <Grid className="demo-grid-3">
        <Cell col={6} tablet={8}><RegisterSave /></Cell>
        <Cell col={6} tablet={6}><RegisterShow /></Cell>
    </Grid>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (RecipeReviewCard);