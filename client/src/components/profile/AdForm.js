import React from 'react'
import { TextField } from '@material-ui/core';
import useStyles from './Styles.js';
import SearchBar from '../searchinprofile/Searchskills.js';

const AdForm = ({ value, onChangeTitle, onChangeDescription, onChangeSkill, skills = [] }) => {
    const classes = useStyles();
    return (
        <div className={classes.adItem}>
            <SearchBar
                initialValue={value ? { label: value.subCategory, value: value.subCategory } : undefined}
                options={skills.map(s => ({ label: s.subCategory, value: s.subCategory }))}
                onChange={({ selectedOption }) => onChangeSkill(selectedOption.value)}
            />            
            <TextField
                placeholder="Ad Title"
                id="title"
                margin="normal"
                value={value?.adTitle}
                size='small'
                fullWidth
                className={classes.input}
                onChange={(e) => onChangeTitle(e.target.value)}
                variant="outlined"
                style={{ backgroundColor: '#f6f4d4'}}
                InputLabelProps={{
                    shrink: !!value?.adTitle,
                }}
            />
            <TextField
                placeholder="Ad Description"
                id="description"
                margin="normal"
                value={value?.adDescription}
                size='small'
                multiline
                rows={4}
                fullWidth
                className={classes.input}
                onChange={(e) => onChangeDescription(e.target.value)}
                variant="outlined"
                style={{ backgroundColor: '#f6f4d4'}}
                InputLabelProps={{
                    shrink: !!value?.adDescription,
                }}
            />
        </div>
    )
}

export default AdForm;