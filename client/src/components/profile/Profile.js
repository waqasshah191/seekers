import React, { useContext, useEffect, useState } from 'react'
import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from "../index";
import { TextField, Grid, Card, CardHeader, Avatar, Button, Container, CardContent, CardActions, Link } from '@material-ui/core';
import { Close, Room as RoomIcon } from '@material-ui/icons'
import SearchBar from '../searchinprofile/Searchskills';
import useStyles from './Styles.js';
import AvatarImg from '../images/Mark1.jpg';
import { AppContext } from '../../context/AppProvider';
import AdForm from './AdForm';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [skillForms, setSkillForms] = useState([]);
  const [adForms, setAdForms] = useState([{ adTitle: '', adDescription: '' }]);
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [about, setAbout] = useState('');
  const [social, setSocial] = useState({ facebook: '', linkedIn: '', twitter: '' });
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  const { userId: id, user: data, onUser } = useContext(AppContext);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/user/${id}`).then(async res => {
        const response = await res.json();
        const userRes = response[0];
        onUser(userRes);
        setFirstName(userRes?.firstName);
        setLastName(userRes?.lastName);
        setPostCode(userRes?.postalCode);
        setCity(userRes?.city);
        setAbout(userRes?.detailInformation)
        setSkillForms(userRes?.skills || []);
        setAdForms(userRes?.ad || [{ adTitle: '', adDescription: '' }]);
        const updateSocial = { ...social };
        (userRes?.socialMedia || []).forEach(i => {
          updateSocial[i.socialMediaName] = i.socialMediaLink;
        });
        setSocial(updateSocial);
      }).finally(() => setLoading(false));
    }
  }, [id]);

  console.log('avatar', avatar)

  const styles = useStyles();
  // console.log('data', data);

  const handleSkillForms = ({ selectedOption: options }) => {
    const results = options.map(opt => ({ category: opt.value, subCategory: opt.value }))
    setSkillForms(results);
  }

  const handleAddAd = () => {
    const updateAdForms = [...adForms];
    updateAdForms.push({ adTitle: '', adDescription: '', subCategory: null, category: null });
    setAdForms(updateAdForms);
  }
  const handleRemoveAd = (index) => {
    const updateAdForms = [...adForms];
    updateAdForms.splice(index, 1);
    setAdForms(updateAdForms);
  }

  const handleChangeAd = (key, value, index) => {
    const updateAdForms = [...adForms];
    updateAdForms[index][key] = value;
    setAdForms(updateAdForms);
  }

  const handleSocialChange = (key, value) => {
    const updateSocial = { ...social };
    updateSocial[key] = value;
    setSocial(updateSocial);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    setSubmitLoading(true);

    let imgData = null;

    if (avatar) {
      const formData = new FormData();
      formData.append('file', avatar);

      const res = await fetch(`/upload`, {
        method: 'POST',
        body: formData
      });
      imgData = await res.json();
    }

    const adsBody = [...adForms];
    for (let i = 0; i < adForms.length; i++) {
      const item = adForms[i];
      if (item.adImage) {
        const formData = new FormData();
        formData.append('file', item.adImage);

        const res = await fetch(`/upload`, {
          method: 'POST',
          body: formData
        });
        const imgAdData = await res.json();
        adsBody[i].imageUrl = imgAdData.imageUrl;
      }
      delete adsBody[i].adImage
    }

    const body = {
      firstName,
      lastName,
      email: data.email,
      imageUrl: imgData ? imgData.imageUrl : undefined,
      isProUser: true,
      city,
      detailInformation: about,
      postCode,
      skills: skillForms,
      socialMedia: Object.keys(social).map(key => ({ socialMediaName: key, socialMediaLink: social[key] })),
      postalCode: postCode,
      ad: adsBody,
    }
    fetch(`/user/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(async res => {
      const result = await res.json();
    }).finally(() => setSubmitLoading(false));
  }

  return loading ? <Loading /> : data ? (
    <Container justify='center'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} className={styles.container}>
          <Grid item xs={12} alignItems='center'>
            <Card className={styles.profileCard}>
              <CardHeader
                // avatar={
                //   <Avatar src={picture} className={styles.bigAvatar} alt={name} />
                // }
                avatar={
                  // data.imageUrl
                  <Avatar src={data.imageUrl ? data.imageUrl : AvatarImg} className={styles.avatar} alt={data.firstName} />
                }

                title={
                  <>
                    <TextField
                      type="file"
                      placeholder="Select Avatar"
                      label="Avatar"
                      id="avatar"
                      margin="normal"
                      size='small'
                      className={styles.input}
                      onChange={(e) => setAvatar(e.target.files[0])}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <div className={styles.flex}>
                      <TextField
                        placeholder="First Name"
                        id="firstName"
                        margin="normal"
                        value={firstName}
                        size='small'
                        className={styles.input}
                        onChange={(e) => setFirstName(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: !!firstName,
                        }}
                      />
                      <TextField
                        size='small'
                        placeholder="Last Name"
                        id="lastName"
                        margin="normal"
                        value={lastName}
                        className={styles.input}
                        onChange={(e) => setLastName(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: !!lastName,
                        }}
                      />
                    </div>
                  </>
                }

                subheader={
                  <div>
                    <div className={styles.address}>
                      <RoomIcon />
                      <div className={styles.flex}>
                        <TextField
                          id="outlined-full-width"
                          label="City"
                          size="small"
                          className={styles.input}
                          value={city}
                          placeholder="eg. Calgary"
                          fullWidth
                          margin="normal"
                          onChange={(e) => setCity(e.target.value)}
                          variant="outlined"
                          InputLabelProps={{
                            shrink: !!city,
                          }}
                        />
                        <TextField
                          size="small"
                          id="outlined-full-width"
                          label="Postal Code"
                          className={styles.input}
                          value={postCode}
                          placeholder="eg. T3C B5Y"
                          fullWidth
                          margin="normal"
                          onChange={(e) => setPostCode(e.target.value)}
                          variant="outlined"
                          InputLabelProps={{
                            shrink: !!postCode,
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <SearchBar
                      isMulti
                      closeMenuOnSelect={false}
                      initialValue={skillForms.map(s => ({ label: s.subCategory, value: s.subCategory }))}
                      onChange={handleSkillForms}
                    />
                  </div>
                }

              />
              <div className={styles.socials}>
                <TextField
                  id="outlined-full-width"
                  label="Facebook"
                  size="small"
                  className={styles.input}
                  value={social?.facebook}
                  placeholder="https://www.facebook.com/"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleSocialChange('facebook', e.target.value)}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-full-width"
                  label="Twitter"
                  size="small"
                  className={styles.input}
                  value={social?.twitter}
                  placeholder="https://twitter.com/"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleSocialChange('twitter', e.target.value)}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-full-width"
                  label="LinkedIn"
                  size="small"
                  className={styles.input}
                  value={social?.linkedIn}
                  placeholder="https://www.linkedin.com/"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleSocialChange('linkedIn', e.target.value)}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <CardContent>
                <h3 className={styles.label}>About Me</h3>

                <TextField
                  size="small"
                  id="outlined-full-width"
                  label="About Me"
                  className={styles.input}
                  value={about}
                  placeholder="Somthing about me...."
                  fullWidth
                  multiline
                  rows={5}
                  margin="normal"
                  onChange={(e) => setAbout(e.target.value)}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: !!about,
                  }}
                />
                {/* detailInformation */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={styles.listContainer}>
              <CardContent>
                <h3 className={styles.label}>Ads List</h3>
                <div>
                  {adForms.map((s, index) => (
                    <div key={index} className={styles.adsForm} >
                      {index > 0 && (
                        <div className={styles.close} onClick={() => handleRemoveAd(index)}>
                          <Close />
                        </div>
                      )}
                      <AdForm
                        value={s}
                        skills={skillForms}
                        onChangeTitle={value => handleChangeAd('adTitle', value, index)}
                        onChangeDescription={value => handleChangeAd('adDescription', value, index)}
                        onChangeSkill={value => {
                          handleChangeAd('subCategory', value, index);
                          handleChangeAd('category', value, index)
                        }}
                        onChangeAvatar={file => handleChangeAd('adImage', file, index)}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.more} onClick={handleAddAd}>+ Add more ads</div>

              </CardContent>
            </Card>
          </Grid>

          <Button type="submit" variant="contained" color={submitLoading ? 'secondary' : 'primary'} className={styles.button}>
            {submitLoading ? 'Saving...' : 'Save Changes'}
          </Button>

        </Grid>
      </form>
    </Container>
  ) : null;
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});