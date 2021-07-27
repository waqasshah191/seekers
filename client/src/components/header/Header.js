import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from '@material-ui/core';
import useStyles from './Styles.js';
import LogoImage from './../images/Logo.png'

const Header = () => {
    const styles = useStyles();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleBecomePro = () => {
        localStorage.setItem('_redirect', '/become-pro');
        loginWithRedirect();
    }
    return (
        <div className={styles.headerContainer}>
            <Container className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src={LogoImage} className={styles.logoImage} />
                </a>

                <div className={styles.buttons}>
                    {isAuthenticated ? (
                        <Button
                            variant="contained"
                            className={[styles.loginBtn, styles.button].join(' ')}
                            color="primary"
                            onClick={() => logout('/')}
                        >
                            Sign Out
                        </Button>
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