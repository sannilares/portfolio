/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tilt from 'react-tilt';

const gridContainerStyle = {
  height: 'auto',
  overflow: 'hidden',
};

function Gallery(props) {
  const {
    headline,
    columns,
    data,
    webCellHeight,
    setHeadline,
    setTileData,
    setOpen,
    screenSize,
    spacing,
    lang,
  } = props;

  return (
    <div className="headlineContainer">
      <div className="block">
        <p className="blockHeader">{headline}</p>
      </div>
      <div className="galleryContainer">
        <div className="gallery">
          <GridList style={gridContainerStyle} cellHeight={webCellHeight} spacing={spacing} className={screenSize} cols={columns}>
            {data.map((tile) => (
              <GridListTile component="div" className="gridListTile" key={tile.img} cols={tile.cols || 1}>
                <Tilt options={{ max: 8, scale: 1.03 }} className="gridListTilt">
                  <img
                    className="gridListTiltImg"
                    onMouseOver={() => {
                      setHeadline(tile.title[lang]);
                      setTileData(tile);
                    }}
                    onClick={() => {
                      setOpen(true);
                    }}
                    src={tile.img}
                    alt={tile.title}
                  />
                </Tilt>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  columns: PropTypes.number,
  data: PropTypes.array,
  headline: PropTypes.object,
  lang: PropTypes.string,
  setTileData: PropTypes.func,
  setOpen: PropTypes.func,
  setHeadline: PropTypes.func,
  screenSize: PropTypes.string,
  spacing: PropTypes.number,
  webCellHeight: PropTypes.number,
};

export default Gallery;
