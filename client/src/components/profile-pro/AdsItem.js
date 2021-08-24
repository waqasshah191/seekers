import React from 'react'
import useStyles from './Styles.js';
import { DateDiff } from '../../dateUtils';


const AdsItem = ({ item }) => {
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
        <li className={styles.adItem}>
        <img className={styles.adImg} src={item.imageUrl} alt={item.adTitle} />
        <div className={styles.adContent}>
            <h3 className={styles.adTitle}>{item.adTitle}</h3>
            <p className={styles.adDescription}>{item.adDescription}</p>
        </div>
        <div className={styles.adActions}>
            {weekTime && (
                <span className={styles.date}>{weekTime} {weekTime > 1 ? 'Weeks' : 'Week'} Ago</span>
            )}
            
        </div>
        </li>
    )
}

export default AdsItem;