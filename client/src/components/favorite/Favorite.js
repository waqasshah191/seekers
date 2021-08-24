import React, { useContext, useEffect } from 'react';
import { Bookmark } from '@material-ui/icons';
import { Container, Button } from '@material-ui/core';
import {Rating, Alert} from '@material-ui/lab/';
import useStyles from './Styles.js';
import { AppContext } from '../../context/AppProvider.js';

const Favorite = () => {
    const { favorites, onFavorites } = useContext(AppContext);
    const styles = useStyles();
    const { userId } = useContext(AppContext); 

    useEffect(() => {
        if (userId) {
            fetch(`/favorite/${userId}`).then(async res => {
                const response = await res.json();
                console.log('response', response)
                onFavorites(response);
            });
        }
    }, [userId]);

    const handleBookmark = (id) => {
        fetch(`/favorite/${id}`, {
            method: 'DELETE'
        }).then(async res => {
            const response = await res.json();

            // delete from favorites in context
            const updateFav = [...favorites];
            const index = updateFav.findIndex(i => i._id === id);
            updateFav.splice(index, 1);
            onFavorites(updateFav)
        });
    }

    return (
        <div className="search">
           <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Favorite Pro</h1>
                        <p className={styles.contentText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    {favorites ? favorites.length > 0 ? (
                        <div className={styles.proList}>
                            {favorites.map(({ favorite, ...fav }) => {
                                const item = favorite[0];
                                return (
                                    <div className={styles.pro} key={item._id} >
                                        <div className={styles.proImageContainer}>                                    
                                            <div className={styles.proBookmark} onClick={() => handleBookmark(fav._id)}>
                                                <Bookmark />
                                            </div>
                                            <img className={styles.proImage} src={item.imageUrl} alt={`${item.firstName} ${item.lastName}`} />
                                            <Rating className={styles.proRate} name="half-rating" readOnly defaultValue={item.avgRatingScore} />
                                        </div>
                                        <h2 className={styles.proName}>{item.firstName} {item.lastName}</h2>
                                        <p className={styles.proPos}>
                                            <strong>Skills: </strong>
                                            {item.skills.map((i, ind) => ind < 3 && (
                                                <span key={ind}>{i.subCategory} - </span>
                                            ))}
                                        </p>
                                        <Button 
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            size="large"
                                            href={`/profile/${item._id}`}
                                        >
                                            Show Detail
                                        </Button>                                
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <Alert severity="warning" style={{ width: '100%'}}>You haven't bookmarked any pro</Alert>
                    ) : 'Fetching....'}
                </div>
            </Container>
        </div>
    )
}

export default Favorite;