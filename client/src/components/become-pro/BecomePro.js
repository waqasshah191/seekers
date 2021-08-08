import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Close } from '@material-ui/icons';
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

const BecomePro = () => {
    const [skillForms, setSkillForms] = useState([{ category: null, subcategory: null}]);
    const [postCode, setPostCode] = useState('');
    const { getIdTokenClaims } = useAuth0();
    const history = useHistory();

    const styles = useStyles();
    const handleAddSkill = () => {
        const updateSkillForms = [...skillForms];
        updateSkillForms.push({ category: null, subcategory: null});
        setSkillForms(updateSkillForms);
    }
    const handleRemoveSkill = (index) => {
        const updateSkillForms = [...skillForms];
        updateSkillForms.splice(index, 1);
        setSkillForms(updateSkillForms);
    }

    const handleChangeCategory = (value, index) => {
        const updateSkillForms = [...skillForms];
        updateSkillForms[index].category = value;
        updateSkillForms[index].subcategory = null;
        setSkillForms(updateSkillForms);
    }

    const handleChangeSubCategory = (value, index) => {
        const updateSkillForms = [...skillForms];
        updateSkillForms[index].subcategory = value;
        setSkillForms(updateSkillForms);
    }

    const handleSubmit = () => {
        getIdTokenClaims().then(res => {
            fetch('/user', {
                method: 'POST',
                body: JSON.stringify({
                    email: res.name,
                    isProUser: true,
                    skills: skillForms,
                    postalCode: postCode
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
                <div>
                {skillForms.map((s, index) => (
                    <div className={styles.skillForm} >
                        {index > 0 && (
                            <div className={styles.close} onClick={() => handleRemoveSkill(index)}>
                                <Close />
                            </div>
                        )}
                        <SkillForm
                            key={s}
                            onChangeCategory={value => handleChangeCategory(value, index)}
                            onChangeSubCategory={value => handleChangeSubCategory(value, index)}
                        />
                    </div>
                ))}
                </div>
                <div className={styles.more} onClick={handleAddSkill}>+ Add more skills</div>

                <TextField
                    id="outlined-full-width"
                    label="Post Code"
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

                <Button variant="contained" className={styles.button} onClick={handleSubmit}>Get Started</Button>
            </div>
        </div>
    )
}

export default BecomePro;