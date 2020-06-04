import React, {Component} from 'react';
import {Grid, Cell, List, ListItem} from 'react-mdl';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div className="footer-bg-dark">
            <Grid className="footer-center">
                <Cell col={4} >
                    <h3>Projects</h3>
                    <List>
                        <ListItem style={{color: 'white'}}>React</ListItem>
                        <ListItem style={{color: 'white'}}>Data Warehousing</ListItem>
                        <ListItem style={{color: 'white'}}>Investa App</ListItem>
                        <ListItem style={{color: 'white'}}>Covid-19 App</ListItem>
                    </List>               
                </Cell>
                <Cell col={4}>
                    <h3>Features</h3>
                    <List>
                        <ListItem ><Link style={{color: 'white'}} to="/">Home</Link></ListItem>
                        <ListItem ><Link style={{color: 'white'}} to="/aboutme">About Me</Link></ListItem>
                        <ListItem ><Link style={{color: 'white'}} to="/resume">Resume</Link></ListItem>
                        <ListItem ><Link style={{color: 'white'}} to="/projects">Projects</Link></ListItem>
                        <ListItem ><Link style={{color: 'white'}} to="/contact">Contact</Link></ListItem>
                    </List> 
                </Cell>
                <Cell col={4}>
                    <h3>Social Media</h3>
                    <List className="footer-social-links">
                        <ListItem>
                            <Link style={{color: 'white'}} to="https://google.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                Linkedin
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link style={{color: 'white'}} to="https://google.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                Github
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link style={{color: 'white'}} to="https://google.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                                Facebook
                            </Link>
                            </ListItem>
                    </List>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Footer;