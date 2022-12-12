import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupConfirm({open, setOpen, title, content, func, setOpenSnackbar, setMessageSnackbar, bookingId, messageSnackbar}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <span style={{fontSize: 20, fontWeight: 600 }}>{title}</span>
          <div onClick={handleClose} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}><CloseIcon /></div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={"dsksdlkaslksa"} style={{padding: 0}}>
          <Button style={{width: "50%", minWidth: 250, background: "#ff7167", textTransform: "uppercase", height: 60, borderRadius: 0, fontSize: 20, fontWeight: 600, color: "#fff"}} onClick={()=> {
            func();
            handleClose()
            setOpenSnackbar(()=> true)
            setMessageSnackbar(()=> messageSnackbar || "Đã thêm thành công khách sạn")
          }}>YES</Button>
          <Button style={{width: "50%", minWidth: 250, background: "#b6bdcf", textTransform: "uppercase", margin: 0, height: 60, borderRadius: 0, fontSize: 20, fontWeight: 600, color: "#fff"}} onClick={()=> {
            handleClose()
            setOpenSnackbar(()=> true)
            setMessageSnackbar(()=> messageSnackbar|| "Đã từ chối duyệt khách sạn ")
          }}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}