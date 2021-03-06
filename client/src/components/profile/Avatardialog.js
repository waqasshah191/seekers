import React, {useState} from 'react';
import {Dialog,DialogContent, IconButton, Avatar} from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import useStyles from './Styles'

export default function PhotoDialog(props) {
  const [open, setOpen] = React.useState(false);
  //const [imgUrl, setImgUrl] =useState("");
  const imageUrl=props.imageUrl;
  const setImageUrl= props.setImageUrl;
  const [selectedFile, setSelectedFile] = useState();

  const classes= useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleFile = (e) => {
    console.log("e.target.files[0].name = ", e.target.files[0].name);
    setSelectedFile(e.target.files[0]);
  };
  
  const handleSubmission = () => {
    const formData = new FormData();
  
    formData.append('file', selectedFile);
  
  fetch('/upload',
        {
            method: 'POST',
            body: formData,
        }
    )
    .then(res => res.json())
    .then(data => {console.log("this is the url", data); return data})
    .then(data => setImageUrl(data.imageUrl))
    .catch(err => console.error("caught error", err))
    console.log("2 - imgUrl = ", imageUrl);
  };

  return (
    <div>
      <Avatar className={classes.bigAvatar} style={{ position: "relative", top: "-20px" }} src={imageUrl}>
      </Avatar> 
      <IconButton style={{ position: "relative", top:"-10px", left: "50px" }} onClick={handleClickOpen}>
      <AddAPhoto />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <input type="file"  onChange={handleFile} /> <br/>
        <button onClick={handleSubmission}>Submit</button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
