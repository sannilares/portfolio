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

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    const [longDescription, setLongDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [open, setOpen] = React.useState(false);
    const cellHeight = bigScreen ? 270 : 195
    const webCellHeight = bigScreen ? 340 : 292
    const [maxWidth, setMaxWidth] = React.useState('md');

    const imgOpen = (img, video) => {
        setImage(img);
        setVideo(video);
        setOpen(true);
    };

    const imgClose = () => {
        setOpen(false);
        setVideo(null);
    };

    if (bigScreen) {
        return (
            <div>
                <ColorPortal />
                {/* Webpages */}
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
                                    }} onClick={() => {
                                        imgOpen(tile.img)
                                        setLongDescription(tile.dialogDesc[lang])
                                    }} src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>

                {/* Markkinointi */}
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
                                    }} onClick={() => {
                                        imgOpen(tile.img)
                                        setLongDescription(tile.desc[lang])
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

                {/* Photography and videos */}
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
                                    }} onClick={() => {
                                        imgOpen(tile.img, tile.video)
                                        setLongDescription(tile.desc[lang])
                                    }} src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>

                <Dialog
                    open={open}
                    onClose={imgClose}
                    maxWidth={maxWidth}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{headline}</DialogTitle>
                    <DialogContent className="dialogFlex">
                        {video ?
                            <video className="video" controls>
                                <source src={video} type="video/webm" />
                            </video> :
                            <img src={image} alt='' className="dialogImg" />
                        }
                        <DialogContentText className="imgChild" id="alert-dialog-description">
                            <div>
                                {longDescription}
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={imgClose} color="primary.dark">
                            <FormattedMessage id="back" />
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
    // For smaller screens
    else {
        return (
            <div>
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
                                    }} onClick={() => imgOpen(tile.img)} src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
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
                                    }} onClick={() => imgOpen(tile.img)} src={tile.img} alt={tile.title} />
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
                                    }} onClick={() => imgOpen(tile.img, tile.video)} src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>

                <Dialog
                    open={open}
                    onClose={imgClose}
                    maxWidth={maxWidth}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{headline}</DialogTitle>
                    <DialogContent className="dialogFlex">
                        {video ?
                            <video className="video" controls>
                                <source src={video} type="video/webm" />
                            </video> :
                            <img src={image} alt='' className="dialogImg" />
                        }
                        <DialogContentText className="imgChild" id="alert-dialog-description">
                            <div>
                                {description}
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={imgClose} color="primary.dark">
                            <FormattedMessage id="back" />
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default injectIntl(Gallery);