import React, { useEffect, useState } from 'react'
import DetailPopupRoom from './DetailPopupRoom'
import OutsideClickHandler from 'react-outside-click-handler';
import "./RoomOfHotel.sass"
import detail_room from '../../api/hotel/detail_room';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const RoomOfHotel = (props) => {
  const [openDetail, setOpenDetail]= useState(()=> false)
  return (
    <div className={"dkslklsaklasa"} style={{width: "100%", marginBottom: 20, display: "flex", justifyContent: 'space-between', alignItems: "center", borderRadius: 8, overflow: "hidden", gap: 10}}>
        <Image {...props} />
        <ParametersRoom {...props} setOpen={setOpenDetail} />
        {
            openDetail=== true &&
                <DetailRoom x={openDetail} setX={setOpenDetail} {...props} room_type_id={props?.room_type_id} openDetail={openDetail} setOpenDetail={setOpenDetail} />
        }
    </div>
  )
}

export const AmountAll= (props)=> {
    const navigate= useNavigate()
    const toBookingPage= ()=> {
        navigate("/booking/detail", {state: {data: props?.data, data1: props?.data1, state: true}})
    }

    return (
        <div className={"jdksjkdjksdlas"} style={{padding: "0 40px"}}>
            <div className={"dsjdjhsjdklsjasa"} style={{width: "100%", background:"#fff", padding: 10, borderRadius: 5, border: "1px solid #e7e7e7"}}>
                <div className={"fkjdklsjdskjkasdas"} style={{marginBottom: 12, fontSize: 18}}>
                    <strong>{_.sumBy(props?.bookingRoom, function(e) {return e.count})} phòng đã đặt</strong>
                </div>
                <div className={"fkdjksdjskdjksdrwree"} style={{fontSize: 24}}>
                    VND {<NumericFormat value= {_.sumBy(props?.bookingRoom, function(e) {return e.amount})} thousandSeparator={","} displayType="text" renderText={(value) => <>{value.replaceAll(",", ".")}</>} />}
                </div>
                <br />
                <div className={"djfskjfkdjksdjdas"} style={{marginBottom: 12, textAlign: "center"}}>
                    <Button onClick={toBookingPage} color={"primary"} style={{width: 200}}>Đặt</Button>
                </div>
            </div>
        </div>
    )
}

const Image= (props)=> {
    return (
        <div className={"sjjaksjiwjewawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", background: "#fff", border: "1px solid #e7e7e7"}}>
            <div role={"img"} className={"fkdkjdfkaskaawaw"} style={{width: 250, height: 250, background: "#d9d9d9"}}>
                <div style={{width: "100%", height: "100%", background: "#d9d9d9"}}>
                    <img src={props?.image} alt="" style={{width:" 100%", height: "100%", objectFit: "cover", borderRadius: 5}} />
                </div>
            </div>
        </div>
    )
}

const ParametersRoom= (props)=> {
    return (
        <div className={"fkslkalkrkoawlaw"} style={{flex: 1, padding: 16, backgroundColor: "#fff", minHeight: 250, border: "4px solid #2e89ff", overflow: "hidden"}}>
            <div className={"ksdaskalsklasasa"} style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>
                {props?.type_room_name}
            </div>
            <div className={"dksalsklsjfjassa"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <div className={"djsakdkasjksaksa"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 40}}>
                    <div className={"skafaksdskkasa"}>2 Giường</div>
                    <div className={"fksjkdjskdjskew"}>2 Khách</div>
                </div>
                <div className={"dksakjsaksjkeawwaw"}>Diện tích: <strong>{props?.room_area} m<sup>2</sup></strong></div>
            </div>
            <div className={"djksjkjdkasjieawwaw"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <div className={"sdksaskasklasas fryeauiwyuifdaAS"}>
                    {props?.hotel_properties?.map((item, key)=> <div key={key} className={"jrjawjalwlkeawa fchjshdjksdsdsd"} style={{height: 30, margin: "8px 0"}}>{item?.properties_name}</div>)}
                    <div className={"jrjawjalwlkeawa fchjshdjksdsdsd"} style={{height: 30, margin: "8px 0"}}>Miễn phí bữa sáng</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Wifi miễn phí</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không hút thuốc</div>
                </div>
                <div className={"sdksaskasklasas fryeauiwyuifdaAS"}>
                    {props?.hotel_properties?.map((item, key)=> <div key={key} className={"jrjawjalwlkeawa fchjshdjksdsdsd"} style={{height: 30, margin: "8px 0"}}>{item?.properties_name}</div>)}
                    <div className={"jrjawjalwlkeawa fchjshdjksdsdsd"} style={{height: 30, margin: "8px 0"}}>Không hoàn tiền</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không áp dụng đổi lịch</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Có miễn phí đổi phòng</div>
                </div>
                {/*  */}
                {/*  */}
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa chkhsjfhjkdfhfsd"} style={{direction: "rtl",height: 30, margin: "8px 0"}}><strong><NumericFormat value= {props?.price} thousandSeparator={","} displayType="text" renderText={(value) => <>{value.replaceAll(",", ".")}</>} /></strong> VND</div>
                    <div className={"jrjawjalwlkeawa gfyjetyuiaehgksajdas"} style={{direction: "rtl", height: 30, margin: "8px 0"}}> phòng / đêm</div>
                    <div className={"jrjawjalwlkeawa fsyjetyasdjgashjkas"} style={{direction: "rtl", height: 30, margin: "8px 0"}}>
                        <button onClick={()=> props?.setOpen(true)} className={"cksdsjkasjakeaw"} style={{padding:  "10px 25px", background: "#2e89ff", color: "#fff", borderRadius: 80, fontWeight: 600, fontSize: 20, border: "none", outline: "none", cursor: "pointer"}}>
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DetailRoom= (props)=> {
    const [transition, setTransition]= useState(()=> false)
    const [data, setData]= useState()
    useEffect(()=> {
        const trigger= setTimeout(()=> setTransition(()=> true))
        return ()=> clearTimeout(()=> trigger)
    }, [])
    useEffect(()=> {
        detail_room(props?.room_type_id, setData)
    }, [props?.room_type_id])
    useEffect(()=> {
        document.body.style.overflow= "hidden"
        return ()=> {
            document.body.style.overflow= "auto"
        }
    }, [])


    return (
        <div className={"djasjakljakejaklwwa"} style={{position: "fixed", width: "100%", height: "100%", top: 0, left: 0, background: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", zIndex: 9999, overflow: "auto", "alignItems": "center"}}>
            <OutsideClickHandler onOutsideClick={()=> props?.setOpenDetail(false)}>
                <div className={"dkakawjkajwrwweaw"} style={{opacity: transition=== false ? 0 : 1, transition: "all .25s linear", width: "98%", maxWidth: 1200, background: "#fff", borderRadius: 5, padding: 10}}>
                    <DetailPopupRoom {...data} {...props} setX={props?.setX} x={props?.x} />
                </div>  
            </OutsideClickHandler>
        </div>
    )
}

export default RoomOfHotel