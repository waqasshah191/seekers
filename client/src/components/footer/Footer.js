import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './Styles.js';

const Footer = () => {
    const styles = useStyles();
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
                        <a href="/" className={styles.link}>Become a pro</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Invite a Friend</a>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>Company</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About Us</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Team</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Terms & Privacy</a>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>Support</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Help Center</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Contact Us</a>
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