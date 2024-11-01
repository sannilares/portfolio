import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Portfolio.css';
import { Divider } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';
import { useTheme } from '@material-ui/core/styles';
import { FormattedMessage, injectIntl } from 'react-intl';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UIUXData from './DataUIUX';
import graphicsData from './DataGraphics';
import Gallery from './Gallery';
import OhterProjectsData from './DataOtherProjects';

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

function DialogMedia(props) {
  const {
    carousel,
    video,
    image,
  } = props;

  if (carousel) {
    return (
      <Carousel autoPlay={false}>
        {carousel.map((item, i) => <img key={i} src={item.img} alt="" style={{ width: '100%' }} />)}
      </Carousel>
    );
  }
  if (video) {
    return (
      <video className="video" controls>
        <source src={video} type="video/webm" />
      </video>
    );
  }
  return (
    <img src={image} alt="" className="dialogImg" />
  );
}

DialogMedia.propTypes = {
  carousel: PropTypes.array,
  image: PropTypes.string,
  video: PropTypes.string,
};

// from https://stackoverflow.com/questions/47023211/better-way-to-get-property-than-using-lodash
function get(object, path) {
  if (typeof path === 'string') path = path.split('.');
  return path.reduce((xs, x) => (xs && xs[x] ? xs[x] : ''), object);
}

function Portfolio({ intl }) {
  const bigScreen = useMediaQuery(useTheme().breakpoints.up('sm'));
  const chosenOnes = useMediaQuery(useTheme().breakpoints.up('lg'));
  const [headline, setHeadline] = useState(intl.formatMessage({ id: 'cursorHeadline' }));
  const [tileData, setTileData] = useState({});
  const [open, setOpen] = useState(false);
  const webCellHeight = bigScreen ? 340 : 292;
  const maxWidth = 'md';
  const screenSize = chosenOnes ? 'galleryBigScreen' : 'gallerySmallScreen';
  const spacing = bigScreen ? 2 : 8;

  const closeDialog = () => {
    setOpen(false);
    setTileData({});
  };

  return (
    <div>
      {chosenOnes && (
        <>
          <ColorPortal />
          <div className="description">
            <div className="descHeadline">
              <h2>{headline}</h2>
              <Divider light />
              <p className="descText">{get(tileData, `desc.${lang}`).split('\n')[0]}</p>
            </div>
          </div>
        </>
      )}

      {/* UI/UX Design */}
      <Gallery
        headline={<FormattedMessage id="UIUX" />}
        columns={bigScreen ? 2 : 1}
        data={UIUXData}
        webCellHeight={webCellHeight}
        setHeadline={setHeadline}
        setTileData={setTileData}
        setOpen={setOpen}
        screenSize={screenSize}
        spacing={spacing}
        lang={lang}
      />

      {/* Graphical design */}
      <Gallery
        headline={<FormattedMessage id="graphicalDesign" />}
        columns={bigScreen ? 3 : 1}
        data={graphicsData}
        webCellHeight={webCellHeight}
        setHeadline={setHeadline}
        setTileData={setTileData}
        setOpen={setOpen}
        screenSize={screenSize}
        spacing={spacing}
        lang={lang}
      />

      {/* Ohter projects */}
      <Gallery
        headline={<FormattedMessage id="otherProjects" />}
        columns={bigScreen ? 3 : 1}
        data={OhterProjectsData}
        webCellHeight={webCellHeight}
        setHeadline={setHeadline}
        setTileData={setTileData}
        setOpen={setOpen}
        screenSize={screenSize}
        spacing={spacing}
        lang={lang}
      />

      <Dialog
        open={open}
        onClose={closeDialog}
        width={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{headline}</DialogTitle>
        <DialogContent className="dialogFlex">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <DialogMedia carousel={tileData.carousel} video={tileData.video} image={tileData.img} />
          </div>

          {!tileData.carousel && (
            <DialogContentText className="imgChild" id="alert-dialog-description">
              <div style={{ whiteSpace: 'break-spaces' }}>
                {get(tileData, `desc.${lang}`)}
              </div>
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary.dark">
            <FormattedMessage id="back" />
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

Portfolio.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(Portfolio);
