import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { FormControl, TextField, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import useStyles from './Styles';
import categoriesData from '../../categories';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};


const SkillForm = ({ onChangeCategory, onChangeSubCategory }) => {
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);
    const styles = useStyles();
    const handleChange = (event) => {
        const categoryId = event.target.value
        setSelectedCategory(categoryId);
        const category = categoriesData.find(i => i.id === categoryId);
        onChangeCategory(categoryId);
        if (category) {
            setSubCategories(category.subcategories);
        }
    };

    const handleChangeSub = (event) => {
        const subCategoryId = event.target.value;
        setSelectedSubCategory(subCategoryId);
        onChangeSubCategory(subCategoryId);
    };

    return (
        <>

            <FormControl variant="outlined" className={styles.formControl}>
                <InputLabel id="categories">Skill categories</InputLabel>
                <Select
                    labelId="categories"
                    id="categories"
                    value={selectedCategory}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                {categoriesData.map(category => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.title}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={styles.formControl}>
                <InputLabel id="skill">Choose a skill</InputLabel>
                <Select
                    labelId="skill"
                    id="skill"
                    value={selectedSubCategory}
                    onChange={handleChangeSub}
                    MenuProps={MenuProps}
                >
                {subCategories.map(category => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.title}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </>
    )
}

const CreateAds = () => {
    const [skillForm, setSkillForm] = useState({ category: null, subcategory: null});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { getIdTokenClaims } = useAuth0();
    const history = useHistory();

    const styles = useStyles();
    const handleChangeCategory = value => {
        const updateSkillForm = {...skillForm};
        updateSkillForm.category = value;
        updateSkillForm.subcategory = null;
        setSkillForm(updateSkillForm);
    }

    const handleChangeSubCategory = value => {
        const updateSkillForm = {...skillForm};
        updateSkillForm.subcategory = value;
        setSkillForm(updateSkillForm);
    }


    const handleSubmit = () => {
        getIdTokenClaims().then(res => {
            fetch('/user', {
                method: 'PUT',
                body: JSON.stringify({
                    email: res.name,
                    isProUser: true,
                    category: skillForm.category,
                    subCategory: skillForm.subcategory,
                    adDescription: description,
                    adTitle: title,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ res.__raw
                }
            }).then(async res => {
                const result = await res.json();
                if (result) {
                    history.push('/profile')
                }
            })
        })
    }

    return (
        <div className={styles.auth}>   
            <div className={styles.authBox}>
                <h1 className={styles.title}>Earn money your way</h1>
                <p className={styles.description}>See how much you can make on Pippsy</p>
                <TextField
                    id="outlined-full-width"
                    label="Ad Title"
                    className={styles.input}
                    value={title}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: !!title,
                    }}
                />
                    
                <SkillForm
                    onChangeCategory={value => handleChangeCategory(value)}
                    onChangeSubCategory={value => handleChangeSubCategory(value)}
                />

                <TextField
                    rows={5}
                    id="outlined-full-width"
                    label="Description"
                    className={styles.input}
                    value={description}
                    placeholder="eg. T3C B5Y"
                    fullWidth
                    multiline
                    margin="normal"
                    onChange={(e) => setDescription(e.target.value)}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: !!description,
                    }}
                />

                <Button variant="contained" className={styles.button} onClick={handleSubmit}>Get Started</Button>
            </div>
        </div>
    )
}

export default CreateAds;