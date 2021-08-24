import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from "../index";
import { Grid, Card, CardHeader, Avatar, Button, Container, Typography, CardContent, CardActions, Link, Chip } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Twitter, Facebook, Instagram, Room as RoomIcon } from '@material-ui/icons';
import useStyles from './Styles.js';
import AvatarImg from '../images/Mark1.jpg';
import { AppContext } from '../../context/AppProvider';
import AdsItem from './AdsItem';
import ReviewItem from './ReviewItem';
import MessageButton from '../MessageButton';

const ProfilePro = () => {
  const { userId, favorites, onFavorites } = useContext(AppContext);
  const [isBookmark, setIsBookmark] = useState(false);
  const [loadingBookmark, setLoadingBookmark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);


  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/user/${id}`).then(async res => {
        const response = await res.json();
        setData(response[0]);
      }).finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      favorites.forEach(({ favorite }) => {
        const fav = favorite[0];
        if (fav._id === id) {
          setIsBookmark(true);
        }
      });
    }
  }, [favorites, id]);

  const styles = useStyles();

  const handleBookmark = () => {
    //  Need an api to bookmark current profile
    setLoadingBookmark(true);
    if (isBookmark) {
      const favItem = favorites.find(({ favorite }) => {
        const fav = favorite[0];
        return fav._id === id
      });
      console.log('favItem', favItem)
      fetch(`/favorite/${favItem._id}`, {
        method: 'DELETE'
      }).then(async res => {
        const response = await res.json();

        // delete from favorites in context
        const updateFav = [...favorites];
        const index = updateFav.findIndex(i => i._id === favItem._id);
        updateFav.splice(index, 1);
        onFavorites(updateFav)

        // update bookmark state
        setIsBookmark(false);
      }).finally(() => setLoadingBookmark(false));
    } else {
      fetch(`/favorite/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favorite: id,
          user: userId,
        })
      }).then(async res => {
        const response = await res.json();
        console.log(response);
        setIsBookmark(true);
      }).finally(() => setLoadingBookmark(false));
    }
  }

  console.log('data', data);

  return loading ? <Loading /> : data ? (
    <Container justify='center'>
      <Grid container spacing={1} className={styles.container}>
        <Grid item xs={12} alignItems='center'>
          <Card className={styles.profileCard}>
            <CardHeader
              // avatar={
              //   <Avatar src={picture} className={styles.bigAvatar} alt={name} />
              // }
              avatar={
                // data.imageUrl
                <Avatar src={AvatarImg} className={styles.avatar} alt={data.firstName} />
              }
              action={userId && (
                <div>
                  <div className={styles.btnGroup}>
                    <MessageButton id={id} data={data} />
                    <Button
                      className={styles.button}
                      variant='contained'
                      color='primary'
                      onClick={handleBookmark}
                    >
                      {isBookmark ? 'Bookmarked' : 'Bookmark'}
                    </Button>
                  </div>
                </div>
              )}

              title={
                <Typography variant='h5'>{data.firstName} {data.lastName}</Typography>
              }

              subheader={
                <div>
                  <div className={styles.address}>
                    <RoomIcon />
                    {data?.city} {data?.postalCode}
                  </div>
                  <br />
                  <div className={styles.flex}>
                    <Rating name="half-rating" readOnly defaultValue={data.avgRatingScore} precision={0.5} />
                    <span className={styles.reviews}>
                      {data.countRating} Reviews
                    </span>
                  </div>
                  <br />
                  <div className={styles.flex}>
                    {data.skills.map(skill => (
                      <Chip
                        key={skill.id}
                        variant="contained"
                        clickable
                        component="a"
                        href={`/search?adSubCategory=${skill.subCategory}`}
                        size="small"
                        label={skill.subCategory}
                        color="#43C0F6"
                        className={styles.chip}
                      />
                    ))}
                    
                  </div>
                  {/* <SearchBar /> */}
                </div>
              }

            />
            <CardActions>
              <Link href='https://twitter.com'>
                <Twitter fontSize='large' style={{ color: '#1da1f2' }} />
              </Link>
              <Link href='https://www.facebook.com'>
                <Facebook fontSize='large' style={{ color: '#1877f2' }} />
              </Link>
              <Link href='https://www.instagram.com'>
                <Instagram fontSize='large' style={{ color: '#e4405f' }} />
              </Link>
            </CardActions>
            <CardContent>
              <h3 className={styles.label}>About Me</h3>
            
              <Typography component="div" className={styles.text}>
                {data?.detailInformation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={styles.listContainer}>
            <CardContent>
              <h3 className={styles.label}>Ads List</h3>
              <ul className={styles.adsList}>
                {data?.ad.map(ad => (
                  <AdsItem key={ad.id} item={ad} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={styles.listContainer}>
            <CardContent>
              <h3 className={styles.label}>Reviews</h3>
              <ul className={styles.adsList}>
                {data?.ad.map(ad => (
                  <ReviewItem key={ad.id} item={ad} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  ) : null;
}

export default ProfilePro;