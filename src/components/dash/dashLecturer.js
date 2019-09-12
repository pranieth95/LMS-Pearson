import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList, Drawer } from 'react-mdl';
import Main from '../main';
import '../../App.css';     

class DashLecturer extends React.Component {
    render() {
        console.log("came in brother");
        return (
            <div className="demo-big-content">
                    <Layout>
                        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/welcome">Lecturer Home</Link>} scroll>
                            <Navigation>
                                <Link to="/scourse">Manage Course</Link>
                                <Link to="/sprofile">Lecturer Profile</Link>
                                <Link to="/calendar">Calendar</Link>
                            </Navigation>
                        </Header>
                        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/welcome">Lecturer Home</Link>}>
                            <Navigation>
                                <Link to="/scourse">Course Materials</Link>
                                <Link to="/sprofile">Lecturer Profile</Link>
                                <Link to="/calendar">Calendar</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                            <Main/>
                        </Content>
                    </Layout>
            </div>
        );
    }

}

export default DashLecturer;