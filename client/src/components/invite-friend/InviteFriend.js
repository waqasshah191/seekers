import React from 'react';
import { ExpandMore, Help } from '@material-ui/icons';
import { Container, Typography, Button } from '@material-ui/core';
import useStyles from './Styles.js';
import InviteFriendImage from '../images/background.png';

const InviteFriend = () => {
    const styles = useStyles();
    return (
        <div className="search">
            <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Invite Friend</h1>
                        <p className={styles.contentText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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