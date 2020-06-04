import React , {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import herveyPic from '../img/portfolioPic.jpeg';
import Footer from './Footer';
import GetInTouch from './GetInTouch';

class Contact extends Component{
    render(){
        return (
            <div>
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell col={6}> 
                            <h2>Herve TCHOUAMANI</h2>
                            <img 
                                src={herveyPic}
                                alt="Hervey Pic"
                                style={{height: '250px'}}
                            />  
                        </Cell>
                        <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr />
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true" />
                                            (347)-200-2216
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            hervenesta@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-facebook-square" aria-hidden="true" />
                                            Herve Van Nesta
                                        </ListItemContent>
                                    </ListItem>
                                    
                                </List>   
                            </div>                        
                        </Cell>
                    </Grid>
                </div>
                <div>
                    <GetInTouch />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Contact;