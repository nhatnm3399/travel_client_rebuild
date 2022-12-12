import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsPower}from "react-icons/bs"
import "./Header.sass"
import { useContext } from 'react'
import { AppContext } from '../../App'
import logout from '../../api/auth/user/logout'
import Cookies from 'js-cookie'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = (prosp) => {
  const {auth}= useContext(AppContext)
  return (
    <>
        <div className={"fixed-header-main"}>
            <LeftHeader />
            {
                auth=== true && <RightHeaderLoggedIn />
            }
            {
                auth=== false && <RightHeaderNotLoggedIn />
            }
        </div>
        <div className={"header-main"}>
            
        </div>
    </>
  )
}

export default Header

const LeftHeader= (props)=> {
    const {user}= useContext(AppContext)

    return (
        <div className={"left-header-fixed"}>
            <NavLink className={({isActive})=> isActive ? "active-link-header link-left-header-fixed" : "link-left-header-fixed"} to={"/"} style={{fontSize: 32}}>F Travel</NavLink>&nbsp;&nbsp;&nbsp;
            {
                user?.role?.[0]=== "ROLE_MODERATOR" &&
            <NavLink className={({isActive})=> isActive ? "active-link-header link-left-header-fixed" : "link-left-header-fixed"} to={"/manage"}>Chủ khách sạn</NavLink>
            }   
        </div>
    )
}

const RightHeaderLoggedIn= (props)=> {
    const {user }= useContext(AppContext)
    const [open, setOpen]= useState(()=> false)
    return (
        <div className={"right-header-fixed-logged"}>
            <div className={"dljsjaklsjkldfasa"} style={{display :"flex", justifyContent: 'center', alignItems: 'center', gap: 20}}>
                {   
                        <div className={"shdkhajksdhjasassa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                            <div className={"jklsdjaklsjkalsasf"} style={{display: "flex", justifyContent: 'center', alignItems: "center", width :40, height: 40, borderRadius: "50%", overflow: "hidden"}}>
                                {
                                    user?.avatar?.length > 0 &&<img src={user?.avatar} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                }
                                {
                                    user?.avatar=== null && <div className={"flexCenterItem"}>
                                        <img src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                    </div>
                                }
                            </div>
                            <div className={"njkshajksjlkasasas"} style={{fontWeight: 600, position: 'relative'}}>
                                <div onClick={()=> setOpen(prev=> !prev)} className={"fjdfjkdgjkdsdass"} style={{fontWeight: 600, cursor: "pointer"}}>
                                    {user?.full_name ? user?.full_name : "Unset"}
                                </div>
                                {
                                    open=== true &&
                                    <OutsideClickHandler onOutsideClick={()=> setOpen(false)}>
                                        <div className={"fjdkfjkdjgfkdsasasas boxShadowHightlight"} style={{position: "absolute", top: "100%", right: 0, borderRadius: 5, background: "#fff", zIndex: 32, padding: 10, marginTop: 20}}>
                                            <Link onClick={()=> setOpen(false)} to={"/booking/order"} className={"jklasjkalsjadas"} style={{textDecoration: "none", color: "#000", fontSize: 16}}>
                                                <div className={"fkfjkjkdasasasdsas"} style={{width: "max-content", height: 36, display: "flex", alignItems: "center", cursor: "pointer"}}>Lịch sử đặt phòng</div>
                                            </Link>   
                                            <Link onClick={()=> setOpen(false)} to={"/bill/payment/booking"} className={"jklasjkalsjadas"} style={{textDecoration: "none", color: "#000", fontSize: 16}}>
                                                <div className={"fkfjkjkdasasasdsas"} style={{width: "max-content", height: 36, display: "flex", alignItems: "center", cursor: "pointer"}}>Lịch sử thanh toán</div>
                                            </Link>
                                            <Link onClick={()=> setOpen(false)} to={"/user/profile/"+Cookies.get("uid")} className={"jklasjkalsjadas"} style={{textDecoration: "none", color: "#000", fontSize: 16}}>
                                                <div className={"fkfjkjkdasasasdsas"} style={{width: "max-content", height: 36, display: "flex", alignItems: "center", cursor: "pointer"}}>Hồ sơ</div>
                                            </Link>
                                            <div onClick={logout} className={"fkfjkjkdasasasdsas"} style={{width: "max-content", height: 36, display: "flex", alignItems: "center", cursor: "pointer"}}>Đăng xuất</div>
                                        </div>
                                    </OutsideClickHandler>
                                }
                            </div>
                        </div>
                } 
                {
                    // Logout
                    <div className={"dljksjakjskladjassasas"} style={{display: "flex", justifyContent: 'center',alignItems: "center", gap: 5, cursor: "pointer"}}>
                        <div className={"sjdklasjksjadfsas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                            <BsPower style={{width: 16,height: 16,color :"#333"}} />
                        </div>
                        <div onClick={logout} className={"djksdjalksdjkfsads"} style={{fontSize: 14, fontWeight: 600}}>
                            Logout
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const RightHeaderNotLoggedIn= (props)=> {
    return (
        <div className={"right-header-fixed-not-logged"}>
            <div className={"wrap-link-to-auth-user"}>
                <NavLink to={"/signup"} className={({isActive})=> isActive ? "active-link-header to-signup-auth-user navigate-to-auth-user" : "to-signup-auth-user navigate-to-auth-user"}>Đăng ký</NavLink>
            </div>
            <div className={"wrap-link-to-auth-user"}>
                <NavLink to={"/login"} className={({isActive})=> isActive ? "active-link-header to-login-auth-user navigate-to-auth-user" : "to-login-auth-user navigate-to-auth-user"}>Đăng nhập</NavLink>
            </div>
        </div>
    )
}