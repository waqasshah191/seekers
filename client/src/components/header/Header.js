import React from 'react';
import useStyles from './Styles.js';
import { Button, Container } from '@material-ui/core';


const Header = () => {
    const styles = useStyles();
    return (
        <div className={styles.headerContainer}>
            <Container className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" className={styles.logoImage} />
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