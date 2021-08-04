import React from 'react';
import { ExpandMore, Help } from '@material-ui/icons';
import { Container, Tab, Tabs, Typography, Box, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import useStyles from './Styles.js';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const HelpCenter = () => {
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);

    const styles = useStyles();

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="search">
            <Container className={styles.container}>
                <div className={styles.root}>
                    <div className={styles.tabHeader}>
                        <Tabs
                            indicatorColor="primary"
                            centered
                            value={value}
                            onChange={handleChangeTab}
                        >
                            <Tab className={styles.tabHead} label="Regular users" />
                            <Tab className={styles.tabHead} label="Professionals" />
                        </Tabs>
                    </div>
                    <TabPanel value={value} index={0}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={styles.question}>
                                    <Help />&nbsp;How Pippsy works?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.heading}>
                                    Pippsy is a social utility which enables a better way for you to get found by people who need your skill and also, to find people who have the skills you need. Pippsy is free to use.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={styles.question}>
                                    <Help />&nbsp;How to find a pro on Pippsy?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.heading}>
                                    Thousands of people visit Pippsy every day to hire pros. Follow these steps to find a pro in your area:
                                    Go to the Pippsy homepage. Type what you need and add your postal code. Look through the list of pros. Use the filters to narrow your results. Contact the pros you like.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={styles.question}>
                                    <Help />&nbsp;How to message a pro on Pippsy?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.heading}>
                                    Your Inbox has all your new and old messages. Go here to send a reply or pick up a prior conversation.When you receive an email notification about a new message from a Thumbtack pro, click the Reply button in the email below the pro’s message (don’t reply directly to the email).


                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={styles.question}>
                                    <Help />&nbsp;How to log in?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.heading}>
                                    To log in, you need your email and password. You can also choose to log in with your Google account.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={styles.question}>
                                    <Help /> &nbsp;How Pippsy helps pro to find clients?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.heading}>
                                    Pippsy introduces you to customers looking for your services. When you sign up, you create a profile page where customers go to learn about your business, see photos of your work, and read reviews.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={styles.question}>
                                    <Help />&nbsp;Do pros work for Pippsy?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.heading}>
                                    No. We help customers find pros for their projects, but pros don’t work for Thumbtack. Instead, pros on Pippsy set their own prices for their services and contract directly with their customers.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                </div>
            </Container>
        </div>
    )
}

export default HelpCenter;