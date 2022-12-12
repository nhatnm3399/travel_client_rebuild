import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { useNavigate, useSearchParams } from "react-router-dom";
import add_room_hotel from "../../api/auth/manage_hotel/add_room";
import { uploadImageClient } from "../../firebase/config";
import InputTemplate from "../Common/InputTemplate";
import { Title } from "./ListHotel";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

import { Convenient } from "./RegisterHotel";

const AddRoomForHotel = (props) => {
  return (
    <div className={"fkdkaskalskalsas"} style={{ width: "100%" }}>
      <Title is_edit={props?.is_edit} title={props?.is_edit===true ? "Sửa khách sạn" : "Đăng ký khách sạn"} title1={props?.is_edit=== true ? "Sửa phòng" : "Đăng ký phòng"}  />
      <MainAddRoom />
    </div>
  );
};

const MainAddRoom = (props) => {
  const [searchParams]= useSearchParams()
  const [listImage, setListImage]= useState([])
  const isChooseImage= listImage?.length> 0 ? true: false
  const [roomName, setRoomName]= useState("")
  const [price, setPrice]= useState()
  const [numberPeople, setNumberPeople]= useState()
  const [roomArea, setRoomArea]=  useState()
  // const [hotelId, setHotelId]= useState()
  const [properties, setProperties]= useState([])
  // eslint-disable-next-line
  const [data, setData]= useState()
  // eslint-disable-next-line
  const [listUrl, setListUrl]= useState([])
  const navigate= useNavigate()
  const [doneRoom, setDoneRoom]= useState(false)
  const add_room= async ()=> {
      const list_image_un_resole= listImage?.map(item=> uploadImageClient(item.img, setListUrl))
      const result= await Promise.all(list_image_un_resole)
      await add_room_hotel(roomName, price, numberPeople, roomArea, result[0], result[1], result[2], result[3], result[4], searchParams.get("idHotel"), properties, setData)
      // 
      setDoneRoom(true)
    }
  return (
    <div className={"fkdkalskalrwarae"} style={{ width: "100%", padding: 10 }}>
      <div className={"vkdkskadfdsdssd"} style={{ marginBottom: 20 }}>
        Thông tin chính
      </div>
      <Tab1 roomName={roomName} setRoomName={setRoomName} price={price} setPrice={setPrice} numberPeople={numberPeople} setNumberPeople={setNumberPeople} roomArea={roomArea} setRoomArea={setRoomArea} />
      <br />
      <br />
      <Convenient convenient={properties} setConvenient={setProperties} />
      <br /><br />
      <Image listImage={listImage} setListImage={setListImage} isChooseImage={isChooseImage} />
      <br />
      <BtnCreate add_room={add_room} />
      <br />
      {
        doneRoom=== true &&
        <>
          {
            <div>
              <Dialog
                open={doneRoom}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=> setDoneRoom(()=> false)}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle style={{position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <span style={{fontSize: 20, fontWeight: 600 }}>{"Thông báo"}</span>
                  <div onClick={()=> setDoneRoom(()=> false)} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}><CloseIcon /></div>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Đã thêm phòng thành công
                  </DialogContentText>
                </DialogContent>
                <DialogActions className={"dsksdlkaslksa"} style={{padding: 0}}>
                  <div className={"jzdsflkjdkljsdas"} style={{display: "flex", justifyContent: "center" ,alignItems: "center", gap: 20, padding: 10}}>
                    <Button variant="primary" onClick={()=> window.location.reload()}>Tiếp tục đăng ký phòng</Button>
                    <Button variant={"secondary"} onClick={()=>  navigate("/manage/hotel/general")}>Đi tới danh sách khách sạn</Button>
                  </div>
                </DialogActions>
              </Dialog>
            </div>
          }
        </>

      }
    </div> 
  );
};

const Tab1 = (props) => {
  return (
    <div
      className={"fkjaksjkfaweaw"}
      style={{
        width: "100%",
        padding: 10,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <ItemOption width={"calc(100% / 3)"} title={<span><span style={{color: "red", fontWeight: 600, fontSize: 18}}>*</span>Tên phòng</span>} onChange={props?.setRoomName} />
      <ItemOption width={"calc(100% / 3)"} title={<span><span style={{color: "red", fontWeight: 600, fontSize: 18}}>*</span>Giá phòng</span>} onChange={props?.setPrice} />
      <ItemOption width={"calc(100% / 3)"} title={<span><span style={{color: "red", fontWeight: 600, fontSize: 18}}>*</span>Số lượng giường</span>} onChange={props?.setNumberPeople} />
      <ItemOption width={"calc(100% / 3)"} title={<span><span style={{color: "red", fontWeight: 600, fontSize: 18}}>*</span>Diện tích</span>} onChange={props?.setRoomArea} />
    </div>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PopupConfirmXXX({open, setOpen, title, content, func, setOpenSnackbar, setMessageSnackbar, bookingId, messageSnackbar}) {
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

// const Tab2 = (props) => {
//   return (
//     <div
//       className={"fkjjjasjaskjasj"}
//       style={{ width: "100%", padding: 10, borderTop: "1px solid #000" }}
//     >
//       <TitleItem title={"Tiện nghi và nội quy"} />
//       <div
//         className={"fgjkkdkldskldkla"}
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           gap: 30,
//           flexWrap: "wrap",
//         }}
//       >
//         <ItemOption2 type={"checkbox"} title={"Wifi"} />
//         <ItemOption2 type={"checkbox"} title={"Máy lạnh"} />
//         <ItemOption2 type={"checkbox"} title={"WC"} />
//         <ItemOption2 type={"checkbox"} title={"Chỗ để xe"} />
//       </div>
//       <br />
//       <TitleItem title={"Hướng nhìn"} />
//       <div
//         className={"fgjkkdkldskldkla"}
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           gap: 30,
//           flexWrap: "wrap",
//         }}
//       >
//         <ItemOption2 type={"checkbox"} title={"Núi"} />
//         <ItemOption2 type={"checkbox"} title={"Biển"} />
//         <ItemOption2 type={"checkbox"} title={"Sông"} />
//       </div>
//       <br />
//       <TitleItem title={"Phòng tắm"} />
//       <div
//         className={"fgjkkdkldskldkla"}
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           gap: 30,
//           flexWrap: "wrap",
//         }}
//       >
//         <ItemOption2 title={"Đồ vệ sinh cá nhân"} />
//         <ItemOption2 title={"Dép"} />
//       </div>
//       <br />
//     </div>
//   );
// };

export const ItemOption = (props) => {
  return (
    <div
      className={"fjkdksdfadsladas"}
      style={{ width: props.width, paddingRight: 20, marginBottom: 20 }}
    >
      <div className={"fkdjsgkfkdsasfd"} style={{ marginBottom: 12 }}>
        {props.title}
      </div>
      <div
        className={"fajfjdkdksdksasa"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputTemplate
          type={props.type}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          placeholder={props.placeholder}
          style={{
            width: "100%",
            height: 40,
            background: "#fff",
            padding: 10,
            border: "1px solid #e7e7e7",
            outlineColor: "#2e89ff",
            borderRadius: 5,
          }}
        />
      </div>
    </div>
  );
};

export const ItemOption2 = (props) => {
  return (
    <div
      className={"fjsdjkskaskldkla"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div className={"fkjsdkkkasasasa"} style={{ fontSize: 16 }}>
        {props.title}
      </div>
      <div
        className={"fdjlfklaklsdka"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputTemplate
          type={props.type}
          onChange={() => props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          style={{
            width: 16,
            height: 16,
            background: "#d9d9d9",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export const TitleItem = (props) => {
  return (
    <div
      className={"aklklakklalkakra"}
      style={{ fontWeight: 600, marginBottom: 20 }}
    >
      {props.title}
    </div>
  );
};

const BtnCreate = (props) => {
  return (
    <div
      className={"fkaskldkldklska"}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <button
        className={"mdlkdskldklkaa"}
        style={{
          padding: "10px 30px",
          background: "#2e89ff",
          cursor: "pointer",
          border: "none",
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
        onClick={props?.add_room}
      >
        Lưu
      </button>
    </div>
  );
};

export default AddRoomForHotel;

const Image= (props)=> {
  const f = (e) => {
    Object.values(e.target.files).map((item) =>
      props?.setListImage((prev) => [
        ...prev,
        {
          img: item,
          imgPreview: URL.createObjectURL(item),
          key: item.lastModified,
        },
      ])
    );
  };

  const a= (e)=> {
    props?.setListImage(prev=> ([...prev, {img: e.target.files[0], imgPreview: URL.createObjectURL(e.target.files[0]), key: e.target.files[0].lastModified}]))
  }
  // eslint-disable-next-line
  const testUpload = async () => {
    // listImage.map(item=> )
    const a = await uploadImageClient(props?.listImage[0].img, props?.setResult);
    console.log(a);
  };
  return (
    <div className={"fskjakejakwjaklawwa"} style={{ width: "100%" }}>
      <TitleItem title={"Hình ảnh *"} />
      <div
        className={"fjajkjsklajraeweaa"}
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          position: "relative",
          background: "#fff",
          height: 400,
          flexWrap: "wrap",
          borderRadius: 5,
          border: "1px solid #e7e7e7"
          
        }}
      >
        {props?.isChooseImage === true &&
          
          <>
            <>
              {props?.listImage.map((item, key) => (
              <div
                key={key}
                className={"dlakjklajwaasas"}
                style={{
                  width: 150,
                  height: 150,
                  padding: 10,
                  position: "relative",
                }}
              >
                <img
                  src={item.imgPreview}
                  alt="open"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "1px solid #e7e7e7",
                  }}
                />
                <div
                  title={"Xóa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  onClick={() =>
                    props?.setListImage(
                      props?.listImage.filter(
                        (img) => parseInt(img.key) !== parseInt(item.key)
                      )
                    )
                  }
                >
                  <AiFillCloseCircle style={{ color: "#3a3b3c" }} />
                </div>
              </div>
              ))}
              </>
              <>
              {
                props?.listImage?.length < 5 && <div style={{padding: 10}}><Button color={"primary"} style={{height: 130, width: 130, position: "relative"}}>Thêm
                  <input
                    onChange={a}
                    type="file"
                    multiple
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 9,
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                      borderRadius: 5,
                      border: "1px solid #e7e7e7"
                    }}
                  />
                </Button></div>
              }
              </>
          </>
          }

        {props?.isChooseImage === false && (
          <div
            className={"fkdjksjakwjawawas"}
            style={{
              width: 80,
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "absolute",
              background: "#fff",
              cursor: "pointer",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)    ",
            }}
          >
            <div
              className={"fjdadjkwljeakwawa"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <GrAdd style={{ width: 24, height: 24 }} />
            </div>
            <div style={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}>
              Upload
            </div>
            <input
              onChange={f}
              type="file"
              multiple
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                zIndex: 9,
                cursor: "pointer",
                top: 0,
                left: 0,
                borderRadius: 5,
                border: "1px solid #e7e7e7"
              }}
            />
          </div>
        )}
        {/* rule */}
        <div
          className={"djkjaksjkajraeaw"}
          style={{
            position: "absolute",
            bottom: 0,
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            width: "100%",
          }}
        >
          Vui lòng đăng tải 5 hình ảnh
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      >
      </div>
    </div>
  )
}