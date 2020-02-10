import React from 'react';
import './Footer.css';
import linkedin from './assets/LI-In-Bug.png';

function Footer() {

    return (
        <div id="footer">
            <p className="contact"><img src={linkedin} alt="in" className="linkedin" />LinkedIn | 0400267030 | sanni.lares@aalto.fi</p>
            <p className="copyright">Copyright Sanni Lares</p>
        </div >
    );
}

export default Footer;