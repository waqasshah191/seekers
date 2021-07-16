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
        const queryArr = location.search ? location.search.substr(1).split('&') : [];
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
    }, [location]);
    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/search?skill=${skill}&code=${postCode}`)
    }
    return (
        <div className={styles.search}>
            <Container>
                <h3>What skill do you need?</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextField
                        id="outlined-full-width"
                        label="Skill"
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
                        label="Post Code"
                        value={postCode}
                        className={styles.input}
                        placeholder="Post Code"
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
                            href={`/search?category=${item.slug}`}
                            size="small"
                            label={item.title}
                            color="primary"
                            className={styles.chip}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default SearchBox;
