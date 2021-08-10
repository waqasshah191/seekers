import React, { useState } from 'react';
import { Close } from '@material-ui/icons';
import { Container, Modal, Backdrop } from '@material-ui/core';
import useStyles from './Styles.js';
import data from './teamData';

const Team = () => {
    const [teamData, setTeamData] = useState(null);
    const styles = useStyles();
    return (
        <div className="search">
            <Container>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Team</h1>
                        <p className={styles.contentText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className={styles.teamList}>
                        {data.map(item => (
                            <div className={styles.team} key={item.id} onClick={() => setTeamData(item)}>
                                <img className={styles.teamImage} src={item.imageUrl} alt={item.fullName} />
                                <h2 className={styles.teamName}>{item.fullName}</h2>
                                <p className={styles.teamPos}>{item.position}</p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </Container>
            <Modal
                className={styles.modal}
                open={!!teamData}
                onClose={() => setTeamData(null)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                   
                <div className={styles.modalContent}>
                    <div className={styles.modalClose} onClick={() => setTeamData(null)}>
                        <Close />
                    </div>
                    <div className={styles.teamProfile}>
                        <img className={styles.teamProfileImg} src={teamData?.imageUrl} alt={teamData?.fullName} />
                        <div>
                            <h2 className={styles.teamProfileName}>{teamData?.fullName}</h2>
                            <p className={styles.teamProfilePos}>{teamData?.position}</p>
                        </div>
                    </div>
                    <strong className={styles.label}>Bio:</strong>
                    <p className={styles.description}>{teamData?.description}</p>
                </div>
            </Modal>
        </div>
    )
}

export default Team;