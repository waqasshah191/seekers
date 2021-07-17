import React from 'react';
import { Button, Container } from '@material-ui/core';
import useStyles from './Styles';
import categoriesData from './categories';
import PippsyVideo from '../../pippsy.mp4';
import SearchBox from '../search-box/SearchBox';
import bannerImage from '../images/banner-image.jpg';


const HomeCategories = () => {
    const styles = useStyles();
    return (
        <ul className={styles.categories}>
            {categoriesData.map(category => (
                <li className={styles.category}>
                    <a href={`/search?category=${category.id}`} className={styles.link}>{category.title}</a>
                    <ul className={styles.subcategories}>
                        {category.subcategories.map(sub => (
                            <li>
                                <a href={`/search?category=${sub.id}`} className={styles.link}>{sub.title}</a>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}


const HomeContent = () => {
    const styles = useStyles();
    return (
        <div className={styles.contentContainer}>
            <Container className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={styles.contentTitle}>How Pippsy works</h2>
                    <p className={styles.contentDescription}>
                        Meet new people who share your interests through online and in-person events. It’s free to create an account.
                    </p>
                    <Button className={styles.button} color="secondary" variant="contained">Join</Button>
                </div>
                <div className={styles.videoBanner}>
                    <video controls className={styles.video}>
                        <source src={PippsyVideo} />
                    </video>
                </div>
            </Container>
        </div>
    )
}
const Home = () => {
    const styles = useStyles();
    return (
        <div className="home">
            <SearchBox />
            <Container className={styles.wrapper}>
                <HomeCategories />
                <div className={styles.banner}>
                    <img className={styles.bannerImage} src={bannerImage} />
                    <div className={styles.bannerContent}>
                        <h3 className={styles.bannerTitle}>
                            Find skilled people |
                            <br />
                            &nbsp;&nbsp;Get your skills found
                        </h3>
                        <p className={styles.bannerDesc}>Meet new people who share your interests through online and in-</p>
                    </div>
                </div>
            </Container>
            <HomeContent />
            {/* <HomeHeader />
            <HomeCategories />
            <HomeCarousel />
            <HomeContent /> */}
        </div>
    );
}

export default Home;