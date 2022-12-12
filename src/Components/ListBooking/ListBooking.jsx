import React from 'react'
import { Navigate, NavLink, Route, Routes, useSearchParams } from 'react-router-dom'
import { TbReportSearch } from "react-icons/tb"
import {RiDeleteBin5Fill } from "react-icons/ri"
import "./ListBooking.sass"
import { useEffect } from 'react'
import history_booking from '../../api/auth/user/history_booking'
import { useState } from 'react'
import delete_hotel from '../../api/auth/user/delete_hotel'
// import Snackbar from '../Snackbar/Snackbar'
import PopupConfirm from '../PopupConfirm/PopupConfirm'
import PopupSnackBar from '../PopupConfirm/PopupSnackBar'
import { Pagination2 } from '../Pagination/Pagination'

const ListBooking = (props) => {
    const [data, setData]= useState([])
    useEffect(()=> {
        history_booking(setData)
    }, [])
    
  return (
    <div className={"list-booking"} style={{width: "100%"}}>
        <div className={"klsdhjklsjasaas"} style={{display: "flex", alignItems: "center", gap: 50, padding: "0 40px", margin: "20px 0"}}>
            <NavLink to={"/booking/order/pending"} style={{textDecoration: "none", color: "#000", fontSize: 20, fontWeight: 600}} className={({isActive})=> isActive ? "sadkljaskjsassa skjldsjdkrujiwoeras": "akjhskeaiorjwes jsdjaslkdjkldswe" }>
                Chờ duyệt 
            </NavLink>
            <NavLink to={"/booking/order/success"} style={{textDecoration: "none", color: "#000", fontSize: 20, fontWeight: 600}} className={({isActive})=> isActive ? "sadkljaskjsassa skjldsjdkrujiwoeras": "akjhskeaiorjwes jsdjaslkdjkldswe" }>
                Đã đặt
            </NavLink>
        </div>
        <Routes>
            <Route path={"/"} element={<Navigate replace={true} to={"/booking/order/pending"} />} />
            <Route path={"/pending"} element={<PendingBooking data={data} setData={setData} />} />
            <Route path={"/success"} element={<SuccessBooking data={data} />} setData={setData} />
        </Routes>
    </div>
  )
}


//

export const IndexComponent= (props)=> {
    return (
        <div className={"sjkdklasjklaska"} style={{padding: "0 40px"}}>
            <Title title={"Danh sách phòng"} />
            <br />
            <div className={"skljdaklsjklasa"} style={{width: "100%"}}>
                <ElementDetail />
            </div>
        </div>
    )
}

const PendingBooking= (props)=> {
    const [page, setPage]= useState(3)
    const [offSet, setOffSet]= useState(1)
    const [currentPage, setCurrentPage]= useState(1)
    const [searchParams, setSearchParams]= useSearchParams()
    return (
        <div className={"sjkdklasjklaska"} style={{padding: "0 40px", minHeight: "100vh"}}>
            <Title title={"Danh sách phòng chờ duyệt"} />
            <br />
            <div className={"skljdaklsjklasa"} style={{width: "100%"}}>
                {
                    props?.data?.filter(item=> item?.bookingStatus === "booking waiting approve")?.slice(parseInt(page) * offSet - page, parseInt(page) * offSet)?.map((item, key)=> <ElementDetail setData={props?.setData} data={props?.data} key={key} {...item} />)
                }
            </div>
            <br />
            <Pagination2 setOffSet={setOffSet} search={searchParams.get("spec")} setSearchParams={setSearchParams} count={Math.ceil(parseInt(props?.data?.filter(item=> item?.bookingStatus === "booking waiting approve")?.length) / page)} activePagination={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

const SuccessBooking= (props)=> {
    // eslint-disable-next-line
    const [page, setPage]= useState(3)
    const [offSet, setOffSet]= useState(1)
    const [currentPage, setCurrentPage]= useState(1)
    const [searchParams, setSearchParams]= useSearchParams()
    return (
        <div className={"sjkdklasjklaska"} style={{padding: "0 40px", minHeight: "100vh"}}>
            <Title title={"Danh sách phòng đã đặt"} />
            <br />
            <div className={"skljdaklsjklasa"} style={{width: "100%"}}>
            {
                props?.data?.filter(item=> item?.bookingStatus === "booking approved")?.slice(parseInt(page) * offSet - page, parseInt(page) * offSet)?.map((item, key)=> <ElementDetail data={props?.data} setData={props?.setData} key={key} {...item} />)
            }
            </div>
            <br />
            <Pagination2 setOffSet={setOffSet} search={searchParams.get("spec")} setSearchParams={setSearchParams} count={Math.ceil(parseInt(props?.data?.filter(item=> item?.bookingStatus === "booking approved")?.length) / page)} activePagination={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

const Title= (props)=> {
    return (
        <div className={"title-order-booking"} style={{fontSize: 20, fontWeight: 700, marginBottom: 20, marginTop: 40}}>
            {props.title}
        </div>
    )
}

const ElementDetail= (props)=> {
    // eslint-disable-next-line
    const [loading, setLoading]= useState(false)
    // eslint-disable-next-line
    const [data, setData]= useState()
    const [open1, setOpen1]= useState(false)
    const [openSnackbar1,setOpenSnackbar1]= useState(false)
    // eslint-disable-next-line
    const [messageSnackbar, setMessageSnackbar]= useState("")
    const [idHotel, setIdHotel]= useState()
    const deleteHotel= (id)=> {
        setOpen1(()=> true)
        setIdHotel(id)
        props?.setData(props?.data?.filter(item=> parseInt(item?.id) !== parseInt(id)))
    }
    // eslint-disable-next-line
    const detailHotel= ()=> {

    }
    return (
        <div className={"fjklsajklsjkalskja"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, marginBottom: 30, background: "#fff", borderRadius: 5, padding: 10}}>
            <div className="skjlajaksjkasaasas" style={{display: "flex", justifyContent: 'center', alignItems: "center"}}> 
                <div className={"aklsjaklsjskldas"} style={{width: 400, height: 250, background: "#fff"}}>
                    <img className={"fjksjdksdjdassdas"} src={props?.image} alt="" style={{width: '100%', height: "100%", objectFit: "cover", borderRadius: 5}} />
                </div>
            </div>
            <div className={"djklsjakljsklasja"} style={{width: "calc(100% - 400px)", height: 250, padding: 10, border: "1px solid #e7e7e7", }}>
                <div className={"dkokaskadassad"} style={{width: "100%", justifyContent: "space-between", alignItems: "center", display: "flex", padding: 10}}>
                    <div className={"dkslaskladasadsk"} style={{fontSize: 16, fontWeight: 600, marginBottom: 4, width: "calc(100% / 3)",textAlign: "center"}}>
                        Miêu tả
                    </div>
                    <div className={"dkslaskladasadsk"} style={{fontSize: 16, fontWeight: 600, marginBottom: 4, width: "calc(100% / 3)",textAlign: "center"}}>
                        Trạng thái
                    </div>
                    <div className={"dkslaskladasadsk"} style={{fontSize: 16, fontWeight: 600, marginBottom: 4, width: "calc(100% / 3)",textAlign: "center"}}>
                        Hành động
                    </div>
                </div>
                <div className={"sdajslkajsklsjdass"} style={{width: "100%", background: "#fff", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: 10}}>
                    <div className={"safdjkdjkldjakssa"} style={{height: "100%", width: "calc(100% / 3)"}}>
                        <div className={"djklsjkasasdas"} style={{fontWeight: 600, marginBottom: 8}}>Tên khách sạn: {props?.hotel_name}</div>
                        <div className={"aklsjkasjkflddsas"} style={{}}>Địa chỉ: {props?.address}</div>
                        <div className={"djklsjkasasdas"} style={{fontWeight: 600, marginBottom: 8, maxHeight: 40, overflow: "auto"}}>
                            {props?.roomBookingHistory?.map((item, key)=> <div key={key}>{item.roomName}</div>)}
                        </div>
                    </div>
                    <div className={'fjlkjsdalksjkslfdas'} style={{fontWeight: 600, fontSize: 18, height: "100%", display: "flex", justifyContent: 'center', alignItems: "center", width: "calc(100% / 3)"}}>
                        {props?.bookingStatus=== "booking waiting approve" && "Chờ duyệt"}
                        {props?.bookingStatus=== "booking approved" && "Đã đặt"}
                    </div>
                    <div className={"djaklsajlksjdklsjdss"} style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 10, width: "calc(100% / 3)"}}>
                        {/* <div title={"Chi tiết"} className={"FJSIDHJASDHAxjdsd"} style={{ height: 40, display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
                            <TbReportSearch style={{width: 40, height: 40, color: "green"}} width={40} height={40} />
                        </div> */}
                        <div onClick={()=> deleteHotel(props?.id)} title={"Xóa"} className={"dsjlksjaklsjkalsjdsa"} style={{width: 40, height: 40, display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
                            <RiDeleteBin5Fill style={{width: 40, height: 40, color: "red"}} width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
            {/* {loading=== true && <Snackbar show={loading} setShow={setLoading} title={"Thông báo"} description={"Đã xóa khách sạn thành công"} />} */}
            {
                open1=== true && <PopupConfirm setOpenSnackbar={setOpenSnackbar1} open={open1} setOpen={setOpen1} title={"Thông báo"} content={"Bạn muốn hủy phòng này ?"} func={()=> delete_hotel(idHotel, setData, setLoading)} setMessageSnackbar={setMessageSnackbar} />
            }
            {
                openSnackbar1=== true && <PopupSnackBar open={openSnackbar1} setOpen={setOpenSnackbar1} alert={"Đã hủy khách sạn thành công"} />
            }
        </div>
    )
}


export default ListBooking