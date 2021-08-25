import React from 'react';
import { ExpandMore, Help } from '@material-ui/icons';
import { Container, Typography, Button } from '@material-ui/core';
import useStyles from './Styles.js';
import InviteFriendImage from '../images/invitefriend.jpg';

const InviteFriend = () => {
    const styles = useStyles();
    return (
        <div className="search">
            <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Invite Friend</h1>
                        <p className={styles.contentText}>
                           Spread the word using the links below!!! <br/>
                           Introduce this novel website to your friends and help them to make opportunities for themselves as well as find services they require at their convenience. 
                        </p>
                        <div>
                            <Button
                                variant="contained"
                                className={[styles.button, styles.facebook].join(' ')}
                                href="https://www.facebook.com/sharer/sharer.php?u=#url"
                                target="_blank"
                            >
                                Share Facebook
                            </Button>
                            <Button
                                variant="contained"
                                className={[styles.button, styles.twitter].join(' ')}
                                href="http://twitter.com/share?text=Invite Friends&url=https://www.google.com/&hashtags=invite,friend,hashtag3"
                                target="_blank"
                            >
                                Share Twitter
                            </Button>
                            
                            <Button
                                variant="contained"
                                className={[styles.button, styles.whatsapp].join(' ')}
                                href="whatsapp://send?text=The text to share!https://www.google.com/"
                                target="_blank"
                            >
                                Share Whatsapp
                            </Button>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={InviteFriendImage} className={styles.image} alt="Invite Friend" />
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default InviteFriend;