import PropTypes from 'prop-types';
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';

const gridContainerStyle = {
  height: 'auto',
  overflow: 'hidden',
};

function Gallery(props) {
  const {
    id,
    headline,
    intro,
    columns,
    data,
    webCellHeight,
    screenSize,
    spacing,
    lang,
  } = props;

  return (
    <div className="headlineContainer" id={id}>
      <div className="block">
        <p className="blockHeader">{headline}</p>
      </div>
      {intro && <div className="galleryIntro">{intro}</div>}
      <div className="galleryContainer">
        <div className="gallery">
          <GridList style={gridContainerStyle} cellHeight={webCellHeight} spacing={spacing} className={screenSize} cols={columns}>
            {data.map((tile) => (
              <GridListTile component="div" className="gridListTile" key={tile.slug} cols={tile.cols || 1}>
                <Link to={`/project/${tile.slug}`} className="gridListTiltLink">
                  <Tilt options={{ max: 8, scale: 1.03 }} className="gridListTilt">
                    <img
                      className="gridListTiltImg"
                      src={tile.img}
                      alt={tile.title[lang]}
                    />
                  </Tilt>
                  <span className="gridListTiltTitle">{tile.title[lang]}</span>
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  id: PropTypes.string,
  columns: PropTypes.number,
  data: PropTypes.array,
  headline: PropTypes.object,
  intro: PropTypes.node,
  lang: PropTypes.string,
  screenSize: PropTypes.string,
  spacing: PropTypes.number,
  webCellHeight: PropTypes.number,
};

export default Gallery;
