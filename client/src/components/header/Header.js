import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Menu, MenuItem } from '@material-ui/core';
import useStyles from './Styles.js';
import LogoImage from './../images/Logo.png'
import UserImage from './../images/Mark1.jpg';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const styles = useStyles();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleBecomePro = () => {
        localStorage.setItem('_redirect', '/become-pro');
        loginWithRedirect();
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        logout('/');
    }

    return (
        <div className={styles.headerContainer}>
            <Container className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src={LogoImage} className={styles.logoImage} />
                </a>

                <div className={styles.buttons}>
                    {isAuthenticated ? (
                        <>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            user name
                            <img src={UserImage} className={styles.userImage} />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            elevation={0}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link className={styles.menuLink} to="/profile">My Profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link className={styles.menuLink}to="/message">Messages</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link className={styles.menuLink} to="/favorite-pro">Favorite Pro</Link>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <span className={styles.menuLink}>Sign Out</span></MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => loginWithRedirect('/become-pro')}
                                className={styles.button}
                                variant="contained"
                                color="secondary"
                            >
                                <span>Sign In / Sign Up</span>
                            </Button>
                            <Button
                                onClick={handleBecomePro}
                                className={[styles.button, styles.proBtn].join(' ')}
                                variant="contained"
                                color="primary"
                            >
                                <span>Become A Pro</span>
                            </Button>
                        </>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Header;
