import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import './CV.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { injectIntl } from 'react-intl';
import mina from './assets/sanni.jpg';
import phoneImg from './assets/call-24px.svg';
import emailImg from './assets/mail_outline-24px.svg';

function Experience(props) {
  const {
    headline,
    title,
    company,
    time,
    description,
    id,
  } = props;

  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (bigScreen) {
    return (
      <div>
        {headline && <p className="title" id={id}>{headline}</p>}
        <div className="experienceGrid">
          <p className="workTitle">{title}</p>
          <p className="workTitle">{company}</p>
          <p className="workTime">{time}</p>
          <p className="workDesc">{description}</p>
        </div>
      </div>
    );
  }

  // For smaller screens
  return (
    <div className="smallScreen">
      <p className="title">{headline}</p>
      <div className="experienceGridSmall">
        <p className="workTitle">{title}</p>
        <p className="workTimeSmall">{time}</p>
      </div>
      <p className="workCompany">{company}</p>
      <p>{description}</p>
    </div>
  );
}

Experience.propTypes = {
  company: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.string,
  id: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
};

function Skills(props) {
  const {
    headline,
    type,
    skill,
    id,
  } = props;

  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (bigScreen) {
    return (
      <div>
        {headline && <p className="title" id={id}>{headline}</p>}
        <div className="skillGrid">
          <p className="workTitle">{type}</p>
          <p className="workDesc">{skill}</p>
        </div>
      </div>
    );
  }

  // For smaller screens
  return (
    <div className="smallScreen">
      <p className="title">{headline}</p>
      <div>
        <p className="workTitle">{type}</p>
        <p>{skill}</p>
      </div>
    </div>
  );
}

Skills.propTypes = {
  headline: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  skill: PropTypes.string,
};

function navigateDownTo(location) {
  const navigateHere = document.getElementById(location);
  navigateHere.scrollIntoView({ behavior: 'smooth' });
}

function Introduction(props) {
  const {
    name,
    phone,
    email,
    title,
    paragraphs,
    intl,
  } = props;

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
            <p style={{ marginBottom: '4px' }}>
              {' '}
              {name}
            </p>
            <div>
              <img className="icon" alt="" src={phoneImg} />
              <p style={{ marginBottom: '4px', display: 'inline' }}>
                {phone}
                {' '}
              </p>
            </div>
            <div>
              <img className="icon2" alt="" src={emailImg} />
              <p style={{ marginTop: '2px', display: 'inline' }}>
                {' '}
                {email}
              </p>
            </div>
          </div>
        </div>
        <div className="introduction">
          <p className="introTitle">{title}</p>
          <p className="introText">{paragraphs}</p>
          <div className="CVButtons">
            <Button onClick={() => navigateDownTo('cv.workExperience')}>{intl.formatMessage({ id: 'cv.workExperience' })}</Button>
            <Button onClick={() => navigateDownTo('cv.education')}>{intl.formatMessage({ id: 'cv.education' })}</Button>
            <Button onClick={() => navigateDownTo('cv.skills')}>{intl.formatMessage({ id: 'cv.skills' })}</Button>          </div>
        </div>
      </div>
    );
  }
  // For smaller screens

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
      </div>
      <div className="introduction">
        <p className="introTitle">{title}</p>

        <p>{paragraphs}</p>
      </div>
    </div>
  );
}

Introduction.propTypes = {
  email: PropTypes.string,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  name: PropTypes.string,
  paragraphs: PropTypes.object,
  phone: PropTypes.string,
  title: PropTypes.string,
};

function ColorPortal() {
  const bigScreen = useMediaQuery(useTheme().breakpoints.up('md'));
  const colorContainer = document.getElementById('colorContainer');
  if (colorContainer) {
    return ReactDOM.createPortal(
      <div className={bigScreen ? 'leftBg' : ''} />, colorContainer,
    );
  }
  return null;
}

function translateWithLineBreaks(intl, id) {
  return intl.formatMessage({ id }, {
    br: <>
      {' '}
      <br />
      {' '}
      <br />
      {' '}
    </>,
  });
}
function CV(props) {
  const { intl } = props;
  return (
    <div>
      <ColorPortal />
      <div>
        <p className="headline cvHeadline">Curriculum Vitae</p>

        <Introduction
          name="Sanni Lares"
          phone="0400 267 030"
          email="sanni.lares@gmail.com"
          title={intl.formatMessage({ id: 'cv.who' })}
          paragraphs={translateWithLineBreaks(intl, 'cv.intro')}
          intl={intl}
        />

        {/* Work experience */}
        <div className="bgColor section">
          <Experience id="cv.workExperience" headline={intl.formatMessage({ id: 'cv.workExperience' })} title={intl.formatMessage({ id: 'cv.taitoJob' })} company={intl.formatMessage({ id: 'cv.taito' })} time="5/2021-6/2024" description={intl.formatMessage({ id: 'cv.taitoDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.thesisJob' })} company={intl.formatMessage({ id: 'cv.thesis' })} time="2/2023-9/2023" description={intl.formatMessage({ id: 'cv.thesisDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.subrosaJob' })} company={intl.formatMessage({ id: 'cv.subrosa' })} time="4/2020-5/2021" description={intl.formatMessage({ id: 'cv.subrosaDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.NAPCONJob' })} company={intl.formatMessage({ id: 'cv.NAPCON' })} time="5/2020-8/2020" description={intl.formatMessage({ id: 'cv.NAPCONDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.juniorJob' })} company={intl.formatMessage({ id: 'cv.junior' })} time="8/2019-6/2023" description={intl.formatMessage({ id: 'cv.juniorDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.siemensJob' })} company={intl.formatMessage({ id: 'cv.siemens' })} time="5/2019-8/2019" description={intl.formatMessage({ id: 'cv.siemensDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.ultraJob' })} company={intl.formatMessage({ id: 'cv.ultra' })} time="1/2019-12/2019" description={intl.formatMessage({ id: 'cv.ultraDesc' })} />
        </div>

        {/* List of skills */}
        <div className="section">
          <Skills id="cv.skills" headline={intl.formatMessage({ id: 'cv.skills' })} type={intl.formatMessage({ id: 'cv.skillThemeTools' })} skill={translateWithLineBreaks(intl, 'cv.skillListTools')} />
          <Skills type={intl.formatMessage({ id: 'cv.skillThemeProcess' })} skill={translateWithLineBreaks(intl, 'cv.skillListProcess')} />
          <Skills type={intl.formatMessage({ id: 'cv.skillThemeProgramming' })} skill={translateWithLineBreaks(intl, 'cv.skillListProgramming')} />
          <Skills type={intl.formatMessage({ id: 'cv.skillThemeOther' })} skill={translateWithLineBreaks(intl, 'cv.skillListOther')} />
        </div>

        {/* Education */}
        <div className="bgColor section">
          <Experience id="cv.education" headline={intl.formatMessage({ id: 'cv.education' })} title={intl.formatMessage({ id: 'cv.info' })} company={intl.formatMessage({ id: 'cv.aalto' })} time="2017-2024" description={intl.formatMessage({ id: 'cv.infoDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.ranskavaihto' })} company={intl.formatMessage({ id: 'cv.usmb' })} time="2022" description={intl.formatMessage({ id: 'cv.usmbDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.ylioppilas' })} company={intl.formatMessage({ id: 'cv.norssi' })} time="2013-2017" description={intl.formatMessage({ id: 'cv.norssiDesc' })} />
          <Experience title={intl.formatMessage({ id: 'cv.vaihto' })} company={intl.formatMessage({ id: 'cv.csc' })} time="2015" description={intl.formatMessage({ id: 'cv.vaihtoDesc' })} />
        </div>
      </div>
    </div>
  );
}

export default injectIntl(CV);
