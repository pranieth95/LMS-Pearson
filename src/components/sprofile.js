//student Profile

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Year1 from './year'; 



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="data:image/jpeg;base64,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"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Prof. Nick Pothas</h2>
            <h4 style={{color: 'grey'}}>CAREER SUMMARY</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Professor Nick Pothas is the founder Dean of the Faculty of Business. Prior to joining, Pothas was a Lecturer at the University of Canterbury, New Zealand. He has also served in the UNDP as a MIS Specialist and had been holding several senior positions in the Sri Lanka Administrative Service (SLAS).                         

He holds PhD (Canterbury- New Zealand), MBA (Sri J- Sri Lanka), MSc (Reading-UK), MSc (Sri.j) and the Postgraduate Diploma in International Affairs from Bandaranayke Centre for International Studies, Sri Lanka.</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Hacker Way, Menlo Park, Cyber Space</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Academic Qualifications</h2>


            <Year1
            subject="PhD"
            grade="University of Canterbury, New Zealand."
            
              />
            <Year1
            subject="MBA"
            grade="Postgraduate Institute of Management, University of Sri Jayewardenepura, Sri Lanka."
              />
            <Year1
            subject="MSc"
            grade=" (Tropical Agricultural Development) University of Reading, UK"
              />


                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Research Interests and Memberships</h2>
              <Year1
            subject="IT applications in the Education Sector; Service Quality in Education."
            grade=""
              />
            <Year1
            subject="Measurement of IS/business constructs / Development of Instruments."
            grade=""
              />
            <Year1
            subject="Change Management; IT Project Management."
            grade=""
              />
           
           <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Publications</h2>
              
              <Year1
            subject="Characterizing Employee Commitment and Relationship Between Employee Empowerment and Commitment "
            grade=""
              />
            <Year1
            subject="Knowledge Adoption in Industrial Craftsmen: Case of Eye Accident Victims"
            grade=""
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
