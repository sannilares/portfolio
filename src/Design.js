import React from 'react';
import './Design.css';
import mina from './assets/minä.jpg';
import linkedin from './assets/LI-In-Bug.png';
import Gallery from './Gallery';
import { FormattedMessage } from 'react-intl';

function Design() {

    return (
        <div>
            <div className="header">

                <img className="headerImg" src={mina} alt="Sanni Lares"></img>
                <div className="headerText">
                    <span id="linkedin"><a href="https://www.linkedin.com/in/sannilares" className="designLink"><img src={linkedin} alt="in" id="inImage" />LinkedIn</a></span>
                    <div style={{ width: "50%" }}>
                        <p id="helloText"><FormattedMessage id="hello" /><span className="lastChar">.</span></p>
                        <p><FormattedMessage id="welcome" /></p>
                        <p><FormattedMessage id="design" /></p>
                        <p><FormattedMessage id="aalto" /></p>
                    </div>
                </div>
            </div>
            <Gallery />
        </div >
    );
}

export default Design;