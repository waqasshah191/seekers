import CreateAds from "./../create-ads/CreateAds"
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './Styles';
import {TextField} from '@material-ui/core'


export default function CreateAdDialog() {
  const [open, setOpen] = React.useState(false)
  const [title,setTitle]= useState("")
  const [description,setDescription] = useState("")
  const classes= useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} variant='contained' color='secondary' style={{ position: "relative", left: "250px" }} onClick={handleClickOpen}> 
       Create Ads
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <h1 className={classes.title}>Create New Ad</h1>
          <TextField
            id="outlined-full-width"
            label="Ad Title"
            className={classes.input}
            value={title}
            placeholder=""
            fullWidth
            margin="normal"
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: !!title,
            }}
          />
           <TextField
            rows={5}
            id="outlined-full-width"
            label="Description"
            className={classes.input}
            value={description}
            placeholder=""
            fullWidth
            multiline
            margin="normal"
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: !!description,
            }}
        />
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}