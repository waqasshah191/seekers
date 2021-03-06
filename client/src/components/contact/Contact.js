import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, TextField, Button } from '@material-ui/core';
import { Alert} from '@material-ui/lab';
import useStyles from './Styles.js';
import ContactImage from '../images/Picture3.jpg';

const Contact = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const [state, handleSubmit] = useForm("xbjqzpga");
    const styles = useStyles();

    useEffect(() => {
        if (state.succeeded && isSubmitted) {
            setEmail('');
            setMessage('');

            setAlertMessage('Message sent successfully!');
            setIsSubmitted(false);
        }
    }, [state]);

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
                            How can we help??? <br/>
                            Ask your questions, provide comments or share your views down below and we will reply within 24 hrs.
                        </p>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <form onSubmit={e => {
                            setAlertMessage('');
                            setIsSubmitted(true);
                            handleSubmit(e);
                        }}>
                            <TextField
                                id="outlined-full-width"
                                label="Email"
                                className={styles.input}
                                value={email}
                                placeholder="Enter Your Email"
                                fullWidth
                                name="email"
                                type="email"
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
                                name="message"
                                rows={5}
                                margin="normal"
                                onChange={(e) => setMessage(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: !!message,
                                }}
                            />

                            <Button
                                disabled={isSubmitted}
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                className={styles.button}
                            >
                                Submit
                                </Button>
                        </form>

                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default Contact;