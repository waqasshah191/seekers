import React from 'react';
import { ExpandMore, Help } from '@material-ui/icons';
import { Container, Typography } from '@material-ui/core';
import useStyles from './Styles.js';
import AboutImage from '../images/background.png';

const About = () => {
    const styles = useStyles();
    return (
        <div className="search">
            <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>About Us</h1>
                        <p className={styles.contentText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={AboutImage} className={styles.image} alt="About Us" />
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default About;