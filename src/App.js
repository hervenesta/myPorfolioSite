import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import profil from './img/portfolioPic3.jpeg';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/"> Herve Tchouamani</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{ background: '#000000',  
                          background:' -webkit-linear-gradient(to right, #434343, #000000)',  
                          background: 'linear-gradient(to right, #434343, #000000)' }} 
                          title={<Link style={{textDecoration:'none', color:'black'}} to="/"><img style={{width:'100px', height:'100px'}} src={profil} alt="herve profil"></img><div style={{color:'white'}}>Herve Tchouamani</div></Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
