import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { Button } from '@material-ui/core';
import useStyles from './Styles';
import FacebookLogo from '../images/facebook-logo.png';
import GoogleLogo from '../images/google-logo.png';


const SignInGoogle = () => {
    const [loading, setLoading] = useState(false);

    const onSuccess = (res) => {
       console.log(res)
    // accessToken
    // googleId
    // tokenId
    };

    const onFailure = (response) => {
        console.log('responseGoogle', response);
    };

    const styles = useStyles();

    return (
        <GoogleLogin
            // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            clientId="1014364683325-2icca6nab31tvl9t09d78b64qaka51kq.apps.googleusercontent.com"
            buttonText="Login With Google"
            render={({ onClick, disabled }) => (
                <Button
                    onClick={onClick}
                    disabled={disabled}
                    startIcon={<img className={styles.googkleImage} src={GoogleLogo} />}
                    className={[styles.button, styles.googleBtn].join(' ')}
                    variant="contained"
                    color="secondary"
                >
                    <span>Google</span>
                </Button>
            )}
            disabled={loading}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
}

const SignIn = () => {
    const styles = useStyles();
    return (
        <div className={styles.auth}>
            <div className={styles.authBox}>
                <h1 className={styles.title}>Log In</h1>

                <Button 
                    startIcon={<img className={styles.facebookImage} src={FacebookLogo} />}
                    className={[styles.button, styles.facebookBtn].join(' ')}
                    variant="contained"
                    color="secondary"
                >
                    <span>Facebook</span>
                </Button>
                
                <SignInGoogle />
                <span className={styles.authLinkLabel}>Don't have an account</span>
                <Link className={styles.authLink} to="/signup">Sign Up</Link>
                
            </div>
        </div>
    )
};

export default SignIn;