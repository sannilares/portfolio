import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import marketingData from './marketingData';
import websiteData from './websiteData';
import './Gallery.css';
import { Divider } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';
import { useTheme } from '@material-ui/core/styles';
import { FormattedMessage, injectIntl } from 'react-intl';

// Jos haetaan ulkopuolista dataa, on kieli määriteltävä erikseen fallbackeineen
const lang = localStorage.getItem("language") || "fi"
const gridContainerStyle = {
    height: "auto",
    overflow: "hidden"
}
function ColorPortal() {
    const bigScreen = useMediaQuery(useTheme().breakpoints.up('lg'));
    const colorContainer = document.getElementById("colorContainer")
    if (colorContainer) {
        return ReactDOM.createPortal(
            <div className={bigScreen ? "rightBg" : ""} />, colorContainer
        )
    }
    return null
}



function Gallery({ intl }) {
    const bigScreen = useMediaQuery(useTheme().breakpoints.up('lg'));
    const [headline, setHeadline] = useState(intl.formatMessage({ 'id': 'cursorHeadline' }));
    const [description, setDescription] = useState(intl.formatMessage({ 'id': 'cursor' }));
    const cellHeight = bigScreen ? 270 : 195
    const webCellHeight = bigScreen ? 340 : 292
    // console.log(bigScreen)
    return (
        <div>
            <ColorPortal />
            <div className="headlineContainer">
                <div className="block">
                    <p className="blockHeader bH2"><FormattedMessage id="marketing" /></p>
                </div>
            </div>

            <div className="galleryContainer">
                <div className="gallery">
                    <GridList style={gridContainerStyle} cellHeight={cellHeight} className="gridList" cols={3}>
                        {marketingData.map(tile => (
                            <GridListTile component="div" className="gridImg" key={tile.img} cols={tile.cols || 1}>
                                <img onMouseOver={() => {
                                    setHeadline(tile.title[lang])
                                    setDescription(tile.desc[lang])
                                }} src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="description">
                    <div className="descHeadline">
                        <h2>{headline}</h2>
                        <Divider light={true} />
                        <p className="descText">{description}</p>
                    </div>
                </div>
            </div>

            <div className="headlineContainer">
                <div className="block">
                    <p className="blockHeader"><FormattedMessage id="webPages" /></p>
                </div>
            </div>

            <div className="galleryContainer">
                <div className="gallery">
                    <GridList style={gridContainerStyle} cellHeight={webCellHeight} className="gridList" cols={2}>
                        {websiteData.map(tile => (
                            <GridListTile component="div" className="gridImg" key={tile.img} cols={tile.cols || 1}>
                                <img onMouseOver={() => {
                                    setHeadline(tile.title[lang])
                                    setDescription(tile.desc[lang])
                                }} src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>

            <div className="headlineContainer">
                <div className="block">
                    <p className="blockHeader"><FormattedMessage id="photoAndVideo" /></p>
                </div>
            </div>

            <div className="galleryContainer">
                <div className="gallery">
                    <GridList style={gridContainerStyle} cellHeight={cellHeight} className="gridList" cols={3}>
                        {tileData.map(tile => (
                            <GridListTile component="div" className="gridImg" key={tile.img} cols={tile.cols || 1}>
                                <img onMouseOver={() => {
                                    setHeadline(tile.title[lang])
                                    setDescription(tile.desc[lang])
                                }} src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    );
}

export default injectIntl(Gallery);