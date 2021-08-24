import React, {useState, useEffect} from 'react'
import {Dialog, DialogContent, IconButton} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import Map from '../Map'

export default function MapDialog() {
  const [open, setOpen] = React.useState(false)
  const [data,setData] = useState([])
  const [postalCode, setPostalCode] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function getLongLat() { 
    let getResponse = await fetch(`/longLat/${postalCode}`);
    let data = await getResponse.json();
    console.log("this is long lat", data)
    setData (data);     
  }
   useEffect( () => {
    getLongLat()
  }, [])

  return (
    <div>
      <IconButton onClick={handleClickOpen}><RoomIcon/></IconButton> 
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
            <Map data={data}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}