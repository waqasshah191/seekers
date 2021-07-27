import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TextField, Button, Chip, Container } from '@material-ui/core';
import useStyles from './Styles';
import popularSkills from './popularSkills';

const SearchBox = () => {
    const [skill, setSkill] = useState('');
    const [postCode, setPostCode] = useState('');
    const location = useLocation();
    const history = useHistory();
    const styles = useStyles();

    useEffect(() => {

        //        const queryArr = location.search ? location.search.substr(1).split('&') : [];
        const queryArr = location.search ? location.search.substr(1).split('/') : [];

        let query = {};
        if (queryArr.length > 0) {
            queryArr.forEach(q => {
                const key = q.split('=')[0];
                const value = q.split('=')[1];
                query[key] = value;
            })
        }
        setSkill(query?.skill || '');
        setPostCode(query?.code || '');

        console.log("skill", skill);
        console.log("postCode", postCode);


    }, [location]);

    const handleSubmit = e => {
        e.preventDefault();
        //        history.push(`/search?skill=${skill}&postalCode=${postCode}`)
        history.push(`/search/skillPostalCode/${skill}/${postCode}`)
    }

    return (
        <div className={styles.search}>
            <Container>
                <h3>What service do you need?</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextField
                        id="outlined-full-width"
                        label="Service"
                        className={styles.input}
                        value={skill}
                        placeholder="Piano Teacher"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setSkill(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: !!skill,
                        }}
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Postal Code"
                        value={postCode}
                        className={styles.input}
                        placeholder="Postal Code"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setPostCode(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: !!postCode,
                        }}
                    />
                    <Button className={styles.button} type="submit" size="large" variant="contained" color="primary">Search</Button>
                </form>
                <div>
                    {popularSkills.map(item => (
                        <Chip
                            key={item.id}
                            variant="contained"
                            clickable
                            component="a"

                            //                            href={`/search?category=${item.slug}`}
                            // href={`/search?skill/${item.slug}`}
                            href={`/search?adSubCategory/${item.slug}`}

                            size="small"
                            label={item.title}
                            color="#43C0F6"
                            className={styles.chip}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default SearchBox;