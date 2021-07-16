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
                        <a href="/" className={styles.headTitle}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <a href="/" className={styles.headTitle}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>About</a>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Footer;