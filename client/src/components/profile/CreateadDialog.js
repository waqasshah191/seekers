import CreateAds from "./../create-ads/CreateAds"
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './Styles';


export default function CreateAdDialog() {
  const [open, setOpen] = React.useState(false);
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
        <CreateAds/>
        </DialogContent>
      </Dialog>
    </div>
  );
}