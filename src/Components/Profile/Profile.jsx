import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import Background from '../Background/Background';
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate';
import InputTemplate from '../Common/InputTemplate';
import "./Profile.sass"
import validUrl from "valid-url"
import {HiLocationMarker} from "react-icons/hi"
import {AiOutlinePhone} from "react-icons/ai"
import {FaBirthdayCake} from "react-icons/fa"
import {RiImageAddLine} from "react-icons/ri"
import { Button } from 'react-bootstrap';
import { uploadImageClient } from '../../firebase/config';
import update_info_user from '../../api/auth/user/update_info_user';
import {FaUserAlt, FaAddressBook} from "react-icons/fa"
import {AiFillPhone} from "react-icons/ai"
import PopupConfirm2 from '../PopupConfirm/PopupConfirm2';
const Profile = (props) => {
  const {user, setChange}= useContext(AppContext)
  const [username, setUsername]= useState(()=> "")
  const [phoneNumber, setPhoneNumber]= useState()
  const [birthday, setBirthday]= useState()
  const [address, setAddress]= useState()
  // eslint-disable-next-line
  const [result, setResult]= useState([])
  const [updateCheck, setUpdateCheck]= useState(false)
  useEffect(()=> {
    setUsername(user?.full_name)
    setPhoneNumber(user?.phone)
    setBirthday(user?.birthday)
    setAddress(user?.address)
  }, [user])
  const [img, setImg]= useState()
  const isChooseImg= img ? true : false
  const handleImg= (e)=> {
    setImg({img: e.target.files[0], preview: URL.createObjectURL(e.target.files[0]), key: e.target.files[0]?.lastModified})
  }

  const updateInfoUser= async ()=> {
    const imgUrl= await uploadImageClient(img.img, setResult)
    update_info_user(username, phoneNumber, address, birthday, imgUrl, setResult)
    setUpdateCheck(()=> true)
    setOpenConfirm(true)
    setChange(prev=> !prev)
  }
  const navigate= useNavigate()
  const [openConfirm, setOpenConfirm]= useState(false)
  return (
    <>
        <div className={"profile-user-site"} style={{width: "100%", display: "flex", justifyContent:" center", alignItems:" center"}}>
        <div className={"c-profile-user-site"} style={{width: "100%", maxWidth: 1200, margin: "20px 0", display: "flex", justifyContent: "space-between", gap: 16}}>
            <div className="fjkldsjkasjkasjdas" style={{marginRight: 16, display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column"}}> 
                <div className={"dsjkdajdjaklsjakdas"} style={{width: 350, padding: "60px 10px", borderRadius: 5, backgroundColor: "#A5B8C6", height: "100%", color: "#000"}}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={validUrl.isUri(user?.avatar) ? user?.avatar : "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"} alt="" style={{width: 60, height: 60, borderRadius: "50%", objectFit: "cover"}} />
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginBottom: 8, justifyContent: "center", fontWeight: 600}}>
                        {user?.full_name || "Unset"}
                    </div>
                    <br />
                    <div style={{display: "flex", alignItems: "center", marginBottom: 8, fontWeight: 600}}>
                        <HiLocationMarker />&nbsp;&nbsp;&nbsp;{user?.address || "Unset"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginBottom: 8, fontWeight: 600}}>
                        <AiOutlinePhone />&nbsp;&nbsp;&nbsp;{user?.phone || "Unset"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginBottom: 8, fontWeight: 600}}>
                        <FaBirthdayCake />&nbsp;&nbsp;&nbsp;{user?.birthday || "Unset"}
                    </div>
                    
                </div>
            </div>
            <div className={"dksdskafjkjasasfaseda"} style={{background: "#fff", padding: 10, borderRadius: 10}}>
                <div className={"c-title-profile-user-site"} style={{fontSize: 32, fontWeight: 500, marginBottom: 16}}>
                    Thông tin người dùng
                </div>
                <div className={"list-info-user"} style={{maxWidth: 900, width: "100%", display: 'flex', alignItems: "center", flexWrap: "wrap", justifyContent: "space-between", gap: 10}}>
                    <div className={"wrap-list-info-user"} style={{display:" flex", width: "48%", marginBottom: 40, flexDirection: "column"}}>
                        <Title title={<div><FaUserAlt /> Tên đầy đủ</div>} />
                        <div className={"wrap-inp-info-user"} style={{width: "100%", height: 45, border: "1px solid #e7e7e7", borderRadius: 5}}>
                            <InputTemplate value={username} onChange={(e)=> setUsername(e.target.value)} className={"wrap-inp-info-user-i"} style={{width: "100%", border: "2px solid #000", borderRadius: 5, outlineColor: "#2e89ff"}} />
                        </div>
                    </div>
                    <div className={"wrap-list-info-user"} style={{display:" flex", width: "48%", marginBottom: 40, flexDirection: "column"}}>
                        <Title title={<div><AiFillPhone /> Số điện thoại</div>} />
                        <div className={"wrap-inp-info-user"} style={{width: "100%", height: 45, border: "1px solid #e7e7e7", borderRadius: 5}}>
                            <InputTemplate value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} className={"wrap-inp-info-user-i"} style={{width: "100%", border: "2px solid #000", borderRadius: 5, outlineColor: "#2e89ff"}} />
                        </div>
                    </div>
                    <div className={"wrap-list-info-user"} style={{display:" flex", width: "48%", marginBottom: 40, flexDirection: "column"}}>
                        <Title title={<div><FaAddressBook /> Địa chỉ</div>} />
                        <div className={"wrap-inp-info-user"} style={{width: "100%", height: 45, border: "1px solid #e7e7e7", borderRadius: 5}}>
                            <InputTemplate value={address} onChange={(e)=> setAddress(e.target.value)} className={"wrap-inp-info-user-i"} style={{width: "100%", border: "2px solid #000", borderRadius: 5, outlineColor: "#2e89ff"}} />
                        </div>
                    </div>
                    <div className={"wrap-list-info-user"} style={{display:" flex", width: "48%", marginBottom: 40, flexDirection: "column"}}>
                        <Title title={<div><FaBirthdayCake /> Ngày sinh</div>} />
                        <div className={"wrap-inp-info-user"} style={{width: "100%", height: 45, border: "1px solid #e7e7e7", borderRadius: 5}}>
                            <InputTemplate value={birthday} onChange={(e)=> setBirthday(e.target.value)} className={"wrap-inp-info-user-i"} style={{width: "100%", border: "2px solid #000", borderRadius: 5, outlineColor: "#2e89ff"}} />
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className={"fgdjlkfjgfjkjdklsjd"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className={"save-info-user-wrap"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', maxWidth: 600, height: 300, borderRadius: 5, background: "#fff", border: "1px solid #e7e7e7"}}>
                        <div className={"dfdkjklgjklfsdadfs"} style={{padding: 10}}>
                            {
                            isChooseImg=== false && <>
                                <div className={"fdjfjdglkjfsfjdksdaads flexCenterItem"} style={{position: "relative", marginBottom: 12}}>
                                    <RiImageAddLine style={{width: 32, height: 32}} />
                                    <input onChange={handleImg} title={"Chọn một ảnh"} type="file" className={"fjdkfjgkjfkslfsgdf"} style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: 10, cursor: "pointer", opacity: 0}} />
                                </div>
                                <div className={"dsjfdjhgkljgkfgs"} style={{fontWeight: 600, textAlign: "center"}}>
                                    Tải ảnh lên hoặc kéo thả vào đây
                                </div>
                            </>
                            }{
                                isChooseImg=== true && <div className={"ddfdsagdsfsddas"}>
                                    <div className={"fdjfkjgfkjfksdjs flexCenterItem"}>
                                        <img src={img.preview} alt="" style={{width: 160, height: 160, objectFit: "cover", borderRadius: 5}} />
                                    </div>
                                    <br />
                                    <div className={'djfdfjdfkjdfkas flexCenterItem'}>
                                        <Button onClick={()=> setImg(undefined)} variant={"primary"}>Hủy</Button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/*  */}
                {updateCheck && <div style={{fontSize: 14, fontWeight: 600, margin: "10px 0"}}>Cập nhật thông tin tài khoản thành công</div>}
                {/*  */}
            </div>
        </div>
        <Background />
    </div>
    <div className={"fjdhsjhdasas"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20, width: "100%", marginBottom: 20}}>
        <div className={"fkslDjklsjsdaks"} style={{ display: "flex", justifyContent: "center", alignItems: "center", whiteSpace: "nowrap"}}>
            <div className={"wrap-list-info-user"} style={{display:" flex", alignItems: "center"}}>
                <div className={"wrap-inp-info-user"} style={{ height: 60}}>
                    <ButtonTemplate disable={false} onClick={()=> {}} className={"wrap-btn-info-user-i"}>
                    <Link to={"/change/password"} style={{textDecoration: "none", color: "#000", fontSize: 20, padding: "0 18px"}}>
                        Đổi mật khẩu
                        </Link>
                    </ButtonTemplate>
                </div>
            </div>
        </div>
        <div className={"save-info-user-wrap"} style={{display: "flex", justifyContent: 'center', alignItems: 'center', maxWidth: 900}}> 
            <div className={"save-info-user"} style={{ height: 60, borderRadius: 80, padding: "0 18px", overflow: "hidden"}}>
                <ButtonTemplate style={{borderRadius: 80, textTransform: "capitalize", padding: "0 18px"}} onClick={updateInfoUser} className={"save-info-user-btn"}  disable={false} >Lưu</ButtonTemplate>
            </div>
        </div>
    </div>
    {
        openConfirm=== true && <PopupConfirm2 open={openConfirm} setOpen={setOpenConfirm} func={()=> navigate("/")} title={"Thông báo"} content={"Cập nhật thông tin tài khoản thành công"} />
    }
    </>
  )
}

export const Title= (props)=> {
    return (
        <div className={"title-i-user"} style={{fontSize: 20, fontWeight: 400}}>
            {props.title}
        </div>
    )
}
export default Profile