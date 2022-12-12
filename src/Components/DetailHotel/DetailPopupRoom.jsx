import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Tab2 } from '../DetailSubRoom/DetailSubRoom'

const DetailPopupRoom = (props) => {
  const [show, setShow] = useState(false);
  const [numberRoom, setNumberRoom]= useState()
  const handleClose = async () => {
    props?.setOpenDetail(()=> false)
    await props?.setX(()=> false)
    props?.setBookingRoom(prev=> [...prev, {id: props?.room_type_id, count: numberRoom, amount: parseInt(numberRoom) * parseInt(props?.price), name_hotel: props?.type_room_name}])
  };
  const handleShow = () => setShow(true);

  return (
    <div className={"djksajksljriajeijeawaw"} style={{width: "100%"}}>
      <div className={"fnljdksjfkddas"} style={{marginBottom: 12, padding: "0 40px", fontSize: 24, fontWeight: 600}}>{props?.properties_type}</div>
        <div className={"djksjaksjasklaww"} style={{width: "100%"}}>
          <Tab2 {...props} />
          <div className="dfjsfhjfjdkjgfkdgda flexCenterItem">
            <Button onClick={handleShow} variant={"primary"}>Đặt phòng này</Button>
          </div>
          { show=== true &&
            <div className={"dfksfgjdlkgjkdjadsas flexCenterItem"} style={{width: "100%", height: "100%", position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0,0.3)", zIndex: 10000}}>
              <div className={"fskfjdkjksdjksdassa"} style={{maxWidth: 400, borderRadius: 5, background: "#fff", padding: 10, width: "100%"}}>
                <Modal.Header>
                  <Modal.Title>Đặt phòng</Modal.Title>
                </Modal.Header>
                <Modal.Body>Nhập số lượng phòng cần đặt</Modal.Body>
                <br />
                <div>
                  <input style={{width: "100%"}} onChange={(e)=> setNumberRoom(parseInt(e.target.value))} type="text" placeholder={"Nhập số lượng phòng cần đặt"} />
                </div>
                <br />
                <Modal.Footer className={"flexCenterItem"} style={{gap: 10}}>
                  <Button variant="secondary" onClick={handleClose}>
                    Đóng
                  </Button>
                  <Button variant="primary" onClick={()=> {handleClose(); props?.setX(false)}}>
                    Xác nhận
                  </Button>
                </Modal.Footer>
              </div>
            </div>
          }
        </div>
    </div>
  )
}

export default DetailPopupRoom