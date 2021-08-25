import React from 'react';
import { Bookmark } from '@material-ui/icons';
import { Container, Button } from '@material-ui/core';
import {Rating} from '@material-ui/lab/';
import useStyles from './Styles.js';
import data from './favoriteData';

const Favorite = () => {
    const styles = useStyles();
    return (
        <div className="search">
           <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Favorite Pro</h1>
                        <p className={styles.contentText}>
                            Here is the list of your favorite services/skilled personnel!!!
                        </p>
                    </div>
                    <div className={styles.proList}>
                        {data.map(item => (
                            <div className={styles.pro} key={item.id} >
                                <div className={styles.proImageContainer}>                                    
                                    <div className={styles.proBookmark}>
                                        <Bookmark />
                                    </div>
                                    <img className={styles.proImage} src={item.imageUrl} alt={item.fullName} />
                                    <Rating className={styles.proRate} name="half-rating" readOnly  defaultValue={item.rate} />
                                </div>
                                <h2 className={styles.proName}>{item.fullName}</h2>
                                <p className={styles.proPos}>{item.position}</p>
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    href={`/profile/${item.id}`}
                                >
                                    Show Detail
                                </Button>                                
                            </div>
                        ))}
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Favorite;