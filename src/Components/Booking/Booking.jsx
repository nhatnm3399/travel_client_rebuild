import React, { useEffect } from 'react'
import { useState } from 'react'
// import { BannerHome } from '../Home/Home'
import "./Booking.sass"
import {BsFillCalendarDateFill} from "react-icons/bs"
import DatePickerPlugin from '../Plugin/DatePicker'
import moment from 'moment'
import OutsideClickHandler from 'react-outside-click-handler'
import { useLocation, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import booking_room_hotel from '../../api/booking/booking_room_hotel'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Button } from 'react-bootstrap'
import { NumericFormat } from 'react-number-format';


const Booking = () => {
  const location= useLocation()
  if(location?.state?.state=== true) {
    return (
      <div className={"fjlkssdsjklasjdas"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={"detail-room-booking-hotel"} style={{width: "100%", maxWidth: 1116}}>
          <Tab1 {...location.state} />
          <Tab2 {...location.state} />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className={"detail-room-booking-hotel"} style={{width: "100%", minHeight: "100vh"}}>
        Có lỗi khi xảy ra 
      </div>
    )
  }
}

export const Tab1= (props)=> {
  return (
    <div className={"tab-1-detail-room-booking-hotel"} style={{marginTop: 20, width: "100%", display: "flex", gap: 20, padding: "0 40px", marginBottom: 30}}>
      <div className={"sejsioeasaw"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className={"jskdjkjhireasa"} role={"img"} style={{width: 400, height: 250, background: "#d9d9d9"}}>
          <img src={props?.data1?.image} alt="Can't open" style={{width: '100%', height: '100%', objectFit: "cover",}} />
        </div>
      </div>
      {/*  */}
      <div className={"jsdkjdkdlhjfas"} style={{}}>
        <div className={"djdklrjioejawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 16}}>
          {props?.data1?.hotel_name}
        </div>
        <div className={"sukfdhkjashas"} style={{marginBottom: 16}}>
        {props?.data1?.address}
        </div>
        <div className={"sukfdhkjashas"} style={{marginBottom: 40}}>
        Số điện thoại: {props?.data1?.phone}
        </div>
      </div>
    </div>
  )
}

const Tab2= (props)=> {
  const navigate= useNavigate()
  const {user }= useContext(AppContext)
  const [checkin, setCheckin]= useState(new Date())
  // eslint-disable-next-line
  const [checkout, setCheckout]= useState(null)
  // const [stay, setStay]= useState(0)
  const [openCalendar, setOpenCalendar]= useState(()=> false)
  // eslint-disable-next-line
  const [data, setData]= useState()

  const [info, setInfo]= useState(()=> ({
    userName: "",
    phoneNumber: "",
    email: "",
    other: ""
  }))
  useEffect(()=> {
    setInfo(prev=> ({...prev, userName: user?.full_name, phoneNumber: user?.phone, email: user?.email}))
  }, [user])

  const booking = async ()=> {
    const a= await booking_room_hotel(moment(checkin).format("DD/MM/YYYY"), moment(checkout).format("DD/MM/YYYY"), (parseInt(_.sumBy(props?.data, function(o) {return o.amount})) * parseInt(moment(checkout).diff(moment(checkin), "days"))), user?.full_name, info.phoneNumber, info.email, Cookies.get("uid"), _.map(props?.data, 'id'), setData)
    console.log(a)
    navigate("/booking/payment", {state: {data: props, booking_id: a, checkin, checkout, info, total_price: (parseInt(_.sumBy(props?.data, function(o) {return o.amount})) * parseInt(moment(checkout).diff(moment(checkin), "days")))}}) 
  }
  return (
    <div className={"tab-2-detail-room-booking-hotel"} style={{width: "100%", display: "flex", justifyContent: 'center', gap: 40, padding: '0 40px'}}>
      <div className={"sldjhlksdjasas"} style={{width: 400, padding: 20, border: "1px solid #000", height: "max-content"}}>
        <div className={"fvjlkjdklsjfdasas"} style={{fontSize: 20, fontWeight: 600, marginBottom: 20}}>
          Thông tin chi tiết đặt phòng
        </div>
        <div className={"jdsijhiorjuhseas"} style={{width: "100%", padding: 10}}>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, position: "relative"}}>
            Ngày vào: {moment(checkin).format("DD/MM/YYYY")} <span title={"Chọn ngày"}><BsFillCalendarDateFill onClick={()=> setOpenCalendar(prev=> !prev)} /></span>
            {
              openCalendar=== true && <div style={{position: "absolute", top: "100%", left: 0, width: "max-content"}}>
                <OutsideClickHandler onOutsideClick={()=> setOpenCalendar(()=> false)}>
                  <DatePickerPlugin setOpen={setOpenCalendar} startDate={checkin} endDate={checkout} setStartDate={setCheckin} setEndDate={setCheckout} />
                </OutsideClickHandler>
              </div>
            }
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Ngày ra: {moment(checkout).format("DD/MM/YYYY")}
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Tổng thời gian lưu trữ: <span className={"dfjhkdjskljdasas "} style={{fontSize: 18}}><strong>{moment(checkout).diff(moment(checkin), "days")}</strong> đêm</span>
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Phòng đã chọn: <div className={"dfjhkdjskljdasas "} style={{fontSize: 18, fontWeight: 600}}>
              {props?.data?.map((item, key)=> <div style={{marginBottom: 8}} key={key}>Loại phòng: {item?.name_hotel} - Số lượng: {item?.count}</div>)}
            </div>
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16}}>
            Tổng giá: <NumericFormat value= {parseInt(_.sumBy(props?.data, function(o) {return o.amount})) * parseInt(moment(checkout).diff(moment(checkin), "days"))} thousandSeparator={","} displayType="text" renderText={(value) => <>{value.replaceAll(",", ".")}</>} /> VND
          </div>
        </div>
      </div>
      {/*  */}
      <div className={"djslksajkjfklasa"} style={{width: "calc(100% - 400px)"}}>
        <div className={"dfjkahduashajksas"} style={{width: "100%"}}>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Họ và tên: </div>
            <input value={info.userName} onChange={(e)=> setInfo(prev=> ({...prev, userName: e.target.value}))} type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10, borderRadius: 80, border: "1px solid #000", outlineColor: "#2e89ff", fontWeight: 600,}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Nhập số điện thoại liên hệ: </div>
            <input value={info.phoneNumber} onChange={(e)=> setInfo(prev=> ({...prev, phoneNumber: e.target.value}))} type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10, borderRadius: 80, border: "1px solid #000", outlineColor: "#2e89ff", fontWeight: 600,}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Nhập địa chỉ email: </div>
            <input value={info.email} onChange={(e)=> setInfo(prev=> ({...prev, email: e.target.value}))} type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10, borderRadius: 80, border: "1px solid #000", outlineColor: "#2e89ff", fontWeight: 600,}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Yêu cầu khác: </div>
            <textarea onChange={(e)=> setInfo(prev=> ({...prev, other : e.target.value}))} type="text" className={"sdjskldjakjask"} rows={40} style={{width: 300, height: 200, background: "#d9d9d9", padding: 10, fontSize: 16, resize: "none", borderRadius: 10, outlineColor: "#2e89ff", fontWeight: 600,}} />
          </div>
          <div className={"fjklsajklsjasas"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems :'center', marginBottom: 40}}>
            <Button onClick={booking} color={"primary"} className={"fjksajsdkass"} style={{width: 200, height: 60, fontWeight: 600}}>
              Đặt ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking