import React, { Component } from 'react';
import './App.css';  
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import DashLecturer from './components/dash/dashLecturer';
import DashLogin from './components/dash/dashLogin';   
//import Divider from '@material-ui/core/Divider';
/*
                        <Link to="/test">Registration</Link>
                        <Link to="/course">course</Link>
                        <Link to="/courselist">CourseList</Link>
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logged: false
        };
    }
    
    render() {
        
        return (
        <div className="App">
            {this.state.logged ? <DashLecturer /> : <DashLogin />}
        </div>
        );
    }
}

export default App;
