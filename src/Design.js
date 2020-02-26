import React from 'react';
import './Design.css';
import mina from './assets/minä.jpg';
import linkedin from './assets/LI-In-Bug.png';
import Gallery from './Gallery';

function Design() {

    return (
        <div>
            <div className="header">

                <img className="headerImg" src={mina} alt="Sanni Lares"></img>
                <div className="headerText">
                    <span id="linkedin"><img src={linkedin} alt="in" id="inImage" />LinkedIn</span>
                    <div style={{ width: "50%" }}>
                        <p id="helloText">Hei<span class="lastChar">.</span></p>
                        <p>Ja tervetuloa tutustumaan portfoliooni!</p>
                        <p>Käytettävyys, design ja tekniikka.</p>
                        <p>Aalto-yliopisto  informatioverkostot</p>
                    </div>
                </div>
            </div>
            <Gallery />
        </div >
    );
}

export default Design;