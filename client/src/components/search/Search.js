import React, { useEffect, useState } from 'react';
import { StarRounded } from '@material-ui/icons';
import useStyles from './Styles';
import SearchBox from '../search-box/SearchBox';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container, Button } from '@material-ui/core';
import Map from '../Map';

const SearchList = ({ data = [] }) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {data.map(item => (
                <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <div className={classes.head}>
                                    <Typography
                                        variant="h3"
                                        className={classes.title}
                                        color="textPrimary"
                                    >
                                        Teacher Name
                                    </Typography>
                                    <span className={classes.headMeta}>
                                        <StarRounded />
                                        4.5
                                        (45 reviews)
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
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                        <div className={classes.information}>
                            <Button variant="contained" color="secondary">Message</Button>
                            <span className={classes.date}>A Week Age</span>
                        </div>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
            ))}
        </List>
    );
}

const SearchMap = () => {
    return (
        <Map />
    )
}

const Search = () => {
    const [data, setData] = useState(null);
    const styles = useStyles();
    useEffect(() => {
        fetch('/order').then(res => res.json).then(setData);
    }, []);
    return (
        <div className="search">
            <SearchBox />
            <Container className={styles.container}>
                <SearchList data={[1, 2, 3, 4]} />
                <div className={styles.map}>
                    <SearchMap />
                </div>
            </Container>
        </div>
    );
}

export default Search;