import React, { useEffect, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import AddRoomForHotel from "../AdminLevel1/AddRoomForHotel";
import "./AdminLevel2.sass";
import DisabledHotel from "./DisabledHotel";
import ListHotel from "../AdminLevel1/ListHotel";
import ManageRoom from "./ManageRoom";
import PendingHotel from "./PendingHotel";
import RegisterHotel from "../AdminLevel1/RegisterHotel";
import RequestBookingRoom from "./RequestBookingRoom";
import VerfiedHotel from "./VerfiedHotel";
import manage_list_hotel from "../../api/admin/manage_list_hotel";
import ListCommentReport from "./ListCommentReport";
import ManageEvent from "./ManageEvent";
import AddNewEvent from "./AddNewEvent";
import { Stats } from "./Stats";
import {AiFillHome} from "react-icons/ai"
import {RiHotelFill} from "react-icons/ri"
import {FaHotel} from "react-icons/fa"
import {MdDisabledByDefault} from "react-icons/md"
import {AiOutlineComment} from "react-icons/ai"
import {BsFillCalendarEventFill} from "react-icons/bs"
import {IoIosStats} from "react-icons/io"
const AdminLevel2 = (props) => {
  return (
    <div className={"sjfkljdkjaskasas"} style={{ width: "100%" }}>
      <div
        className={"sdkljdakldjkas"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Navigation />
        <MainAdminLevel2 />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  return (
    <div
      className={"jaksjakdslkdass"}
      style={{
        background: "#fff",
        minHeight: "100vh",
        width: 300,
        padding: 20,
      }}
    >
      <NavigationHeritage
        text={"Trang chủ"}
        icon={<AiFillHome style={{width: 18, height: 18}} />}
        textLv2={"Thông tin chung"}
        link={"/admin/hotel/manage"}
      />
      <NavigationHeritage
      icon={<RiHotelFill style={{width: 18, height: 18}} />}
        text={"Đã xác thực"}
        link={"/admin/hotel/manage/verified"}
      />
      <NavigationHeritage icon={<FaHotel style={{width: 18, height: 18}} />} text={"Chờ xác thực"} link={"/admin/hotel/manage/pending"} />
      <NavigationHeritage icon={<MdDisabledByDefault style={{width: 18, height: 18}} />} text={"Đã bị vô hiệu hóa"} link={"/admin/hotel/manage/disabled"} />
      <NavigationHeritage icon={<AiOutlineComment style={{width: 18, height: 18}} />} text={"Comment reported"} link={"/admin/reported/comment/manage"} />
      <NavigationHeritage icon={<BsFillCalendarEventFill style={{width: 18, height: 18}} />} text={"Quản lý sự kiện"} link={"/admin/event/manage"} />
      {/* <NavigationHeritage
        textLv1={"Quản lý sự kiện"}
        textLv2={"Thông tin chung"}
        linkLv1={"/admin/event/manage"}
        linkLv2={"/admin/event/new/manage/room"}
      /> */}
      <NavigationHeritage
      icon={<IoIosStats style={{width: 18, height: 18}} />}
        text={"Thống kê"}
        link={"/admin/stats/manage"}
      />
    </div>
  );
};

const MainAdminLevel2 = (props) => {
    const [data, setData]= useState([])
    useEffect(()=> {
      manage_list_hotel(setData)
    }, [])
  return (
    
    <div className={"alksjklrjwkeawsa"} style={{ flex: "1 1 0", borderLeft: "1px solid #e7e7e7", padding: 20, background: "#e4f2fd", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className={"djkcskljcfcaxsa"} style={{width: "100%", borderRadius: 10, background: "#fff", minHeight: "100vh"}}>
        
        <Routes>
          {/* <Route path={"/admin/"} /> */}
          <Route path={"  "} element={<RequestBookingRoom />} />
          <Route path={"/manage/hotel/list"} element={<ListHotel />} />
          <Route path={"/manage/hotel/register"} element={<RegisterHotel />} />
          <Route
            path={"/manage/hotel/:hotelId/new/room"}
            element={<AddRoomForHotel />}
          />
          <Route path={"/manage/room/detail"} element={<ManageRoom />} />
          <Route path={"/hotel/manage/"} element={<Navigate to={"/admin/hotel/manage/verified"} />} />
          <Route path={"/hotel/manage/verified"} element={<VerfiedHotel data={data} setData={setData} />} />
          <Route path={"/hotel/manage/pending"} element={<PendingHotel data={data} setData={setData} />} />
          <Route path={"/hotel/manage/disabled"} element={<DisabledHotel data={data} setData={setData} />} />
          {/*  */}
          <Route path={"/reported/comment/manage"} element={<ListCommentReport />} />
          <Route path={"/event/manage"} element={<ManageEvent />} />
          <Route path={"/event/manage/add/new"} element={<AddNewEvent />} />
          <Route path={"/stats/manage"} element={<Stats />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLevel2;

export const NavigationHeritage = (props) => {
  return (
    <div className={"dlfjskldjksdjesiwawa"} style={{ marginBottom: 8, padding: 10, borderRadius: 10}}>
      <div className={"dsjkjkawjsfseaw"}>
        <NavLink
          to={props.link}
          className={({ isActive }) =>
            isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"
          }
          style={{ color: "#000", textDecoration: "none", fontWeight: 600 }}
        >
          <div className={"lkdjkldjfkldasas"} style={{display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 10}}>
            <div>{props?.icon}</div>
            <div>{props?.text}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
