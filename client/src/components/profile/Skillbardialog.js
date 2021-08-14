import SkillBar from "./../searchinprofile/Skillbar"
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogActions} from "@material-ui/core";
import {PostAdd} from '@material-ui/icons'
import useStyles from './Styles';


export default function SkillBarDialog() {
  const [open, setOpen] = React.useState(false)
  const [skillForm, setSkillForm] = useState({ category: null, subcategory: null})
  const classes= useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeCategory = value => {
    const updateSkillForm = {...skillForm};
    updateSkillForm.category = value;
    updateSkillForm.subcategory = null;
    setSkillForm(updateSkillForm);
  }
  
  const handleChangeSubCategory = value => {
    const updateSkillForm = {...skillForm};
    updateSkillForm.subcategory = value;
    setSkillForm(updateSkillForm);
  }

  return (
    <div>
      <Button variant="contained" color="default" startIcon={<PostAdd/>} style={{ position: "relative", left: "120px" }} onClick={handleClickOpen}> 
       Add Skills
      </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        >
          <DialogContent>
          <SkillBar onChangeCategory={value => handleChangeCategory(value)}
         onChangeSubCategory={value => handleChangeSubCategory(value)}/>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}
