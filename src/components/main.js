import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login';
import Test from './test';
import Course from './course';
import CourseList from './courselist';
import LandingPage from './landingpage';
import Projects from './scourse';
import Resume from './sprofile';
import Calendar from './calendar';

const Main = () => (
    <Switch>
      <Route path="/welcome" component={LandingPage} />
      <Route path="/courselist" component={CourseList} />
      <Route path="/scourse" component={Projects} />
      <Route path="/sprofile" component={Resume} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/" component={Login} />
    </Switch>
);

export default Main;