import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/indigo';
import LoginForm from './login/login';
import { Grid, Cell } from 'react-mdl';
import image from "../assets/img/bg1.jpg";

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500],
  },
});

class LoginCard extends React.Component {
  state = { 
    expanded: false,
    logged:false
   };
  updateState(){
    this.setState({
      logged:true
    })
  }

  render() {
    const { classes } = this.props;

    return (
        <div
        className={classes.pageHeader}
        style={{
          backgroundImage:"url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "bottom center"
        }}
      >
        <Grid className="demo-grid-3">
            <Cell col={12} tablet={8} ><LoginForm updateApp={this.updateState.bind(this)}/></Cell>
        </Grid>
        </div>

    );
  }
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);