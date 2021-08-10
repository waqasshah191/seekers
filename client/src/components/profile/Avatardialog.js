import React, {useState} from 'react';
import {Dialog,DialogContent, IconButton, Avatar} from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import useStyles from './Styles'

export default function PhotoDialog() {
  const [open, setOpen] = React.useState(false);
  const [imgUrl, setImgUrl] =useState("");
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
    .then(data => setImgUrl(data.imageUrl))
    .catch(err => console.error("caught error", err))
    console.log("2 - imgUrl = ", imgUrl);
  };

  return (
    <div>
      <Avatar className={classes.bigAvatar} style={{ position: "relative", top: "-20px" }} src={imgUrl}>
      </Avatar> 
      <IconButton style={{ position: "relative", top:"-15px", left: "35px" }} onClick={handleClickOpen}>
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
