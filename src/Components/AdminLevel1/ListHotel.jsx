import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import delete_hotel from '../../api/admin/delete_hotel'
import get_list_hotel from '../../api/manage/get_list_hotel'
import { Pagination2 } from '../Pagination/Pagination'
import PopupConfirm from '../PopupConfirm/PopupConfirm'
import PopupSnackBar from '../PopupConfirm/PopupSnackBar'
// import Snackbar from '../Snackbar/Snackbar'
import "./ListHotel.sass"

const ListHotel = (props) => {
  const [data, setData]= useState([])
  useEffect(()=> {
    get_list_hotel(setData)
  }, [])
  return (
    <div className={"hjfjhdkjlajsaksa"}>
        <Title title={"Danh sách khách sạn của bạn"} is_add_new_hotel={true} />
        <Main data={data} setData={setData} />
    </div>
  )
}

export const Title= (props)=> {
    const navigate= useNavigate()

    return (
        <div className={"aksdkjasksalasas"} style={{width: "100%", padding: "20px", borderBottom: "1px solid #e7e7e7", marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
            <div className={"fkdjfkljhklsdjkasas"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
                <NavLink className={({ isActive }) => isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} to={props?.is_edit=== true ? "/manage/hotel/edit" : "/manage/hotel/add-new"} style={{fontSize: 20, fontWeight: 600,textDecoration: "none"}}>
                    {props.title}
                </NavLink>
                {props?.title1 && <NavLink className={({ isActive }) => isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} to={props?.is_edit=== true ? "/manage/hotel/manage/edit/room" : "/manage/hotel/add/new/room"} style={{fontSize: 20, fontWeight: 600,textDecoration: "none"}}>
                    {props.title1}
                </NavLink>}
            </div>
            {
                props.is_add_new_hotel=== true &&
                <div className={"snkdljkasksalsalas"}>
                    <Button color={"primary"} onClick={()=> navigate("/manage/hotel/add-new")} >
                        Thêm mới khách sạn
                    </Button>
                </div>
            }
            {
                props.is_search_by_id_hotel=== true && 
                <div className={"fjsdkjkjdksassa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                    <div>Tìm theo tên khách sạn</div>
                    <div>
                        <select onChange={(e)=> props?.setIdHotel(e.target.value)} value={props?.idHotel || ""} name="" id="">
                            {
                                props?.data?.map((item, key)=> <option key={key} value={item.id}>{item?.title}</option>)
                            }
                        </select>
                    </div>
                </div>
            }
        </div>
    )
}

const Main= (props)=> {
    // eslint-disable-next-line
    const [loading, setLoading]= useState(false)
  // eslint-disable-next-line
    const [data, setData]= useState()
    const navigate= useNavigate()
    const edit_hotel= (id)=> {
        navigate("/manage/hotel/edit?idHotel="+ id, {state: {is_edit: true, idHotel: id}})
    }
    const deleteHotel= (id)=> {
        delete_hotel(id, setData, setLoading)
        props?.setData(props?.data?.filter(item=> parseInt(item?.id) !== parseInt(id)))
    }
    const [openConfirm, setOpenConfirm]= useState(false)
    const [openConfirm2, setOpenConfirm2]= useState(false)
    const [openSnackbar, setOpenSnackbar]= useState(false)
    // const [openSnackbar2, setOpenSnackbar2]= useState(false)
    const [messageSnackbar, setMessageSnackbar]= useState("")
    const approveBooking= (bookingId)=> {
        setBookingId(bookingId)
        setOpenConfirm(true)
       
      }
      const rejectBooking= (bookingId)=> {
        setBookingId(bookingId)
        setOpenConfirm2(true)
      }
    const [bookingId, setBookingId]= useState("")
    const [page, setPage]= useState(5)
    const [offSet, setOffSet]= useState(1)
    const [currentPage, setCurrentPage]= useState(1)
    const [searchParams, setSearchParams]= useSearchParams()

    if(props?.data?.length > 0) {

        return (
                <div className={"fdjakjsaklejawawaw"} style={{width: "100%", padding: 10}}>
                    <table className={"fkjkajkawawaww"} style={{width: "100%"}} cellSpacing={20}>
                        <thead className={"fjjaklsjkafjakljedas"} style={{width: '100%', borderBottom: "1px solid #e7e7e7"}}>
                            <tr className={"fkdjkasjkasjkledaw"}>
                                <th style={{marginLeft: 50, textAlign: "left"}}>Tên khách sạn</th>
                                <th>Địa chỉ</th>
                                <th style={{textAlign: "right"}}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody className={"fkasajskajskawjakwaw"} style={{width: "100%"}}>
                            {
                                props?.data?.slice(parseInt(page) * offSet -5, parseInt(page) * offSet)?.map((item ,key)=> <tr key={key} className={"djjaklwjrkjlekawwa"}>
                                <td style={{marginLeft: 50, textAlign: "left"}}>{item?.title}</td>
                                <td>{item?.address}</td>
                                <td style={{textAlign: "right"}}>
                                    <div style={{display: "flex", justifyContent: 'end', alignItems: "center", gap: 10}}>
                                        <button onClick={()=> approveBooking(item?.id)} className={"fjkjsaksjakwaww"} style={{padding: "5px 10px", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", backgroundColor: "#2DB83B", borderRadius: 5}}>
                                            Chỉnh sửa
                                        </button>
                                        <button onClick={()=> rejectBooking(item.id)} className={"fjkjsaksjakwaww"} style={{padding: "5px 10px", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", backgroundColor: "#E0111D", borderRadius: 5}}>
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                    <br />
                    <Pagination2 setOffSet={setOffSet} search={searchParams.get("spec")} setSearchParams={setSearchParams} count={Math.ceil(parseInt(props?.data?.length) / 5)} activePagination={currentPage} setCurrentPage={setCurrentPage} />
                    {/* {loading=== true && <Snackbar show={loading} setShow={setLoading} title={"Thông báo"} description={"Xóa khách sạn thành công !"}/>} */}
                    {
                        openConfirm=== true && <PopupConfirm bookingId={bookingId} setMessageSnackbar={setMessageSnackbar} setOpenSnackbar={setOpenSnackbar} func={()=> edit_hotel(bookingId, setLoading)} open={openConfirm} setOpen={setOpenConfirm} title={"Thông báo"} messageSnackbar={""} content={"Bạn có muốn chỉnh sửa khách sạn này ?"} />
                    }
                    {
                        openConfirm2=== true && <PopupConfirm bookingId={bookingId} setMessageSnackbar={setMessageSnackbar} setOpenSnackbar={setOpenSnackbar} func={()=> deleteHotel(bookingId)} open={openConfirm2} setOpen={setOpenConfirm2} title={"Thông báo"} messageSnackbar={"Đã xóa khách sạn thành công"} content={"Bạn có muốn xóa khách sạn này ?"} />
                    }
                    {
                        openSnackbar=== true && <PopupSnackBar open={openSnackbar} setOpen={setOpenSnackbar} alert={messageSnackbar} />
                    } 
                </div>
        )
    }
    else {
        return (
            <div style={{textAlign: "center", fontWeight :600, fontSize: 20}}>Bạn không có khách sạn nào !</div>
        )
    }
}

export default ListHotel