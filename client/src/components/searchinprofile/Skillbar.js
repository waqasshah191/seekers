import React, { useState } from 'react';
import { FormControl, TextField, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import useStyles from './../create-ads/Styles';
import categoriesData from '../../categories';

const SkillBar = ({ onChangeCategory, onChangeSubCategory }) => {
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
export default SkillBar