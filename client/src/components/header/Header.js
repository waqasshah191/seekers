import React from 'react';
import { Button, Container } from '@material-ui/core';
import useStyles from './Styles.js';
import LogoImage from './../images/Logo.png'

const Header = () => {
    const styles = useStyles();
    return (
        <div className={styles.headerContainer}>
            <Container className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src={LogoImage} className={styles.logoImage} />
                </a>

                <div className={styles.buttons}>
                    <Button variant="contained" className={[styles.loginBtn, styles.button].join(' ')} color="primary">
                        Sign In
                    </Button>
                    <Button className={styles.button} variant="contained" color="secondary">
                        Sign Up
                    </Button>
                </div>

            </Container>
        </div>
    )
}

export default Header;
