import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Close } from '@material-ui/icons';
import { FormControl, TextField, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import useStyles from './Styles';
import categoriesData from '../../categories';
import { Loading } from '../index';
import { AppContext } from '../../context/AppProvider';


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
        // const categoryId = event.target.value
        // setSelectedCategory(categoryId);
        // const category = categoriesData.find(i => i.id === categoryId);
        // onChangeCategory(categoryId);
        const categoryTitle = event.target.value;
        setSelectedCategory(categoryTitle);
        const category = categoriesData.find(i => i.title === categoryTitle);
        onChangeCategory(categoryTitle);
        if (category) {
            setSubCategories(category.subcategories);
        }
    };

    const handleChangeSub = (event) => {
        // const subCategoryId = event.target.value;
        // setSelectedSubCategory(subCategoryId);
        // onChangeSubCategory(subCategoryId);
        const subCategoryTitle = event.target.value;
        setSelectedSubCategory(subCategoryTitle);
        onChangeSubCategory(subCategoryTitle);
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
                    <MenuItem key={category.id} value={category.title}>
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
                    <MenuItem key={category.id} value={category.title}>
                        {category.title}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </>
    )
}

const BecomePro = () => {
    const [loading, setLoading] = useState(false);
    const { userId, onUser } = useContext(AppContext); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [skillForms, setSkillForms] = useState([{ category: null, subCategory: null}]);
    const [postCode, setPostCode] = useState('');
    const [city, setCity] = useState('');
    
    const styles = useStyles();

    const { isAuthenticated, user } = useAuth0();
    const history = useHistory();

    useEffect(() => {
        if (userId) {
          setLoading(true);
          fetch(`/user/${userId}`).then(async res => {
            const response = await res.json();
            const userRes = response[0];
            onUser(userRes);
            setFirstName(userRes.firstName);
            setLastName(userRes.lastName);
            setPostCode(userRes.postalCode)
          }).finally(() => setLoading(false));
        }
      }, [userId]);


    const handleAddSkill = () => {
        const updateSkillForms = [...skillForms];
        updateSkillForms.push({ category: null, subCategory: null});
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
        updateSkillForms[index].subCategory = null;
        setSkillForms(updateSkillForms);
    }

    const handleChangeSubCategory = (value, index) => {
        const updateSkillForms = [...skillForms];
        updateSkillForms[index].subCategory = value;
        setSkillForms(updateSkillForms);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`/user${userId ? `/${userId}` : ''}`, {
            method: userId ? 'PUT' : 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                city,
                email: user.email,
                isProUser: true,
                skills: skillForms,
                postalCode: postCode
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async res => {
            const result = await res.json();
            if (result) {
                history.push('/profile')
            }
        })
    }

    return (
        <div className={styles.auth}>   
            <div className={styles.authBox}>
                <h1 className={styles.title}>Earn money your way</h1>
                <p className={styles.description}>See how much you can make on Pippsy</p>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        placeholder="First Name"
                        id="firstName"
                        margin="normal"
                        value={firstName}
                        className={styles.input}
                        onChange={(e) => setFirstName(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: !!firstName,
                        }}
                    />
                    <TextField
                        fullWidth
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
                    <TextField
                        fullWidth
                        readonly
                        disabled
                        margin="normal"
                        value={user?.email}
                        className={styles.input}
                        variant="outlined"
                    />
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
                        label="City"
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

                    <Button variant="contained" className={styles.button} onClick={handleSubmit}>Get Started</Button>
                </form>
            </div>
        </div>
    )
}

export default withAuthenticationRequired(BecomePro, {
    onRedirecting: () => <Loading />,
});