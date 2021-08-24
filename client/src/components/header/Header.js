import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Menu, MenuItem } from '@material-ui/core';
import useStyles from './Styles.js';
import LogoImage from './../images/Logo.png'
import { AppContext } from '../../context/AppProvider.js';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { user, onUserId, onUser, onFavorites } = useContext(AppContext);
    const styles = useStyles();
    const history = useHistory();
    const { isAuthenticated, loginWithRedirect, logout, user: _user } = useAuth0();

    const getUser = (userId) => {
        fetch(`/user/${userId}`).then(async res => {
            const response = await res.json();
            onUser(response[0]);
        });
    }

    useEffect(() => {
        if (isAuthenticated && _user) {
            const { email } = _user;
            fetch(`/user/emailToId/${email}`).then(async res => {
                const response = await res.text();
                if (response) {
                    const userId = JSON.parse(response)._id;
                    onUserId(userId);
                    getUser(userId);
                    fetch(`/favorite/${userId}`).then(async resFav => {
                        const responseFav = await resFav.json();
                        onFavorites(responseFav);
                    });
                } else {
                    history.push('/sign-up');
                }
            })
        }
    }, [isAuthenticated, _user]);

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
        localStorage.removeItem('whatsapp-clone-id');
        localStorage.removeItem('whatsapp-clone-contacts');
        localStorage.removeItem('whatsapp-clone-conversations');
        logout('/');
    }

    return (
        <div className={styles.headerContainer}>
            <Container className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src={LogoImage} className={styles.logoImage} alt="seeker" />
                </a>

                <div className={styles.buttons}>
                    {isAuthenticated ? (
                        <>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                {(user?.firstName || user?.lastName) ? `${user.firstName} ${user.lastName}` : _user?.name}
                                <img src={user?.imageUrl ? user.imageUrl : _user?.picture} className={styles.userImage} alt={_user?.nickname} />
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
                                    <Link className={styles.menuLink} to="/messages">Messages</Link>
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
