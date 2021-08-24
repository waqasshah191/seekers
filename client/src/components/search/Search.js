import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { Alert } from '@material-ui/lab';
import useStyles from './Styles';
import SearchBox from '../search-box/SearchBox';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container, Button } from '@material-ui/core';
import Map from '../Map';
import { DateDiff } from '../../dateUtils';
import MessageButton from '../MessageButton';

const SearchItem = ({ item }) => {
    const classes = useStyles();

    let weekTime = null;

    const ad = (Array.isArray(item.ad) && item.ad.length > 0) ? item.ad[0] : item.ad;
    if (ad?.dateAdded) {
        const date = ad?.dateAdded.split('T')[0];
        const timeString = ad?.dateAdded.split('T')[1];

        const time = timeString.split('.')[0];
        const createDate = new Date(date + ' ' + time);
        const today = new Date();

        weekTime = DateDiff.inWeeks(createDate, today);
    }


    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar className={classes.avatarContainer}>
                    <Link to={`/profile/${item._id}`} className={classes.link}>
                        <Avatar className={classes.avatar} alt="Remy Sharp" src={item.imageUrl} />
                    </Link>
                    <Rating size="small" name="half-rating" readOnly defaultValue={item.avgRatingScore} precision={0.5} />
                    <span className={classes.reviews}>{item.countRating || 0} reviews</span>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <div className={classes.head}>
                            <Typography
                                variant="h3"
                                className={classes.title}
                                color="textPrimary"
                            >
                                <Link to={`/profile/${item._id}`} className={classes.link}>
                                    {item.firstName} {item.lastName}
                                    {item.adTitle}
                                </Link>
                            </Typography>
                            <span className={classes.headMeta}>
                                {item.ad.adDescription.substr(0, 100) + (item.ad.adDescription.length > 100 ? '...' : '')} &nbsp;
                                {/* (45 reviews) */}
                            </span>
                        </div>
                    }
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                            </Typography>
                            {item.firstName} — {item.detailInformation}
                        </>
                    }
                />
                < div className={classes.information} >
                    <MessageButton id={item._id} data={item} />
                    <Button href={`/profile/${item._id}`} className={classes.button} variant="contained" color="primary">
                        Detail
                    </Button>
                    {weekTime && (
                        <span className={classes.date}>{weekTime} {weekTime > 1 ? 'Weeks' : 'Week'} Ago</span>
                    )}
                </div >
            </ListItem >
            <Divider variant="inset" component="li" />
        </>
    )
}

const SearchList = ({ data = [] }) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {data.map(item => (
                <SearchItem key={item._id} item={item} />
            ))}
        </List>
    );
}

const Search = () => {
    const [notFound, setNotFound] = useState(false);
    const [data, setData] = useState([]);
    const styles = useStyles();
    const location = useLocation();

    useEffect(() => {
        (async () => {
            setNotFound(false);

            // get data query from url and convert to object
            const queryArr = location.search ? location.search.substr(1).split('&') : [];
            let query = {};
            if (queryArr.length > 0) {
                queryArr.forEach(q => {
                    const key = q.split('=')[0];
                    const value = q.split('=')[1];
                    query[key] = value;
                })
            }

            // convert query object to string
            const route = Object.keys(query).reduce((acc, key) => {
                const val = query[key];
                return `${acc}${key}/${val}/`;
            }, '');
            if (query?.PostalCode && query?.adSubCategory) {
                // call api with considering query
                fetch(`/user/skillPostalCode/${query?.adSubCategory}&${query?.PostalCode}`).then(async res => {
                    const result = await res.json();
                    if (Array.isArray(result)) {
                        // set response data to local state 
                        setData(result);
                    } else {
                        setNotFound(true);
                    }
                })
            } else {
                // call api with considering query
                fetch(`/user/${route}`).then(async res => {
                    const result = await res.json();
                    if (Array.isArray(result)) {
                        // set response data to local state 
                        setData(result);
                    } else {
                        setNotFound(true);
                    }
                })
            }

        })()
    }, [location]);

    return (
        <div className="search">
            <SearchBox />
            <Container className={styles.container}>
                {notFound ? (
                    <Alert severity="warning" style={{ width: '100%' }}>No Match Found!!!</Alert>
                ) : (
                    <>
                        <SearchList data={data} />
                        <div className={styles.map}>
                            <Map data={data} />
                        </div>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Search;