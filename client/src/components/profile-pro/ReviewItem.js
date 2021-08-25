import React from 'react'
import Rating from '@material-ui/lab/Rating';
import useStyles from './Styles.js';
import { DateDiff } from '../../dateUtils';

const ReviewItem = ({ item }) => {
    const styles = useStyles();

    let weekTime = null;

    if (item?.dateAdded) {
        const date = item?.dateAdded.split('T')[0];
        const timeString = item?.dateAdded.split('T')[1];

        const time = timeString.split('.')[0];
        const createDate = new Date(date + ' ' + time);
        const today = new Date();

        weekTime = DateDiff.inWeeks(createDate, today);
    }
    return (
        <li className={styles.reviewItem}>
            <div className={styles.reviewHead}>

                {/* <h3 className={styles.reviewName}>{item.adTitle}</h3> */}
                <h3 className={styles.reviewHead}>{item.adTitle}</h3>                

                {/* <Rating name="half-rating" readOnly defaultValue={item.avgRatingScore} precision={0.5} /> */}
            </div>

            <div>              
                {item.rating.map( ri => (
                    <li className={styles.reviewName}>
                        {ri.userFeedback}
                        <Rating name="half-rating" readOnly defaultValue={ri.ratingScore} precision={0.5} />                    
                    </li>
                ))}                  
            </div>
            <br></br>
            
            {/* <p className={styles.reviewBody}>{item.adDescription}</p> */}
            {weekTime && (
                <span className={styles.date}>{weekTime} {weekTime > 1 ? 'Weeks' : 'Week'} Ago</span>
            )}
        </li>
    )
}

export default ReviewItem;