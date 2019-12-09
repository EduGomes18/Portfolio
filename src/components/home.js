import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../logo.png';

class Home extends Component{
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}} >
            <Grid className="page-color">
            <Cell col={4}>
            <img src={logo} className="avatar-img" alt="avatar" />
            </Cell>
            <Cell col={6}>
            <div className="banner-text">
                <h1 className="textBanner">
                    Web Designer
                </h1>
                <hr/>
                <p> HTML/CSS | Bootstrap | JavaScript | React | NodeJs | PHP</p>

                <div className="social-links">
                {/* Linkedin*/}
                <a href="http//google.com" rel="noopener noreferrer" targe ="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                 {/* Github*/}
                 <a href="http//google.com" rel="noopener noreferrer" targe ="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                {/* Facebook*/}
                <a href="http//google.com" rel="noopener noreferrer" targe ="_blank">
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                </a>
                {/* Instagram*/}
                <a href="http//google.com" rel="noopener noreferrer" targe ="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"/>
                </a>
            </div>
            </div>
            
            </Cell>
            </Grid>
            </div>
        )
    }

}

export default Home;