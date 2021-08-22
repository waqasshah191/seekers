import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert} from '@material-ui/lab';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { TextField, Button } from '@material-ui/core';
import useStyles from './Styles';
import { Loading } from '../index';


// const SignUp = () => {
//     const styles = useStyles();
//     return (
//         <div className={styles.auth}>
//             <div className={styles.authBox}>
//                 <h1 className={styles.title}>Create your profile</h1>
//                 <Button
//                     startIcon={<img className={styles.facebookImage} src={FacebookLogo} />}
//                     className={[styles.button, styles.facebookBtn].join(' ')}
//                     variant="contained"
//                     color="secondary"
//                 >
//                     <span>Sign up with Facebook</span>
//                 </Button>
//                 <Button 
//                     startIcon={<img className={styles.googkleImage} src={GoogleLogo} />}
//                     className={[styles.button, styles.googleBtn].join(' ')}
//                     variant="contained"
//                     color="secondary"
//                 >
//                     <span>Sign up with Google</span>
//                 </Button>
//                 <span className={styles.description}>
//                     By clicking Sign up with Facebook or Sign up with google you agree to the <Link to="/">Terms of Use</Link> and <Link to="/">Privacy Policy</Link>
//                 </span>
                
//             </div>
//         </div>
//     )
// };

const SignUp = () => {
    const { isAuthenticated, user } = useAuth0();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const styles = useStyles();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        fetch('/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email: user.email
            })
        })
        .then(async res => {
            try {
                const resposne = await res.json();
                if (resposne) {
                    history.push('/profile');
                }
            } catch(e) {
                console.log(e);
            }
        }).finally(() => setLoading(false));
    }

    return (
        <div className={styles.auth}>
            <div className={styles.authBox}>
                {isAuthenticated ? (
                    <>
                        <h1 className={styles.title}>Create your profile</h1>
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
                            <Button type="submit" className={styles.button} variant="contained" color="secondary">
                                {loading ? 'Submitting...' : 'Sign Up'}
                            </Button>
                        </form>
                        
                        <span className={styles.description}>
                            By clicking Sign up with Facebook or Sign up with google you agree to the <Link to="/">Terms of Use</Link> and <Link to="/">Privacy Policy</Link>
                        </span>
                    </>
                ) : (
                    <Alert severity="warning" style={{ width: '100%'}}>Please Login</Alert>
                )}
            </div>
        </div>
    )
}

export default withAuthenticationRequired(SignUp, {
    onRedirecting: () => <Loading />,
});
