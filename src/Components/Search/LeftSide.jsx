import React, {useState } from 'react'
import InputTemplate from '../Common/InputTemplate'
import MultiRangeSlider from './RangeSlider'
import "./LeftSide.sass"
// import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import { useSearchParams } from 'react-router-dom'
import ReactOutsideClickHandler from 'react-outside-click-handler'
import { BiBed } from 'react-icons/bi'
import SuggestSearch from '../SuggestSearch/SuggestSearch'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
// import moment from 'moment'
// import { BsCalendar3 } from 'react-icons/bs'
// import DatePickerPlugin from '../Plugin/DatePicker'

const LeftSide = (props) => {
  return (
    <div className={"left-side-search-result"} style={{width: 300}}>
        <div className={"title-left-side-search-result"} style={{fontSize: 16, fontWeight: 600, marginBottom: 10, padding: "0 10px"}}>
            Tìm
        </div>
        <MainLeftSide />
        <Rating {...props} />
        <FilterSlide {...props} />
    </div>
  )
}

const MainLeftSide= (props)=> {
    // const [range, setRange]= useState(()=> ({min: 0, max: 1000}))
    const [searchParams ]= useSearchParams()
    const [destination, setDestination]= useState(()=> searchParams.get("spec"))
    const [openDestination, setOpenDestination]= useState(()=> false)
    // const [openTime, setOpenTime]= useState(()=> false)
    // const [startDate, setStartDate]= useState(()=> moment(searchParams.get("ci"), "DD-MM-YYYY").toDate())
    // const [endDate, setEndDate]= useState(()=> moment(searchParams.get("co"), "DD-MM-YYYY").toDate())
    // const [guest, setGuest]= useState(()=> ({
    //     adult: searchParams.get("gs").split(".")[0],
    //     children: searchParams.get("gs").split(".")[1],
    //     room: searchParams.get("r")
    // }))
    return (
        <div className={"main-left-side-search-result"} style={{padding: 10, background: "#A5B8C6", width: "100%", marginBottom: 50, borderRadius: 5}}>
            <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                <Title title={"Điểm đến"} />
                <ReactOutsideClickHandler onOutsideClick={()=> setOpenDestination(()=> false)}>
                    <div className={"wrap-inp-choose-booking-op"} style={{position: "relative"}}>
                        <div className={"wrap-option-main-left-side-search-result"} style={{width: "100%", height: 40, background: "#fff"}}>
                            <InputTemplate value={destination && destination} onChange={e=> setDestination(e.target.value)} style={{padding: "0 32px", fontSize: 18}} className={"inp-choose-booking-op-ii inp-wrap-option-main-left-side-search-result"} onClick={()=> setOpenDestination(prev=> !prev)} />
                        </div>
                        {/* <InputTemplate value={destination && destination} onChange={e=> setDestination(e.target.value)} style={{padding: "0 32px", fontSize: 18}} className={"inp-choose-booking-op-ii"} onClick={()=> setOpenDestination(prev=> !prev)} /> */}
                        <div className={"dkskalkasass"} style={{position: "absolute", top: 0, left: 0, height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <BiBed style={{width: 22, height: 22, color: "#333"}} />
                        </div>
                        <div className={"dsklasklasksasa"} style={{position: "absolute", top: "100%", left: 0, width: "100%", display: openDestination=== true ? "block" : "none"}}>
                        {
                            <SuggestSearch setOpen={setOpenDestination} setValue={setDestination} />
                        }
                        </div>
                    </div>
                </ReactOutsideClickHandler>
            </div>
            {/*  */}
            {/* <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                <Title title={"Ngày nhận - trả phòng"} />
                <ReactOutsideClickHandler onOutsideClick={()=> setOpenTime(()=> false)}>
                    <div className={"wrap-inp-choose-booking-op"} style={{position: "relative"}}>
                        <div className={"wrap-option-main-left-side-search-result"} style={{width: "100%", height: 40, background: "#fff"}}>
                            <InputTemplate  value={`${startDate && moment(startDate).format("ddd[, ]MMM[ ]D")} - ${endDate ? moment(endDate).format("ddd[, ]MMM[ ]D") : "Check out"}`} readOnly={true} style={{padding: "0 32px", fontSize: 18}} onClick={()=> setOpenTime((prev)=> !prev)} className={"inp-choose-booking-op-ii inp-wrap-option-main-left-side-search-result"} />
                        </div>
                        <div className={"dkskalkasass"} style={{position: "absolute", top: 0, left: 0, height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <BsCalendar3 style={{width: 22, height: 22, color: "#333  ", }} />
                        </div>
                        <div className={"dsklasklasksasa"} style={{position: "absolute", top: "100%", left: 0, width: "max-content", display: openTime=== true ? "block" : "none"}}>
                        {
                            <DatePickerPlugin setOpen={setOpenTime} startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                        }
                        </div>
                    </div>
                </ReactOutsideClickHandler>
            </div> */}
            {/*  */}
            
            {/* <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                    <span className={"w-guest-left-side-sp"}>Người lớn</span>
                    <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                        <InputTemplate style={{display: "flex", justifyContent: 'center', alignItems: "center", textAlign: "center"}} value={guest.adult} type={"number"} onChange={(e)=> setGuest(prev=> ({...prev, adult: parseInt(e.target.value)}))} className={"inp-wrap-guest-option-left-side-search-result"} />
                    </div>
                </div>
            </div> */}
            {/*  */}
            {/* <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                    <span className={"w-guest-left-side-sp"}>Trẻ em</span>
                    <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                        <InputTemplate style={{display: "flex", justifyContent: 'center', alignItems: "center", textAlign: "center"}} value={guest.children} type={"number"} onChange={(e)=> setGuest(prev=> ({...prev, children: parseInt(e.target.value)}))} className={"inp-wrap-guest-option-left-side-search-result"} />
                    </div>
                </div>
            </div> */}
            {/*  */}
            {/* <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                    <span className={"w-guest-left-side-sp"}>Phòng</span>
                    <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                        <InputTemplate style={{display: "flex", justifyContent: 'center', alignItems: "center", textAlign: "center"}} value={guest.room} type={"number"} onChange={(e)=> setGuest(prev=> ({...prev, room: parseInt(e.target.value)}))} className={"inp-wrap-guest-option-left-side-search-result"} />
                    </div>
                </div>
            </div> */}
            <div className={"wrap-btn-search-booking-again"} style={{width: "100%", height: 40, marginTop: 20, background: "#2e89ff", color:"#fff"}}>
                <ButtonTemplate disable={false} className={"c-wrap-btn-search-booking-again"}>Tìm kiếm</ButtonTemplate>
            </div>
        </div>
    )
}

const Title= (props)=> {
    return (
        <div className={"title-main-left-side-search-result"} style={{fontSize: 16, marginBottom: 16, color: "#fff", fontWeight: 600}}>
            {props.title}
        </div>
    )
}

const Rating= (props)=> {
    return (
        <div className={"rating-booking-hotel"} style={{width: "100%", padding: 10, background: "#A5B8C6", borderRadius: 5}}>
            <Title title={"Xếp hạng theo sao"} />
            <div className={"rating-booking-hotel-star-1 rating-booking-hotel-star"} style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
                <div className={"wrap-inp-rating-booking-hotel-star-1"} style={{width: 24, height: 24}}>
                    <InputTemplate onChange={()=> {}} value={1} type={"checkbox"} className={"inp-rating-booking-hotel-star-1"} />
                </div>
                <div className={"rating-booking-hotel-star-d"} style={{fontSize: 16, color: "#fff"}}>
                    1 sao
                </div>
            </div>
            {/*  */}
            <div className={"rating-booking-hotel-star-1 rating-booking-hotel-star"} style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
                <div className={"wrap-inp-rating-booking-hotel-star-1"} style={{width: 24, height: 24}}>
                    <InputTemplate onChange={()=> {}} value={1} type={"checkbox"} className={"inp-rating-booking-hotel-star-1"} />
                </div>
                <div className={"rating-booking-hotel-star-d"} style={{fontSize: 16, color: "#fff"}}>
                    2 sao
                </div>
            </div>
            {/*  */}
            <div className={"rating-booking-hotel-star-1 rating-booking-hotel-star"} style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
                <div className={"wrap-inp-rating-booking-hotel-star-1"} style={{width: 24, height: 24}}>
                    <InputTemplate onChange={()=> {}} value={1} type={"checkbox"} className={"inp-rating-booking-hotel-star-1"} />
                </div>
                <div className={"rating-booking-hotel-star-d"} style={{fontSize: 16, color: "#fff"}}>
                    3 sao
                </div>
            </div>
            {/*  */}
            <div className={"rating-booking-hotel-star-1 rating-booking-hotel-star"} style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
                <div className={"wrap-inp-rating-booking-hotel-star-1"} style={{width: 24, height: 24}}>
                    <InputTemplate onChange={()=> {}} value={1} type={"checkbox"} className={"inp-rating-booking-hotel-star-1"} />
                </div>
                <div className={"rating-booking-hotel-star-d"} style={{fontSize: 16, color: "#fff"}}>
                    4 sao
                </div>
            </div>
            {/*  */}
            <div className={"rating-booking-hotel-star-1 rating-booking-hotel-star"} style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
                <div className={"wrap-inp-rating-booking-hotel-star-1"} style={{width: 24, height: 24}}>
                    <InputTemplate onChange={()=> {}} value={1} type={"checkbox"} className={"inp-rating-booking-hotel-star-1"} />
                </div>
                <div className={"rating-booking-hotel-star-d"} style={{fontSize: 16, color: "#fff"}}>
                    5 sao
                </div>
            </div>
            {/*  */}
        </div>
    )
}

const FilterSlide= (props)=> {
    return (
        <div className={"djskjskkjdksfjkdss"} style={{width: "100%", marginTop: 20, background: "#A5B8C6", borderRadius: 5}}>
            <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20, padding: "10px 10px 20px 10px"}}>
                <Title title={"Lựa chọn"} />
                <MultiRangeSlider onChange={({ min, max }) => {
                    props?.setMinValue(min)
                    props?.setMaxValue(max)
                }} min={0} max={5000000} />
            </div>
        </div>
    )
}

export default LeftSide