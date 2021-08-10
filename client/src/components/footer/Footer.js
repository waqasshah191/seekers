import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import useStyles from './Styles.js';

const Footer = () => {
    const styles = useStyles();
    const { loginWithRedirect } = useAuth0();

    const handleBecomePro = () => {
        localStorage.setItem('_redirect', '/become-pro');
        loginWithRedirect();
    }
    return (
        <div className={styles.footerContainer}>
            <Container className={styles.footer}>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>Discover</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>How Pippsy works</a>
                    </li>
                    <li>
                        <span className={styles.link} onClick={handleBecomePro}>Become a pro</span>
                    </li>
                    <li>
                        <Link to="/invite-friend" className={styles.link}>Invite a Friend</Link>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>Company</a>
                    </li>
                    <li>
                        <Link to="/about" className={styles.link}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/team" className={styles.link}>Team</Link>
                    </li>
                    <li>
                        <Link to="/terms-privacy" className={styles.link}>Terms & Privacy</Link>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>Support</a>
                    </li>
                    <li>
                        <Link to="/help-center" className={styles.link}>Help Center</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={styles.link}>Contact Us</Link>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Blog</a>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Footer;