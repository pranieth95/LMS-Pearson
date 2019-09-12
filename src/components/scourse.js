//Course Materials

import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }

  toggleCategories() {

  if(this.state.activeTab === 1) {
      return (
        
        <div className="wrapper">
        <div className="form-wrapper">
          
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Student Name</label>
              <input
                
                placeholder="Student Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />

            </div>
            <div className="lastName">
              <label htmlFor="lastName">Student ID</label>
              <input
               
                placeholder="Student ID"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="email">
              <label htmlFor="email">Key of Module</label>
              <input
            
                placeholder="Enrollment Key"
                type="numbers"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="password">
              <label htmlFor="password">Coursework Marks</label>
              <input
              
                placeholder="Coursework Marks"
                type="numbers"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>

                        <div className="password">
              <label htmlFor="password">Mid Term Marks</label>
              <input
              
                placeholder="Mid Term Marks"
                type="numbers"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>

                        <div className="password">
              <label htmlFor="password">Final Marks</label>
              <input
              
                placeholder="Final Marks"
                type="numbers"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>


            <div className="createAccount">
              <button type="submit">Insert Marks</button>
              <button type="submit">Update Marks</button>
              <button type="submit">Delete Marks</button>
            </div>
          </form>


         
          </div>
      
      </div>





      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.arra-pm.com/wp-content/uploads/2016/03/Assurance-2.jpg) center / cover'}} >Tutorial #1</CardTitle>
            <CardText>
            This tutorial is about GRC
            </CardText>
            <CardActions border>
              <Button colored>Download</Button>
              <Button colored>Link</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://asrconsultoria.com.br/wp-content/uploads/2016/06/10-Different-Types-of-Software-Development.jpg) center / cover'}} >Tutorial #2</CardTitle>
            <CardText>
              This tutorial is about Application Security 
            </CardText>
            <CardActions border>
              <Button colored>Download</Button>
              <Button colored>Link</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >Tutorial #3</CardTitle>
            <CardText>
            This tutorial is about  Network Security
            </CardText>
            <CardActions border>
              <Button colored>Download</Button>
              <Button colored>Link</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


                    {/* Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.arra-pm.com/wp-content/uploads/2016/03/Assurance-2.jpg) center / cover'}} >Tutorial #1</CardTitle>
            <CardText>
            This tutorial is about GRC
            </CardText>
            <CardActions border>
              <Button colored>Download</Button>
              <Button colored>Link</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Cryptography</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>Student Notices</Tab>
          <Tab>Grading System </Tab>
           <Tab>Course MAterials</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
