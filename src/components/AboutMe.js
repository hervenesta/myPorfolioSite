import React , {Component} from 'react';
import hervey1 from '../img/hervey1.jpeg';
import hervey2 from '../img/hervey2.png';
import Footer from './Footer';

class AboutMe extends Component{
    render(){
        return (
            <div>
                <div>
                    <div className="aboutme-center">
                        <h1>About Me</h1>
                        <h4>Find out who I am and what I am all about.</h4>
                    </div>
                    <div className="aboutme-container">
                        <h2>Who I am</h2>
                        <br></br>
                        <p>
                        My name is Hervey. I live in Brooklyn, New York and I'm Currently looking for a Software Developer position.
                        <br></br>
                        <br></br>
                        I am graduating Spring 2020 from Baruch College with a Bachelor's degree in Computer Information Systems and in the meantime, 
                        I was pursuing a Full Stack Javascript training program 
                        at <a href="https://cunytechprep.nyc/" target="_blank" rel="noopener noreferrer">CUNY Tech Prep</a>.
                        <br></br>
                        <br></br>
                        Well-organised person, problem solver, independent employee with high attention to detail.
                        I'm a fan of soccer. My favorite team is Chelsea Football Club in London and my favorite player
                        is the Ivorian Didier Drogba.
                        <div className="aboutme-pic">
                            <img
                            src={hervey1}
                            alt="hervey pricture 1"
                            className="hervey1"
                            />
                            <img
                            src={hervey2}
                            alt="hervey pricture 2"
                            className="hervey2"
                            />                           
                        </div>
                        </p>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AboutMe;