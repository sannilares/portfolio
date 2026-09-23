import React, { useEffect } from 'react';
import './Portfolio.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import UIUXData from './DataUIUX';
import Gallery from './Gallery';
import OhterProjectsData from './DataOtherProjects';
import CareerTimeline from './CareerTimeline';

export const UIUX_SECTION_ID = 'selected-projects';
export const OTHER_PROJECTS_SECTION_ID = 'personal-projects';

// Jos haetaan ulkopuolista dataa, on kieli määriteltävä erikseen fallbackeineen
const lang = localStorage.getItem('language') || 'fi';
function ColorPortal() {
  const bigScreen = useMediaQuery(useTheme().breakpoints.up('lg'));
  const colorContainer = document.getElementById('colorContainer');
  if (colorContainer) {
    return ReactDOM.createPortal(
      <div className={bigScreen ? 'rightBg' : ''} />, colorContainer,
    );
  }
  return null;
}

function Portfolio() {
  const bigScreen = useMediaQuery(useTheme().breakpoints.up('sm'));
  const chosenOnes = useMediaQuery(useTheme().breakpoints.up('lg'));
  const webCellHeight = bigScreen ? 340 : 292;
  const screenSize = chosenOnes ? 'galleryBigScreen' : 'gallerySmallScreen';
  const spacing = bigScreen ? 2 : 8;
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    requestAnimationFrame(() => {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) target.scrollIntoView();
    });
  }, [hash]);

  const uiuxIntro = lang === 'en' ? (
    <>
      <p>My work has gradually moved from designing interfaces toward solving broader problems — understanding users, business needs and the systems behind the experience.</p>
      <p>These projects span UX/UI design, service design, experimentation and functional architecture.</p>
    </>
  ) : null;

  const otherProjectsIntro = lang === 'en' ? (
    <p>Things I&apos;ve built, designed, organised, or otherwise spent far too much time thinking about.</p>
  ) : null;

  return (
    <div>
      {chosenOnes && (
        <>
          <ColorPortal />
          <CareerTimeline />
        </>
      )}

      {/* UI/UX Design */}
      <Gallery
        id={UIUX_SECTION_ID}
        headline={<FormattedMessage id="UIUX" />}
        intro={uiuxIntro}
        columns={bigScreen ? 2 : 1}
        data={UIUXData}
        webCellHeight={webCellHeight}
        screenSize={screenSize}
        spacing={spacing}
        lang={lang}
      />

      {/* Ohter projects */}
      <Gallery
        id={OTHER_PROJECTS_SECTION_ID}
        headline={<FormattedMessage id="otherProjects" />}
        intro={otherProjectsIntro}
        columns={bigScreen ? 3 : 1}
        data={OhterProjectsData}
        webCellHeight={webCellHeight}
        screenSize={screenSize}
        spacing={spacing}
        lang={lang}
      />
    </div>
  );
}

export default Portfolio;
