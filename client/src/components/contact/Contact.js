import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { Alert} from '@material-ui/lab';
import useStyles from './Styles.js';
import ContactImage from '../images/background.png';

const Contact = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const styles = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        setTimeout(() => {
            setEmail('');
            setMessage('');

            setAlertMessage('Message sent successfully!');
            
            setTimeout(() => {
                setAlertMessage('');
            }, 5000);
        }, 1000);
    }

    console.log('alertMessage', alertMessage)

    return (
        <div className="search">
            <Container>
                <div className={styles.container}>
                   
                    <div className={styles.imageWrapper}>
                        <img src={ContactImage} className={styles.image} alt="Contact Us" />
                    </div>

                    <div className={styles.content}>
                        {alertMessage && (
                            <Alert severity="success">{alertMessage}</Alert>
                        )}
                        
                        <h1>Contact Us</h1>
                        <p className={styles.contentText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="outlined-full-width"
                                label="Email"
                                className={styles.input}
                                value={email}
                                placeholder="Enter Your Email"
                                fullWidth
                                margin="normal"
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: !!email,
                                }}
                            />

                            <TextField
                                id="outlined-full-width"
                                label="Message"
                                className={styles.input}
                                value={message}
                                placeholder="Enter Your Message"
                                fullWidth
                                multiline
                                rows={5}
                                margin="normal"
                                onChange={(e) => setMessage(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: !!message,
                                }}
                            />

                            <Button type="submit" variant="contained" color="primary" size="large" className={styles.button}>Submit</Button>
                        </form>

                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default Contact;