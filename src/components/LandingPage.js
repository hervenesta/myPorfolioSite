import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class LandingPage extends Component{
    render(){
        return (
            <div style={{width: '100vw', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text" >
                            <h3>Hey, I'm Hervey.</h3>
                            <p>
                                Incomming Software Developer and Data Engineer from Brooklyn, New York.
                                I'm passionate about learning any current or new technology.
                                <div>
                                    <Link className="project-link" to="/projects">My Projects</Link>
                                </div>
                            </p>
                            <hr />
                            <p>HTML/CSS | Boostrap | React | Express | Java | Sequelize | PostgreSQL</p>
                            <div className="social-links">
                                {/* linkedin */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* github */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Facebook */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;