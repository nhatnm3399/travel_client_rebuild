import React, { useEffect, useState } from "react";
import { Title } from "../AdminLevel1/ListHotel";
import { AiOutlineClose } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import get_list_hotel from "../../api/manage/get_list_hotel";
import get_list_request_by_id_hotel from "../../api/manage/get_list_request_by_id_hotel";
import approve_hotel from "../../api/admin/approve_hotel";
// import Snackbar from "../Snackbar/Snackbar";
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import PopupSnackBar from "../PopupConfirm/PopupSnackBar";
import reject_hotel from "../../api/manage/reject_hotel";
import { useSearchParams } from "react-router-dom";
import { Pagination2 } from "../Pagination/Pagination";

const RequestBookingRoom = (props) => {
  const [data, setData]= useState([])
  const [idHotel, setIdHotel]= useState()
  useEffect(()=> {
    get_list_hotel(setData)
  }, [])
  return (
    <div className={"dkaksjakjekeawa"}>
      <Title is_search_by_id_hotel={true} data={data} idHotel={idHotel} setIdHotel={setIdHotel} title={"Yêu cầu đặt phòng"} />
      <ListRequest idHotel={idHotel} />
    </div>
  );
};

const ListRequest = (props) => {
  const [data, setData]= useState([])
  // eslint-disable-next-line
  const [result, setResult]= useState()
  // eslint-disable-next-line
  const [loading, setLoading]= useState(false)
  const [openConfirm, setOpenConfirm]= useState(false)
  const [openConfirm2, setOpenConfirm2]= useState(false)
  const [openSnackbar, setOpenSnackbar]= useState(false)
  // const [openSnackbar2, setOpenSnackbar2]= useState(false)
  const [messageSnackbar, setMessageSnackbar]= useState("")

  const [bookingId, setBookingId]= useState("")
  useEffect(()=> {
    if(props?.idHotel) {
      get_list_request_by_id_hotel(props?.idHotel, setData)
    }
  }, [props?.idHotel])
  const approveBooking= (bookingId)=> {
    setBookingId(bookingId)
    setOpenConfirm(true)
    
   
  }
  const rejectBooking= (bookingId)=> {
    setBookingId(bookingId)
    setOpenConfirm2(true)
  }
  const approveBookingPopup= ()=> {
    approve_hotel(bookingId, setResult, setLoading)
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(bookingId)))
  }
  const rejectBookingPopup= ()=> {
    reject_hotel(bookingId, setResult)
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(bookingId)))

  }
  // eslint-disable-next-line
  const [page, setPage]= useState(5)
  const [offSet, setOffSet]= useState(1)
  const [currentPage, setCurrentPage]= useState(1)
  const [searchParams, setSearchParams]= useSearchParams()
  if(data?.length > 0) {

    return (
      <div
        className={"dkaajkrjaerwlwa"}
        style={{ width: "100%", marginTop: 20, padding: 20 }}
      >
        <table
          className={"fjskljkrlejrkleaw"}
          style={{ width: "100%" , overflowX: "auto"}}
          cellSpacing={20}
        >
          <thead className={"dksjakjdksawkaww"} style={{ width: "100%" }}>
            <tr className={"jakwjkjeaklwwa"}>
              <th style={{ fontWeight: 600 }}>Tên khách hàng</th>
              <th style={{ fontWeight: 600 }}>Số điện thoại</th>
              <th style={{ fontWeight: 600 }}>Loại phòng</th>
              <th style={{ fontWeight: 600 }}>Hình thức thanh toán</th>
              <th style={{ fontWeight: 600 }}>Trạng thái</th>
              <th style={{ fontWeight: 600 }}>Check in</th>
              <th style={{ fontWeight: 600 }}>Check out</th>
              <th style={{ fontWeight: 600 }}>Hành động</th>
            </tr>
          </thead>
          <tbody className={"fkkejkjaiwjwawwawa"} style={{ width: "100%" }}>
            {
              data?.slice(parseInt(page) * offSet -5, parseInt(page) * offSet)?.map((item, key)=> <tr key={key} className={"jkajksljeklaresas"}>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>{item?.user_booking}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>0{item?.phone}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>{item?.room_name}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>{item?.payment_method || "Chưa thanh toán"}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>{item?.booking_status=== "booking waiting approve" && "Chờ thanh toán"}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>{item?.check_in}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>{item?.check_out}</td>
              <td style={{ textAlign: "center" , whiteSpace: "nowrap", height: 100}}>
                <div
                  className={"djskjaksjkafaawe"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <button
                    onClick={()=> approveBooking(item?.id)}
                    title={"Chấp nhận"}
                    className={"fjakajkwawawwawa fskjdhushdjkasdas"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      border: "none",
                      outline: "none",
                      borderRadius: "50%",
                      width: 40, height: 40,

                    }}
                  >
                    <GoVerified
                      style={{ minWidth: 20, height: 20, color: "#01b853" }}
                    />
                  </button>
                  <button
                    onClick={()=> rejectBooking(item?.id)}
                    title={"Từ chối"}
                    className={"fjakajkwawawwawa"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      border: "none",
                      outline: "none",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      width: 40, height: 40,
                    }}
                  >
                    <AiOutlineClose
                      style={{ minWidth: 20, height: 20, color: "red" }}
                    />
                  </button>
                </div>
              </td>
            </tr>)
            }
          </tbody>
        </table>
        <br />
        <Pagination2 setOffSet={setOffSet} search={searchParams.get("spec")} setSearchParams={setSearchParams} count={Math.ceil(parseInt(data?.length) / 5)} activePagination={currentPage} setCurrentPage={setCurrentPage} />
        {
          openConfirm=== true && <PopupConfirm messageSnackbar={"Đã chấp nhận booking"} bookingId={bookingId} setMessageSnackbar={setMessageSnackbar} setOpenSnackbar={setOpenSnackbar} func={()=> approveBookingPopup()} open={openConfirm} setOpen={setOpenConfirm} title={"Thông báo"} content={"Bạn xác nhận chấp nhận yêu cầu này ?"} />
        }
        {
          openConfirm2=== true && <PopupConfirm messageSnackbar={"Đã hủy booking thành công"} bookingId={bookingId} setMessageSnackbar={setMessageSnackbar} setOpenSnackbar={setOpenSnackbar} func={()=> rejectBookingPopup()} open={openConfirm2} setOpen={setOpenConfirm2} title={"Thông báo"} content={"Bạn xác nhận sẽ từ chối yên cầu này ?"} />
        }
        {
          openSnackbar=== true && <PopupSnackBar open={openSnackbar} setOpen={setOpenSnackbar} alert={messageSnackbar} />
        } 
      </div>
    );
  }
  else {
    return (
        <div style={{textAlign: "center", fontWeight :600, fontSize: 20}}>Không có yêu cầu đặt phòng !</div>
    )
}
};

export default RequestBookingRoom;
