import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import mina from './assets/Portfolio_kuva.jpg';
import phoneImg from './assets/call-24px.svg';
import emailImg from './assets/mail_outline-24px.svg';
import './FrontPage.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';

import { FormattedMessage, injectIntl } from 'react-intl';

function Experience(props) {
    const {
        headline,
        title,
        company,
        time,
        description,
    } = props

    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (bigScreen) {
        return (
            <div>
                <p className="title">{headline}</p>
                <div className="experienceGrid">
                    <p className="workTitle">{title}</p>
                    <p className="workTitle">{company}</p>
                    <p className="workTime" >{time}</p>
                    <p className="workDesc" >{description}</p>
                </div >
            </div>
        );
    }
    // For smaller screens
    else {
        return (
            <div className="smallScreen">
                <p className="title">{headline}</p>
                <div className="experienceGridSmall">
                    <p className="workTitle">{title}</p>
                    <p className="workTimeSmall" >{time}</p>
                </div >
                <p className="workCompany">{company}</p>
                <p>{description}</p>
            </div>
        );
    }


}

function Skills(props) {
    const {
        headline,
        skill,
        grade,
        gradeN,
    } = props

    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (bigScreen) {
        return (
            <div>
                <p className="title">{headline}</p>
                <div className="skillGrid">
                    <p></p>
                    <p className="skillTitle">{skill}</p>
                    <div className="skillContainer">
                        <div className={gradeN + " skill"}><p>{grade}</p></div>
                    </div>
                </div >
            </div >
        );
    }
    // For smaller screens
    else {
        return (
            <div className="smallScreen">
                <p className="title">{headline}</p>
                <div className="skillGrid">
                    <p className="skillTitle">{skill}</p>
                    <div className="skillContainer">
                        <div className={gradeN + " skill"}><p>{grade}</p></div>
                    </div>
                </div >
            </div >
        );
    }
}


function Introduction(props) {
    const {
        name,
        phone,
        email,
        title,
        paragraphs,
    } = props

    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (bigScreen) {
        return (
            <div className="introGrid">
                <div>
                    <div className="meImgContainer">
                        <img className="meImg" alt="Sanni Lares" src={mina} />
                    </div>
                    <div className="contactInfo">
                        <p style={{ marginBottom: "4px" }} > {name}</p>
                        <div>
                            <img className="icon" alt="" src={phoneImg} />
                            <p style={{ marginBottom: "4px", display: "inline" }} >{phone}   </p>
                        </div>
                        <div>
                            <img className="icon2" alt="" src={emailImg} />
                            <p style={{ marginTop: "2px", display: "inline" }}> {email}</p>
                        </div>
                    </div>
                </div >
                <div className="introduction">
                    <p className="introTitle">{title}</p>
                    <p className="introText">{paragraphs}</p>
                </div>
            </div>
        );
    }
    // For smaller screens
    else {
        return (
            <div className="introGridSmall">
                <div className="contactSmall">
                    <div>
                        <img className="meImg" alt="Sanni Lares" src={mina} />
                    </div>
                    <div className="contactInfo">
                        <p>{name}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div >
                <div className="introduction">
                    <p className="introTitle">{title}</p>

                    <p>{paragraphs}</p>
                </div>
            </div >
        );
    }
}

function ColorPortal() {
    const bigScreen = useMediaQuery(useTheme().breakpoints.up('md'));
    const colorContainer = document.getElementById("colorContainer")
    if (colorContainer) {
        return ReactDOM.createPortal(
            <div className={bigScreen ? "leftBg" : ""} />, colorContainer
        )
    }
    return null
}

function translateWithLineBreaks(intl, id) {
    return intl.formatMessage({ 'id': id }, { br: <> <br /> <br /> </> })

}
function FrontPage(props) {
    const { intl } = props;
    return (
        <div>
            <ColorPortal />
            <div>
                <p className="headline cvHeadline"> Sanni Lares - CV</p>

                <Introduction
                    name="Sanni Lares"
                    phone="0400 267 030"
                    email="sanni.lares@aalto.fi"
                    title={intl.formatMessage({ 'id': 'cv.who' })}
                    paragraphs={translateWithLineBreaks(intl, 'cv.intro')} />

                <div className="bgColor section">
                    <Experience headline={intl.formatMessage({ 'id': 'cv.workExperience' })} title={intl.formatMessage({ 'id': 'cv.juniorJob' })} company={intl.formatMessage({ 'id': 'cv.junior' })} time="8/2019-" description={intl.formatMessage({ 'id': 'cv.juniorDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.siemensJob' })} company={intl.formatMessage({ 'id': 'cv.siemens' })} time="5/2019-8/2019" description={intl.formatMessage({ 'id': 'cv.siemensDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.ultraJob' })} company={intl.formatMessage({ 'id': 'cv.ultra' })} time="1/2019-12/2019" description={intl.formatMessage({ 'id': 'cv.ultraDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.churchJob' })} company={intl.formatMessage({ 'id': 'cv.church' })} time="1/2017-1/2019" description={intl.formatMessage({ 'id': 'cv.churchDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.messuJob' })} company={intl.formatMessage({ 'id': 'cv.messu' })} time="2/2016-3/2016" description={intl.formatMessage({ 'id': 'cv.messuDesc' })} />
                </div>

                <div className="section">
                    <Experience headline={intl.formatMessage({ 'id': 'cv.education' })} title={intl.formatMessage({ 'id': 'cv.info' })} company={intl.formatMessage({ 'id': 'cv.aalto' })} time="2017-" description={intl.formatMessage({ 'id': 'cv.infoDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.ylioppilas' })} company={intl.formatMessage({ 'id': 'cv.norssi' })} time="2013-2017" description={intl.formatMessage({ 'id': 'cv.norssiDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.vaihto' })} company={intl.formatMessage({ 'id': 'cv.csc' })} time="2015" description={intl.formatMessage({ 'id': 'cv.vaihtoDesc' })} />
                </div>

                <div className="bgColor section">
                    <Skills headline={intl.formatMessage({ 'id': 'cv.skills' })} skill="Certified Scrum Master" gradeN="noGrade" />
                    <Skills skill="Adobe CC" gradeN="awe" />
                    <Skills skill="Scala, Python, JS" gradeN="good" />
                    <Skills skill="React, Angular" gradeN="ok" />
                    <Skills skill="HTML, CSS" gradeN="good" />
                    <Skills skill="Microsoft office" gradeN="awe" />
                    <Skills skill="Figma, MarvelApp" gradeN="awe" />
                </div>

                <div className="section">
                    <Experience headline={intl.formatMessage({ 'id': 'cv.vapaaehtois' })} title={intl.formatMessage({ 'id': 'cv.vSchoolJob' })} company={intl.formatMessage({ 'id': 'cv.vSchool' })} time="2013-" description={intl.formatMessage({ 'id': 'cv.vSchoolDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.scout' })} company={intl.formatMessage({ 'id': 'cv.scoutgroup' })} time="2012-2016" description={intl.formatMessage({ 'id': 'cv.scoutDesc' })} />
                    <Experience title={intl.formatMessage({ 'id': 'cv.vChurchJob' })} company={intl.formatMessage({ 'id': 'cv.vChurch' })} time="2012-2015" description={intl.formatMessage({ 'id': 'cv.vChurchDesc' })} />
                </div>
            </div>
        </div>
    );
}

export default injectIntl(FrontPage);

