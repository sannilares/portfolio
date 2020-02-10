import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: '40px',
    },
    gridList: {
        width: 700,
        height: 600,
        overflow: 'hidden',
    },
}));

// Jos haetaan ulkopuolista dataa, on kieli määriteltävä erikseen fallbackeineen
const lang = localStorage.getItem("language") || "fi"

function ColorPortal() {
    const bigScreen = useMediaQuery(useTheme().breakpoints.up('md'));
    const colorContainer = document.getElementById("colorContainer")
    if (colorContainer) {
        return ReactDOM.createPortal(
            <div className={bigScreen ? "rightBg" : ""} />, colorContainer
        )
    }
    return null
}



function Gallery({ intl }) {

    const classes = useStyles();
    const [headline, setHeadline] = useState(intl.formatMessage({ 'id': 'headline' }));
    const [description, setDescription] = useState("Siirrä kursori kuvan päälle saadaksesi lisää tietoa.");

    return (
        <div>
            <ColorPortal />
            <div className="headlineContainer">
                <div className="block">
                    <p className="blockHeader bH2"><FormattedMessage id="marketing" /></p>
                </div>
            </div>

            <div className="galleryContainer">
                <div className={classes.root}>
                    <GridList cellHeight={195} className={classes.gridList} cols={3}>
                        {marketingData.map(tile => (
                            <GridListTile component="div" className="gridImg" key={tile.img} cols={tile.cols || 1}>
                                <img onMouseOver={() => {
                                    setHeadline(tile.title[lang])
                                    setDescription(tile.desc)
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
                    <p className="blockHeader"><FormattedMessage id="photoAndVideo" /></p>
                </div>
            </div>

            <div className="galleryContainer">
                <div className={classes.root}>
                    <GridList cellHeight={195} className={classes.gridList} cols={3}>
                        {tileData.map(tile => (
                            <GridListTile component="div" className="gridImg" key={tile.img} cols={tile.cols || 1}>
                                <img onMouseOver={() => {
                                    setHeadline(tile.title[lang])
                                    setDescription(tile.desc)
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
        </div>
    );
}

export default injectIntl(Gallery);