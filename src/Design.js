import React from 'react';
// import Container from '@material-ui/core/Container';
import './Design.css';
// import designData from './designData.js';
import mina from './assets/minä.jpg';
import linkedin from './assets/LI-In-Bug.png';
import { makeStyles } from '@material-ui/core/styles';
import Gallery from './Gallery';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function Categories(props) {
    const {
        category
    } = props

    return (
        <div>
            <div className="container">
                <div className="imgHover">
                    <img className="designImg" src={category.img} alt={category.otsikko}></img>
                    <div className="centered">
                        <p>{category.otsikko}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Design() {
    const classes = useStyles();

    return (
        <div>
            <div className="header">

                <img className="headerImg" src={mina} alt="Sanni Lares"></img>
                <div className="headerText">
                    <span id="linkedin"><img src={linkedin} alt="in" id="inImage" />LinkedIn</span>
                    <div style={{ width: "50%" }}>
                        <p id="helloText">Hei<span class="lastChar">.</span></p>
                        <p>Ja tervetuloa tutustumaan portfoliooni!</p>
                        <p>Käyttäjä, design ja tekniikka.</p>
                        <p>Aalto-yliopisto  informatioverkostot</p>
                    </div>
                </div>
            </div>
            <Gallery />
        </div >
    );
}

export default Design;