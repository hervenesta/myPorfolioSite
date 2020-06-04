import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import herveyPic from '../img/portfolioPic.jpeg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';
import SelectedProjects from './SelectedProjects';
// import resume from '../img/resume.pdf';

class Resume extends Component{
    // exportPdf(){
    //      let a = document.createElement("a");
    //      a.href='data:attachment/pdf' + this.resume;
    //      a.target="_blank";
    //      a.download="resume.pdf";
    //      document.body.appendChild(a);
    //      a.click();
    //      console.warn(resume);
    // }
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={herveyPic}
                                alt="hervey pic"
                                style={{height: '300px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '10px'}}>Herve Tchouamani</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                        I am graduating Spring 2020 from Baruch College with a degree in 
                        Computer Information Systems. I am eager to learn new and current 
                        technologies. I developed a solid background from CUNY Tech Prep 
                        which allows me to continually build my web development skills. 
                        I am passionate about developing the server side of an application. 
                        </p>
                        <div id="skill-animation">
                            HTML/CSS <br></br>
                            Boostrap <br></br>
                            React <br></br>
                            Express <br></br>
                            Java <br></br>
                            PostgreSQL
                        </div>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Brooklyn, New York, 11212</p>
                        <h5>E-mail</h5>
                        <p>hervenesta@gmail.com</p>
                        <h5>Other Webpage</h5>
                        <p><a href="https://covid19infos.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'black'}}>Covid-19 Statistics</a></p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear = {2017}
                            endYear = {2020}
                            schoolName = "Baruch College, New York"
                            schoolDescription = "Bachelor of Business Administration in Computer Information Systems"
                        />
                        <Education 
                            startYear = {2013}
                            endYear = {2014}
                            schoolName = "Montpellier University, France"
                            schoolDescription = "Master's Degree in Financial Risk Management"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Selected Projects</h2>
                        <SelectedProjects
                            startYear="Oct 2019"
                            endYear="Jan 2020"
                            projectName="Investa App"
                            projectDescription="Built a web application using JavaScript and PostgreSQL to train people on how to invest in stock markets.
                            Developed the frontend with React where users can view the line chart of any stock, buy or sell stocks.
                            Set up the server with Express to handle transactions and communicate with the database through Sequelize in order to build the APIs so that users can view the transaction summary along with their balance and their total number of shares."
                        />
                        <SelectedProjects 
                            startYear="Jan 2019"
                            endYear="May 2019"
                            projectName="Data Warehousing"
                            projectDescription="Implemented the ETL Process on YouTube and TED dataset using Pentaho data integration tool to apply Kimball lifecycle.
                            Created a ROLAP System in Microsoft AZURE to host the DataWarehouse.
                            Extracted meaningful insights from the DataWarehouse using Tableau for objective decision making."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear = "June 2019"
                            endYear = "June 2020"
                            jobName = "Software Developer Student, New York"
                            jobDescription="Learn in-demand techonologies like React, Node + Express, and PostgreSQL
                            as well as industry best practices for design, implementation, and deployment such as
                            MVC, version control with Git/GitHub, agile and Scrum with Trello and Slack, test driven
                            development, and CI/CD."
                        />
                         <Experience
                            startYear="Feb 2019"
                            endYear="May 2019"
                            jobName="OLTP Administrator at the Research Foundation of Cuny, New York"
                            jobDescription="Created or Updated Vendors information in the database based on the W9 Form in order to process the electronic payment. Retrieved the old invoice from the database and matched it with the new one to solve the problem of duplicate invoice number. Communicated via Email or phone with other departments before processing certain transactions to guarantee consistency."
                        />
                        <Experience 
                            startYear = "Nov 2014"
                            endYear = "Nov 2015"
                            jobName = "Researcher at the Montpellier Laboratory of Theoretical and Applied Economy, France"
                            jobDescription = "Analyzed different regression methods based on Interval Data to write a 73 pages thesis. Utilized results on the electricity data in France to understand the consumption behavior. It resulted that Interval Data provided high accuracy in the prediction of electricity consumption."
                        />
                       
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        
                        <Skills 
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills 
                            skill="SQL     "
                            progress={80}
                        />
                        <Skills 
                            skill="React   "
                            progress={75}
                        />
                         <Skills 
                            skill="Java    "
                            progress={70}
                        />
                        <Skills 
                            skill="C++     "
                            progress={70}
                        />
                        <Skills 
                            skill="Express "
                            progress={65}
                        />
                        <Skills
                            skill="Python  "
                            progress={50}
                        />
                    </Cell>
                </Grid>
                {/* <button onClick={()=>{this.exportPdf()}}>Download Resume</button> */}
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Resume;