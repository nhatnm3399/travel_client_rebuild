import React from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import InputTemplate from '../Common/InputTemplate'
import { Title } from '../Profile/Profile'
import "./ChangePassword.sass"

const ChangePassword = (props) => {
  return (
    <div className={"change-password"}>
        <div className={"change-password-site"} style={{width: "100%", display: "flex", justifyContent:" center", alignItems:" center"}}>
            <div className={"c-change-password-site"} style={{width: "100%", maxWidth: 1200, margin: "50px 0"}}>
                <div className={"c-title-profile-user-site"} style={{fontSize: 32, fontWeight: 500, marginTop: 50, marginBottom: 50}}>
                    Đổi mật khẩu
                </div>
                <div className={"list-info-user"} style={{maxWidth: 700, width: "100%"}}>
                    <div className={"wrap-list-info-user"} style={{marginBottom: 40, display:" flex", justifyContent: "space-between", gap: 20, alignItems: "center"}}>
                        <Title title={"Mật khẩu hiện tại"} />
                        <div className={"wrap-inp-change-password"} style={{width: 350, height: 45, background: "#d9d9d9"}}>
                            <InputTemplate className={"wrap-inp-change-password-i"} />
                        </div>
                    </div>
                    <div className={"wrap-list-info-user"} style={{marginBottom: 40, display:" flex", justifyContent: "space-between", gap: 20, alignItems: "center"}}>
                        <Title title={"Mật khẩu mới"} />
                        <div className={"wrap-inp-change-password"} style={{width: 350, height: 45, background: "#d9d9d9"}}>
                            <InputTemplate className={"wrap-inp-change-password-i"} />
                        </div>
                    </div>
                    <div className={"wrap-list-info-user"} style={{marginBottom: 40, display:" flex", justifyContent: "space-between", gap: 20, alignItems: "center"}}>
                        <Title title={"Nhập lại mật khẩu mới"} />
                        <div className={"wrap-inp-change-password"} style={{width: 350, height: 45, background: "#d9d9d9"}}>
                            <InputTemplate className={"wrap-inp-change-password-i"} />
                        </div>
                    </div>
                </div>
                <div className={"save-change-password-wrap"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', maxWidth: 900}}> 
                    <div className={"save-change-password"} style={{width: 200, height: 80, marginTop: 50}}>
                        <ButtonTemplate onClick={()=> {}} className={"save-change-password-btn"} disable={false} >Xác nhận</ButtonTemplate>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword