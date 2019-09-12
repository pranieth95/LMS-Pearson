import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/indigo';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from "@material-ui/icons/Lock";
import AssignmentIcon from '@material-ui/icons/Assignment';
import image from '../../assets/img/bgcard1.jpg';
import axios from 'axios';
import { Redirect } from 'react-router';
import AppJS from '../../App';
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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      expanded: false, 
      id: null,
      password: null,
      idError: "",
      submitError:"",
      tokenPass:false,
      redirect: false,
      logged: true
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  
  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
    if(String([e.target.name]) === 'id'){
      var tempText = String(e.target.value);
      this.setState({idError:" "});
      this.setState({tokenPass:false});
      this.setState({submitError:""});
      if(tempText.length > 1)
      {
        var combo = tempText[0] + tempText[1];
        if(combo.toLowerCase() === 'it' || combo.toLowerCase() === 'st'){
          this.setState({idError:" "});
          this.setState({tokenPass:true});
          console.log("pass");
        }else{
          this.setState({idError:"Your ID should start from either IT,BM,EN or ST"});
          this.setState({tokenPass:false});
          console.log("fail");
        }
      }
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { id, password} = this.state;
    if(this.state.tokenPass === true){
      axios.post('http://10.98.203.154:8082/LMS/userLogin', 
    { username:id, 
      pass:password },{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.status);
        if(response.status === 200){
          if(response.data.username === id){
            this.setState({redirect: true});
            console.log("passed through the state");
            console.log(AppJS.state.logged);
            AppJS.setState({logged:true});
            console.log(AppJS.state.logged);
          }
          else if(response.data.pass !== password){
            this.setState({submitError:"Invalid Password"});
          }
        }
        //console.log(response.status);
        //console.log(response.statusText);
        //console.log(response.headers);
        //console.log(response.config);
      }).catch(error => {
        console.log(error)
        this.setState({submitError:"Invalid Credentials"});
      });
    }
    else{
      this.setState({submitError:"Please check the ID"});
    }
  }

  render() {
  
    const { classes } = this.props;
    const { id, password, idError, submitError, redirect } = this.state;

    if(redirect===true){
      return <Redirect to="/welcome" />
    }

    

    return (
      <Card className={classes.card} shadow={5} style={{margin:'auto'}}>
        <CardHeader
            avatar ={ <Avatar className={classes.greenAvatar}>
            <AssignmentIcon />
          </Avatar>}
          title="Enter The Credentials to Login"
          subheader="If forgotten the Password, contact ITSD"
        />
        <CardMedia
          className={classes.media}
          image={image}
          title="Card-Image"
        />
        <CardContent>
        <form noValidate autoComplete="on" onSubmit={this.onSubmit}>
          <TextField
            id="standard-name"
            label="ID"
            className={classes.textField}
            name = "id"
            value={id || ''}
            onChange={this.onChange}
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
            <span className="errorMessage" style={{color: '#f50057', margin:'auto',fontSize:'12px'}}>{idError}</span>
            <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                name= "password"
                type="password"
                value={password || ''}
                onChange={this.onChange}
                margin="normal"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <Lock />
                    </InputAdornment>
                    ),
                }}
                
                />
                <br/> <br/>
                <Button type="submit" variant="outlined" size="small" color="primary" className={classes.margin} style={{minWidth: '275',margin: 'auto'}}>
                    Login
                </Button>
                <br/> <br/>
                <span className="errorMessage" style={{color: '#f50057', margin:'auto',fontSize:'12px'}}>{submitError}</span>
            </form>
         </CardContent>
                

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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);