import React, { useEffect, useRef } from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import InputTemplate from '../Common/InputTemplate'
import GoogleMapPlugin from '../Plugin/GoogleMap'
import { Title } from '../Profile/Profile'
import "./DetailHotel.sass"
import {GoLocation}from "react-icons/go"
import RoomOfHotel, { AmountAll } from './RoomOfHotel'
import Feedback from './Feedback'
import AroundHotel from './AroundHotel'
import ConvenientAndInfracstructure from './ConvenientAndInfracstructure'
import GeneralRules from './GeneralRules'
import {  useNavigate, useParams } from 'react-router-dom'
import detail_hotel from '../../api/hotel/detail_hotel'
import { useState } from 'react'
import AddFeedback from './AddFeedback'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

const DetailHotel = (props) => {
  const [bookingRoom, setBookingRoom]= useState([])
  const [change, setChange]= useState(false)
  const {idHotel}= useParams()
  const [data, setData]= useState()
  useEffect(()=> {
    detail_hotel(idHotel, setData)
  }, [idHotel, change])
  const myRef = useRef(null)
   const executeScroll = () => myRef.current.scrollIntoView()    
  return (
    <div className={"fjsdhjkshfjkdhajksas"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={"detail-hotel"} style={{width: "100%", maxWidth: 1116}}>
            <MainHotel data={data} executeScroll={executeScroll} />
            <Tab2 data={data} />
            <br />
            <div className={"daskalsklafass"} style={{width: "100%", padding: "0 40px"}}>
                <div ref={myRef} className={"fjklsdjskjsdksa"} style={{width: "100%", position: "sticky", top: 0, zIndex: 999, background: "#fff", border: "1px solid #e7e7e7", borderRadius: 5, height: 0, marginBottom: 5}}></div>
                {
                    data?.room_types?.map((item, key)=> <RoomOfHotel data1={data} data={bookingRoom} setData={setBookingRoom} setBookingRoom={setBookingRoom} bookingRoom={bookingRoom} key={key} {...item} />)
                }
            </div>
            <AmountAll bookingRoom={bookingRoom} data1={data} data={bookingRoom}/>
            <Feedback feed_back={data?.feed_back} />
            <AddFeedback setChange={setChange} />
            <AroundHotel data1={data} /> 
            <ConvenientAndInfracstructure data={data?.hotel_properties} />
            <br />
            <GeneralRules {...data} />
            {/* {
                bookingRoom?.length > 0 && <StatsRoomBooking data1={data} data={bookingRoom} setData={setBookingRoom} />
            } */}
        </div>
    </div>
  )
}

const MainHotel= (props)=> {
    return (
        <div className={"main-hotel"} style={{width: "100%", display: "flex", gap: 10, marginTop: 20, padding: "0 40px", marginBottom: 20}}>
            <MainDetailHotel1 data={props.data} />
            <MainHotel2 data={props.data} executeScroll={props?.executeScroll} />
        </div>
    )
}


const MainDetailHotel1= (props)=> {
    const [search, setSearch]= useState("")
    const navigate= useNavigate()

    return (
        <div className={"wrap-main-left"} style={{width: 300, height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <div className={"main-left"} style={{width: "100%"}}>
                <div style={{fontSize: 20, fontWeight: 600}}>Tìm</div>
                <div className="wrap-x--w" style={{width: "100%", display: "flex", flexDirection: "column"}}>
                    <div className={"main-left-side-search-result"} style={{padding: 10, background: "#A5B8C6", borderRadius: 5, width: "100%", marginBottom: 6, color: "#fff"}}>
                        <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                            <Title title={"Điểm đến"} />
                            <div className={"wrap-option-main-left-side-search-result"} style={{width: "100%", height: 40, background: "#fff"}}>
                                <InputTemplate onChange={(e)=> setSearch(e.target.value)} className={"inp-wrap-option-main-left-side-search-result"} />
                            </div>
                        </div>
                        {/*  */}
                        {/* <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                            <Title title={"Ngày nhận - trả phòng"} />
                            <div className={"wrap-option-main-left-side-search-result"} style={{width: "100%", height: 40, background: "#fff"}}>
                                <InputTemplate onChange={()=> {}} className={"inp-wrap-option-main-left-side-search-result"} />
                            </div>
                        </div> */}
                        {/*  */}
                        {/* <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                            <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className={"w-guest-left-side-sp"}>Trẻ em</span>
                                <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                                    <InputTemplate type={"number"} onChange={()=> {}} className={"inp-wrap-guest-option-left-side-search-result"} />
                                </div>
                            </div>
                        </div> */}
                        {/*  */}
                        {/* <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                            <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className={"w-guest-left-side-sp"}>Phòng</span>
                                <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                                    <InputTemplate type={"number"} onChange={()=> {}} className={"inp-wrap-guest-option-left-side-search-result"} />
                                </div>
                            </div>
                        </div> */}
                        {/*  */}
                        {/* <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                            <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className={"w-guest-left-side-sp"}>Người lớn</span>
                                <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                                    <InputTemplate type={"number"} onChange={()=> {}} className={"inp-wrap-guest-option-left-side-search-result"} />
                                </div>
                            </div>
                        </div> */}
                        <div className={"wrap-btn-search-booking-again"} style={{width: "100%", height: 40, marginTop: 20}}>
                            <ButtonTemplate onClick={()=> navigate("/booking/search?spec="+ search)} disable={false} className={"c-wrap-btn-search-booking-again"}>Tìm kiếm</ButtonTemplate>
                        </div>
                    </div>
                    <div className={"wrap-detail-map-location"} style={{width: "100%", height: 250}}>
                        <GoogleMapPlugin {...props} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const MainHotel2= (props)=> {
    return (
        <div className={"main-hotel-2"} style={{width: "calc(100% - 300px)"}}>
            <div className={"main-hotel-2-1"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className={"main-hotel-2-1-1"}>
                    <div className={"main-hotel-2-1-1-1"}style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>
                       {props?.data?.hotel_name}
                    </div>
                    <div className={"main-hotel-2-1-1-2"} style={{fontSize: 18}}>
                    <GoLocation style={{width: 18, height: 18}} /> {props?.data?.address}
                    </div>
                </div>
                <div className={"main-hotel-2-1-2"} style={{width: 200, height: 60}}>
                    <ButtonTemplate className={"main-hotel-2-1-2-btn"} onClick={props?.executeScroll}>Đặt ngay</ButtonTemplate>
                </div>
            </div>
            <div className={"main-hotel-2-2"} style={{width: "100%", marginTop: 16, display: "flex"}}>
                <div className={"fjdkldsfjdklfjskldjsa"} style={{padding: 5}}>
                    <div className={"fjkjfkljdjkjbkdssas"} style={{ height: "100%", background: "#fff", width: 400, border: "1px solid #e7e7e7", borderRadius: 5}}>
                        <img src={props?.data?.image} alt="Can't open" style={{objectFit: "cover",width: 400, height: "100%", aspectRatio: 6 / 5}} />
                    </div>
                </div>
                <div className={"main-hotel-2-2-1"} style={{flex: "1 1 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "50%", height: "auto", aspectRatio: 6 / 5, background: "#fff", padding: 5}}>
                        <div className={"dsjdhfjjdkldasas"} style={{width: "100%", height: "100%", background: "#fff", borderRadius: 5, border: "1px solid #e7e7e7"}}>
                            <img src={props?.data?.image1} alt="Can't open" style={{objectFit: "cover",width: "100%", height: "100%"}} />
                        </div>
                    </div>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "50%", height: "auto", aspectRatio: 6 / 5, background: "#fff", padding: 5}}>
                        <div className={"dsjdhfjjdkldasas"} style={{width: "100%", height: "100%", background: "#fff", borderRadius: 5, border: "1px solid #e7e7e7"}}>
                            <img src={props?.data?.image2} alt="Can't open" style={{objectFit: "cover",width: "100%", height: "100%"}} />
                        </div>
                    </div>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "50%", height: "auto", aspectRatio: 6 / 5, background: "#fff", padding: 5}}>
                        <div className={"dsjdhfjjdkldasas"} style={{width: "100%", height: "100%", background: "#fff", border: "1px solid #e7e7e7", borderRadius: 5}}>
                            <img src={props?.data?.image3} alt="Can't open" style={{objectFit: "cover",width: "100%", height: "100%"}} />
                        </div>
                    </div>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "50%", height: "auto", aspectRatio: 6 / 5, background: "#fff", padding: 5}}>
                        <div className={"dsjdhfjjdkldasas"} style={{width: "100%", height: "100%", background: "#fff", border: "1px solid #e7e7e7", borderRadius: 5}}>
                            <img src={props?.data?.image4} alt="Can't open" style={{objectFit: "cover",width: "100%", height: "100%"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tab2= (props)=> {
    return (
        <div className={"tab-2"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20, gap: 20, padding: "0 40px", marginBottom: 20}}>
            <div className="tab-2-ss" style={{width: "100%", display: "flex", justifyContent: "space-between", paddingBottom: 20, borderBottom: "1px solid #d7d7d7"}}>
                <div className={"tab-2-1"} style={{width: "calc(100%)"}}>
                    <div style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Mô tả khách sạn</div>
                    <div className={"fjkldjdkljkdjkasjas"} style={{marginRight: 10}}>{props?.data?.description}</div>
                </div>
                {/* <div className={"tab-2-2"} style={{width: 300, background: "#f2f0f5", padding: 20, display: "flex", flexDirection: "column", justifyContent: 'space-between', gap: 60, boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", overflow: "hidden", borderRadius: 5}}>
                    <div className={"tab-2-2-w-1"}>
                        <div className={"tab-2-2-1"} style={{textAlign: "center", fontSize: 20, fontWeight: 600, marginBottom: 20}}>
                            Địa điểm lý tưởng
                        </div>
                        <div className={"tab-2-2-2"}>
                            <GoLocation color={"#000"} /> Địa điểm hàng đầu. Được khách đánh giá cao (8,1 điểm)
                        </div>
                    </div>
                    <div className={"tab-2-2-w-2"}>
                        <div className={"tab-2-2-w-2-1"} style={{textAlign: "center", fontSize: 18, marginBottom: 20}}>
                            VND 850,000 (1 đêm)
                        </div>
                        <div className={"tab-2-2-w-2-2"} style={{width: "100%", height: 50, }}>
                            <ButtonTemplate className={"tab-2-2-w-2-2-btn"} onClick={()=> {}} disable={false}>Đặt ngay</ButtonTemplate>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export const StatsRoomBooking= (props)=> {
    const navigate= useNavigate()
    const toBookingPage= ()=> {
        navigate("/booking/detail", {state: {data: props?.data, data1: props?.data1, state: true}})
    }

    return (
        <div className={"fkdjkfjhdkdjaskdsfdsa"} style={{width: "100%", padding: 10, position: "fixed", bottom: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999}}>
            <div className={"fjdksjkljfgiujreesawss"} style={{width: "100%", borderRadius: 5, background: "#fff", padding: 5, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <div style={{fontWeight: 600, fontSize: 18, marginBottom: 8, padding: 10}}>Danh sách phòng đã chọn</div>
                <div style={{width: '100%', maxHeight: 200, overflow: "auto"}}>
                    {
                        props?.data?.map((item, key)=> <div key={key} className={"dsksdjkljdskljkfddasa"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: 20}}>
                            <div>
                                <div style={{fontWeight: 600, marginBottom: 8}}>Tên phòng: {item?.name_hotel}</div>
                                <div style={{fontWeight: 600, marginBottom: 8}}>Số lượng: {item?.count}</div>
                                <div style={{fontWeight: 600, marginBottom: 8}}>Tổng tiền: {item?.amount}</div>
                            </div>
                            <div>
                                <Button onClick={()=> props?.setData(props?.data?.filter(item1=> item1?.id?.toString() !== item?.id?.toString()))} color={"secondary"}>Xóa</Button>
                            </div>
                        </div>)
                    }
                    <div className={"dksjklfjkdsas"} style={{width: "100%", direction: "rtl", padding: 20}}>
                        <div>Tổng: <strong>{_.sumBy(props?.data, function(o) {return o.amount})}</strong></div>
                        <br />
                        <div>
                            <Button onClick={toBookingPage}>Đặt</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailHotel