import React from 'react'
import { TextField } from '@material-ui/core';
import useStyles from './Styles.js';
import SearchBar from '../searchinprofile/Searchskills.js';

const AdForm = ({ value, onChangeAvatar, onChangeTitle, onChangeDescription, onChangeSkill, skills = [] }) => {
    const styles = useStyles();
    return (
        <div className={styles.adItem}>
            <SearchBar
                initialValue={value ? { label: value.subCategory, value: value.subCategory } : undefined}
                options={skills.map(s => ({ label: s.subCategory, value: s.subCategory }))}
                onChange={({ selectedOption }) => onChangeSkill(selectedOption.value)}
            />
            <TextField
                type="file"
                placeholder="Ad Image"
                label="Ad Image"
                id="title"
                margin="normal"
                size='small'
                fullWidth
                className={styles.input}
                onChange={(e) => onChangeAvatar(e.target.files[0])}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                placeholder="Ad Title"
                id="title"
                margin="normal"
                value={value?.adTitle}
                size='small'
                fullWidth
                className={styles.input}
                onChange={(e) => onChangeTitle(e.target.value)}
                variant="outlined"
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
                className={styles.input}
                onChange={(e) => onChangeDescription(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                    shrink: !!value?.adDescription,
                }}
            />
        </div>
    )
}

export default AdForm;