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
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from "@material-ui/icons/Lock";
import AssignmentIcon from '@material-ui/icons/Build';
import MobileScreen from '@material-ui/icons/MobileScreenShare';
import Phone from '@material-ui/icons/Phone';
import ID from '@material-ui/icons/Security';
import Email from '@material-ui/icons/Email';
import Location from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const styles = theme => ({
  card: {
    maxWidth: 800,
 
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

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} shadow={5} style={{margin:'auto'}}>
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
        <TextField
          id="standard-name"
          label="User Identity (ID)"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <ID />
              </InputAdornment>
              ),
          }}
          />
                  <TextField
          id="standard-name"
          label="Email"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <Email />
              </InputAdornment>
              ),
          }}
          />
          <Divider />
        <Chip label="Contact Details" className={classes.chip} color="secondary"/>
        <br/>
         <TextField
          id="standard-name"
          label="First Name"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <AccountCircle />
              </InputAdornment>
              ),
          }}
          />
                  <TextField
          id="standard-name"
          label="Middle Name"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <AccountCircle />
              </InputAdornment>
              ),
          }}
          />
          <TextField
          id="standard-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <AccountCircle />
              </InputAdornment>
              ),
          }}
          />
          <br/>
          <TextField
          id="standard-name"
          label="Address"
          multiline
          rows="3"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <Location />
              </InputAdornment>
              ),
          }}
          />
          <Divider />
          <Chip label="Communication Details" className={classes.chip} color="secondary"/>
          <br/>
          <TextField
          id="standard-name"
          label="Mobile"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <MobileScreen />
              </InputAdornment>
              ),
          }}
          />
          <TextField
          id="standard-name"
          label="Telephone Number"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <Phone />
              </InputAdornment>
              ),
          }}
          />
          <Divider />
          <Chip label="Security Details" className={classes.chip} color="secondary"/>
          <br/>
        <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            value={this.state.passwd}
            margin="normal"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <Lock />
                </InputAdornment>
                ),
            }}
            />
            <TextField
            id="standard-password-input"
            label="Confirm Password"
            className={classes.textField}
            type="password"
            value={this.state.passwd}
            margin="normal"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <Lock />
                </InputAdornment>
                ),
            }}
            />
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
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);