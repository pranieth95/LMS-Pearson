import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Year1 extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
        <p>{this.props.subject}</p>
        </Cell>
        <Cell col={8}>
        <p>{this.props.grade}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Year1;
