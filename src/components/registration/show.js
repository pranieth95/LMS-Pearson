import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignmentIcon from '@material-ui/icons/Build';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  card: {
    marginLeft: true,
  },
  cardB: {
    maxWidth: 600,
    shadow: 5,
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
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RegisterShow extends React.Component {
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
    const { classes } = this.props;

    return (

      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
            <Card className={classes.card} shadow={5} >
            <CardHeader
                avatar ={ <Avatar className={classes.greenAvatar}>
                <AssignmentIcon />
              </Avatar>}
              title="User Registration"
              subheader="If authorised only, Proceed"
            />
            <CardContent>
            <Chip label="Identitiy Details" className={classes.chip} color="secondary"/>
            <br/>
            
            </CardContent>
            <CardActions>
                    <Button variant="outlined" size="small" color="secondary" className={classes.margin} style={{minWidth: '275',margin: 'auto'}}>
                        Save
                    </Button>
            </CardActions>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Forgot Password:</Typography>
                <Typography paragraph>
                  Visit the ITSD along with the ID card provided by the Institute
                </Typography>
                <Typography paragraph>
                  Access the portal with the IT number and follow the instruction to reset the password. Once the new password receives, access the portal and reset the password.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

RegisterShow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterShow);