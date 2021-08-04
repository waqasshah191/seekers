import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './Styles';
import FacebookLogo from '../images/facebook-logo.png';
import GoogleLogo from '../images/google-logo.png';

const SignUp = () => {
    const styles = useStyles();
    return (
        <div className={styles.auth}>
            <div className={styles.authBox}>
                <h1 className={styles.title}>Create your profile</h1>
                <Button
                    startIcon={<img className={styles.facebookImage} src={FacebookLogo} />}
                    className={[styles.button, styles.facebookBtn].join(' ')}
                    variant="contained"
                    color="secondary"
                >
                    <span>Sign up with Facebook</span>
                </Button>
                <Button 
                    startIcon={<img className={styles.googkleImage} src={GoogleLogo} />}
                    className={[styles.button, styles.googleBtn].join(' ')}
                    variant="contained"
                    color="secondary"
                >
                    <span>Sign up with Google</span>
                </Button>
                <span className={styles.description}>
                    By clicking Sign up with Facebook or Sign up with google you agree to the <Link to="/">Terms of Use</Link> and <Link to="/">Privacy Policy</Link>
                </span>
                
            </div>
        </div>
    )
};

export default SignUp;