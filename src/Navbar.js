import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from "react-router-dom";



function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function NavLink(props) {
    const { url, component, active } = props
    return (
        < Link to={url} style={{ textDecoration: "none", color: (active ? "red" : "black") }}>
            {component}
        </Link>
    )
}

function Buttons(props) {
    const theme = useTheme();
    const { pathname } = props;
    const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //Mobilisen menun style
    const StyledMenu = withStyles({
        paper: {
            backgroundColor: theme.palette.secondary.main,
            width: '60%',
        },
    })(props => (
        <Menu
            elevation={1}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    ));

    if (bigScreen) {
        return (
            <div className="navFlex">
                {props.sections.map(section => {
                    return (
                        <NavLink url={section.url} active={section.url === pathname} component={<Button color="inherit">{section.name}</Button>} />
                    )
                })
                }
            </div >
        );
    }
    return (
        // Mobiilissa menu:
        <div className="mobileFlex">
            <IconButton aria-label="Menu" aria-haspopup="true" onClick={handleClick}>
                <MenuRoundedIcon />
            </IconButton>
            <StyledMenu
                id="navMobile"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.sections.map(section =>
                    <MenuItem color="inherit" onClick={handleClose}>{section.name}</MenuItem>)
                }
            </StyledMenu>
        </div>
    );
}

function Navbar(props) {
    const { pathname } = props.location;
    return (
        <div>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className="bar">
                        <Typography variant="h5" id="name">{props.name}</Typography>
                        <Buttons sections={props.sections} pathname={pathname} />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </div >
    );
}

export default withRouter(Navbar)