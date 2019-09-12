import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import DashLecturer from './dash/dashLecturer';

class Landing extends Component {

  componentDidMount() {
    console.log("Im at the didMount");
  }

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <img
              className="avatar-img"
              />


            <div className="banner-text">
              <h1>Welcome Lecturer </h1>

          
          <p> © Pearson | LMS 2018</p>
          <p>Find us on</p>
        <div className="social-links">

          {/* Youtube */}
          <a href="https://www.youtube.com/watch?v=zucUj8Jdxbk" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/pearson" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.pearson.com/asia/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>



        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
