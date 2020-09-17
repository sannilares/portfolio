import React from 'react';
import './Design.css';
import mina from './assets/minä.jpg';
import linkedin from './assets/LI-In-Bug.png';
import Gallery from './Gallery';
import { FormattedMessage, injectIntl } from 'react-intl';

function translateWithLineBreaks(intl, id) {
    return intl.formatMessage({ 'id': id }, { br: <br /> })

}

function Design(props) {
    const { intl } = props;

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
                        <p>{translateWithLineBreaks(intl, "aalto")}</p>
                    </div>
                </div>
            </div>
            <Gallery />
        </div >
    );
}

export default injectIntl(Design);