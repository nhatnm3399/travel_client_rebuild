import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import { useEffect } from 'react';
import get_list_hotel from '../../api/manage/get_list_hotel';
import DatePickerPlugin from '../Plugin/DatePicker';
import OutsideClickHandler from 'react-outside-click-handler';
import moment from 'moment';
import history_booking from '../../api/manage/history_booking';

const HistoryBooking = (props) => {
  const [listHotel, setListHotel]= useState([])
  const [startDate, setStartDate]= useState(()=> new Date())
  const [endDate, setEndDate]= useState()
  const [idHotel, setIdHotel]= useState()
  const [result, setResult]= useState([])
  useEffect(()=> {
    get_list_hotel(setListHotel)
  }, [])
//   const [open, setOpen]= React.useState(()=> false)
  return (
    <div className={"fdjakjsaklejawawaw"} style={{width: "100%", padding: 10}}>
        <AlertDialogSlide data={listHotel}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            idHotel={idHotel}
            setIdHotel={setIdHotel}
            setResult={setResult}
         />
         <br />
         <br />
         {
            result?.length > 0 &&
            <table className={"dsjkdjkfjdsasa"} style={{width: "100%"}}>
                <tr className={"sjldkjkjdksdas"}>
                    <td style={{fontWeight: 600}}>User booking</td>
                    <td style={{fontWeight: 600}}>Phone number</td>
                    <td style={{fontWeight: 600}}>Total amount</td>
                    <td style={{fontWeight: 600}}>Create date</td>
                </tr>
                {
                    result?.map((item, key)=> <tr>
                        <td>{item?.user_booking}</td>
                        <td>{item?.phone}</td>
                        <td>{item?.total_amount}</td>
                        <td>{item?.create_date}</td>
                    </tr>)
                }
            </table>
         }
         {
            result?.length <= 0 && <div className={"dkssdjkdkasas"} style={{textAlign :"center", fontWeight: 600}}>Không có dữ liệu</div>
         }
    </div>
  )
}

export default HistoryBooking


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openPicker, setOpenPicker]= useState(false)
  const func= async ()=> {
    history_booking(props?.idHotel, moment(props?.startDate).format("DD-MM-YYYY"),moment(props?.endDate).format("DD-MM-YYYY"), props?.setResult)
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Chọn khách sạn và khoảng thời gian
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Chọn khách sạn và khoảng thời gian"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className={"djfkjdksfjdsaas"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
            <select onChange={e=> props?.setIdHotel(e.target.value)} placeholder="Chọn 1 khách sạn" name="" id="">
                {
                    <option value="" disabled selected>Chọn 1 khách sạn</option>
                }
                {
                    props?.data?.map((item, key)=> <option key={key} value={item.id} >{item.title}</option>)
                }
            </select>
            <div className={"dsjkdsjfkdsadas"} style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
                <input value={`${moment(props?.startDate).format("DD-MM-YYYY")} - ${moment(props?.endDate).format("DD-MM-YYYY")}`} onClick={()=> setOpenPicker(prev=> !prev)} type="text" placeholder="Chọn khoảng thời gian" style={{width: 200, height: 25.2, outlineColor: "#2e89ff", }} />
                {
                    openPicker=== true  && <OutsideClickHandler onOutsideClick={()=> setOpenPicker(false)}>
                    <div className={"jskdjksjakdsas"} style={{position: "fixed", top: "50%", left: '50%', width: "max-content", zIndex: 999, transform: "translate(-50%, -50%) scale(1.2)"}}>
                        <DatePickerPlugin notDisable={true} setOpen={setOpenPicker} startDate={props?.startDate} endDate={props?.endDate} setStartDate={props?.setStartDate} setEndDate={props?.setEndDate} />
                    </div>
                </OutsideClickHandler>
                }
            </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant={"outlined"} onClick={handleClose}>Hủy</Button>
          <Button variant={"contained"} onClick={async()=> {
            await func();
            handleClose()
          }} >Tìm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}