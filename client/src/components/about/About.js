import React from 'react';
import { ExpandMore, Help } from '@material-ui/icons';
import { Container, Typography } from '@material-ui/core';
import useStyles from './Styles.js';
import AboutImage from '../images/About us.png';

const About = () => {
    const styles = useStyles();
    return (
        <div className="search">
            <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>About Us</h1>
                        <p className={styles.contentText}>
                        We are a team of four members launching our product "Pippsy" in August 2021. Pippsy is a social utility platform that helps individuals to monetize their side skills. In this dynamic world, people can't rely on one job. During the current pandemic, we have seen the unemployment rates soaring like anything. Not only this, there is a huge population in Canada who rely on careers at Walmart, Safeway etc and are looking for opportunities where they can make money for their side skills such as providing Paino or driving lessons. During a brainstorming session, our team thought of this problem and have shaped Pippsy with affordable and effective features where people can advertise their skills as well as find services they need.
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