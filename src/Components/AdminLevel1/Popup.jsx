import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate= useNavigate()

  return (
    <div>
      <Button variant="outlined" onClick={()=> {
        props?.func();
        handleClickOpen()
      }}>
        {props?.title}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle style={{width: 600}}>{"Thông báo"}</DialogTitle>
        <DialogContent style={{width: 600}}>
          <DialogContentText id="alert-dialog-slide-description">
            {props?.desc || "Thao tác thành công"}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{width: 600, justifyContent: "center", alignItems: "center"}}> 
          <Button onClick={()=> {
            handleClose()
            navigate("/admin")
          }}>Quay về trang quản trị</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}