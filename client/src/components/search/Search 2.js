import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StarRounded } from '@material-ui/icons';
import useStyles from './Styles';
import SearchBox from '../search-box/SearchBox';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container, Button } from '@material-ui/core';
import Map from '../Map';
import { DateDiff } from '../../dateUtils';


const SearchItem = ({ item }) => {
    const classes = useStyles();

    const date = item.ad.dateAdded.split('T')[0];
    const timeString = item.ad.dateAdded.split('T')[1];

    const time = timeString.split('.')[0];
    const createDate = new Date(date + ' ' + time);
    const today = new Date();

    const weekTime = DateDiff.inWeeks(createDate, today);

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Link to={`/profile/${item._id}`} className={classes.link}>
                        <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Link>
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
                                <StarRounded />
                                {item.ad.adDescription} &nbsp;
                                {/* (45 reviews) */}
                                {item.ad.count} reviews
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
                            {item.firstName} ??? {item.detailInformation}
                        </>
                    }
                />
                < div className={classes.information} >
                    <Button className={classes.button} variant="contained" color="secondary">Message</Button>
                    <span className={classes.date}>{weekTime} {weekTime > 1 ? 'Weeks' : 'Week'} Ago</span>
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
    const [data, setData] = useState([]);
    const styles = useStyles();
    const location = useLocation();

    //fetch data and set rows
    const getUser = async () => {

        const queryArr = location.search ? location.search.substring(1, location.search.length) : [];
        console.log('getUser queryArr', queryArr)

        let res = await fetch(`/user/${queryArr}`)
            .then(async res => {
                const result = await res.json();
                setData(result);
            })
    }

    useEffect(() => {
        //        const queryArr = location.search ? location.search.substr(1).split('&') : [];
        //        const queryArr = location.search ? location.search.substr(1).split('/') : [];

        const queryArr = location.search ? location.search.substring(1, location.search.length) : [];

        getUser();

        /*
                console.log('queryArr', queryArr)
                // let query = {};
                // if (queryArr.length > 0) {
                //     queryArr.forEach(q => {
                //         const key = q.split('=')[0];
                //         const value = q.split('=')[1];
                //         query[key] = value;
                //     })
                // }
                //console.log('query', query)
                console.log('location.search', location.search.substring(1, location.search.length ))
        
        //        fetch(`http://localhost:3000/customer${location.search}`)
                  fetch(`http://localhost:3000/user/${queryArr}`)
        //            fetch(`/user/${queryArr}`)
        
        
                    .then(async res => {
                        const result = await res.json();
                        setData(result);
                    })
        */

    }, [location]);

    return (
        <div className="search">
            <SearchBox />
            <Container className={styles.container}>
                <SearchList data={data} />
                <div className={styles.map}>
                    <Map data={data} />
                </div>
            </Container>
        </div>
    );
}

export default Search;