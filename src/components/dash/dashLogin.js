import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from '../main';
import '../../App.css'; 

class DashLogin extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Ceylon Informatics Institute of Technology</Link>} scroll>
                    <Navigation>
                        <Link to="/">Login</Link>
                    </Navigation>
                </Header>
                <Content className="contentVal">
                <Main />
                </Content>
                <Footer size="mini" className="footer">
                    <FooterSection type="left" logo="Ceylon Informatics Institure of  | © Pearson">
                        <FooterLinkList>
                            <a href="https://www.google.com">Help</a>
                            <a href="https://www.google.com">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>
        );
    }

}

export default DashLogin;