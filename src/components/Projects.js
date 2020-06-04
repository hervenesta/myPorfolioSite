import React , {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Footer from './Footer';

class Projects extends Component{
    state = {
        activeTab: 0
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div style={{textAlign:'center'}}>
                    <h2>Technologies Used</h2>
                    <h4>React | Express | Sequelize | PostgreSQL</h4>
                    <div className="projects-grid">         
                        <Card className="card-hover" shadow={5} style={{minWidth: '450', margin:'auto', marginRight:'20px'}}>
                            <CardTitle style={{color: 'black', height: '200px', 
                            background: 'url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg) center/cover'}} >
                                Covid-19 Statistics
                            </CardTitle>
                            <CardText style={{fontSize:'20px', lineHeight:'1.5', textAlign:'left'}}>
                                Built a web app with React and Express to provide statistics on the expansion of the coronaVirus worldwide.<br></br><br></br>
                                The server receives the API, filters and formats it so that the front-end gets only the data it needs to be displayed to the users.<br></br><br></br>
                                The app has been deployed in heroku.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/hervenesta/covid19" target="_blank" rel="noopener noreferrer">Github</a></Button>
                                <Button colored><a href="https://covid19infos.herokuapp.com/" target="_blank" rel="noopener noreferrer">Website</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{width: '450px', margin:'auto', marginLeft:'20px'}}>
                            <CardTitle style={{color: '#fff', height: '176px', 
                            background: 'url(https://storage.googleapis.com/investa/investapic.png) center/cover'}} >
                                Investa App
                            </CardTitle>
                            <CardText style={{fontSize:'20px', lineHeight:'1.5', textAlign:'left'}}>
                                Built a web application using JavaScript and PostgreSQL to train people on how to invest in stock markets.<br></br><br></br>
                                Developed the frontend with React where users can view the line chart of any stock, buy or sell stocks.<br></br><br></br>
                                Set up the server with Express to handle transactions and communicate with the database through Sequelize in order to build the APIs so that users can view the transaction summary along with their balance and their total number of shares.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/hervenesta/investa" target="_blank" rel="noopener noreferrer">Github</a></Button>
                                <Button colored><a href="https://storage.googleapis.com/investa/investa.mp4" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div style={{textAlign:'center'}}>
                    <h2>Technologies Used</h2>
                    <h4>GCP | Microsoft Azure | SQL Server | Pentaho</h4>
                    <div className="projects-grid">
                        <Card shadow={5} style={{width: '379px', margin:'auto', marginRight:'20px'}}>
                            <CardTitle style={{color: 'black', height: '176px', 
                            background: 'url(https://raw.githubusercontent.com/hervenesta/hervetchouamani/master/img/physicalDesign.png) center/cover'}} >
                                Data Warehousing
                            </CardTitle>
                            <CardText style={{fontSize:'20px', lineHeight:'1.5', textAlign:'left'}}>
                            	Implemented the ETL Process on YouTube and TED dataset using Pentaho data integration tool to apply Kimball lifecycle.<br></br><br></br>
                                Created a ROLAP System in Microsoft AZURE to host the DataWarehouse.<br></br><br></br>
                                Extracted meaningful insights from the DataWarehouse using Tableau for objective decision making.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://drive.google.com/file/d/1fBQt2i5Kl36MON9HqK_guLVBDWU32r6v/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth: '450', margin:'auto', marginLeft:'20px'}}>
                            <CardTitle style={{color: 'black', height: '176px', 
                            background: 'url(https://pbs.twimg.com/profile_images/1105378972156649472/9W16lxHj_400x400.png) center/cover'}} >
                                Big Data Analytics with Hadoop
                            </CardTitle>
                            <CardText style={{fontSize:'20px', lineHeight:'1.5', textAlign:'left'}}>
                                Analyzed over 100 million data of Yellow Taxi in NYC using Google Cloud Platform to get hands on cloud computing.<br></br><br></br>
                                Created a Cloud Storage Bucket to store data and configured a Google Cloud Dataproc cluster.<br></br><br></br>
                                Launched Spark-SQL from Secure Shell to extract information, such as the cost per mile for the year 2018.
                            </CardText>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <hr style={{borderTop: '3px solid #833fb2', width: '55%', margin:'auto', marginTop:'40px'}}/>
                    <div style={{marginTop:'50px'}}>  
                        <h2>Technologies Used</h2>   
                        <h4>Matlab | R | EVIEWS | Excel | Latex</h4>  
                        <h2>Keywords:</h2>
                        <h4>Time Series, Forecasting, Interval Data, Regression, Fourier Series </h4>
                        <Card shadow={5} style={{width: '750px', margin:'auto'}}>
                            <CardTitle style={{color: 'black', height:'300px',
                                background: 'url(https://storage.googleapis.com/investa/intervalData.png) center/cover'}} >
                                Time Series Analysis on Interval Data                          
                            </CardTitle>
                            <CardText style={{fontSize:'20px', lineHeight:'1.5', textAlign:'left'}}>
                            This working paper presents the methods for estimating the parameters of a 
                            regression model when the variables are observed in an interval format. It 
                            illustrates this estimation procedure on electricity consumption data in France, 
                            in order to make a comparison between the forecast values ​​from the interval data and 
                            the confidence interval of the forecast from the point data. First, we show that the 
                            use of single values ​​to characterize an economic variable leads to a loss of information. 
                            In a second step, these estimation methods were applied to interval electricity 
                            consumption data in France for forecasting purposes. Examining the evolution of our 
                            data via tests allowed us to detect a seasonal effect, but not an extra-seasonal one. 
                            Thus, the estimation procedures are implemented on seasonally adjusted data by 
                            the Census X12 method, and the forecast will take into account the seasonal coefficients 
                            obtained after seasonal adjustment. To measure the value of analysis on interval data, 
                            we compared the forecast on interval data to the confidence interval of the forecast on 
                            point data. In the last section, the observation of the profile of the forecast 
                            confidence intervals and that of the forecasts on the interval data revealed the 
                            inclusion of the confidence interval of the forecast on the classical data, 
                            in the bounds predicted by the interval data. This inclusion persists with the 
                            increase in the level of confidence in the forecast confidence interval. 
                            We therefore concluded on the impossibility of conventional data to cover 
                            the range of the true value of the variable studied.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3523231#references-widget" target="_blank" rel="noopener noreferrer">Read/Download Article</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        }
    }
    render(){
        
        return (
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Web Development</Tab>
                    <Tab>Data Warehousing | Data Analytics</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content" >
                                {this.toggleCategories()}
                            </div> 
                        </Cell>
                    </Grid>
                    <Footer />
            </div>
        );
    }
}

export default Projects;