import React from 'react';
import Container from '@material-ui/core/Container';
import './Design.css';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import designData from './designData.js';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function Categories(props) {
    const {
        categories
    } = props

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <div>
            <div className="designFlex">
                {categories.map(category =>
                    <p>{category}</p>)}
            </div >
        </div>
    );
}



function Design() {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="lg">
                <p>Design toimii</p>
                <p>Jes, eli tähän tulee mun esittely pikaisesti. Hieno kuva. Muutama lause. Tervetuloa.</p>
                <p>Ja tähän pitää panostaa, koska tää on eka mitä tästä sivusta nähään. Sitte alla on pari kategoriaa</p>
                <p>joista linkit eri töihin ja cv:seen. Kaikki hommat kuitenki löytynee yläpalkista</p>
                <p>Ja perkele, vaiha toi väri navista. Ihan st1 tulee mieleen tästä</p>
                <div>
                    <Categories categories={['Grid 1', 'Grid 2', 'Grid 3']} />
                </div>

                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">Tee näistä linkkejä. Ja tee näihin hoveri. Muuten hyvä :) </ListSubheader>
                        </GridListTile>
                        {designData.map(tile => (
                            <GridListTile key={tile.img}>
                                <div className="gridHover"></div>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Container>
        </div >
    );
}

export default Design;