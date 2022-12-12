import React, { useState } from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import BannerLoginSignup from '../Common/BannerLoginSignup'
import BannerNameSite from '../Common/BannerNameSite'
import InputTemplate from '../Common/InputTemplate'
import "./ForgotPassword.sass"

const ForgotPassword = (props) => {
  const [email, setEmail]= useState(()=> "")
  return (
    <>
        <BannerNameSite />
        <BannerLoginSignup type={"Quên mật khẩu"} />
        <div className={"forgot-password-site"}>
            <div className={"main-forgot-main-page"}>
                <div className={"form-main-forgot-main-page"}>
                    <div className={"wrap-input-forgot-page"}>
                        <InputTemplate onChange={(e)=> setEmail(e.target.value)} value={email} className={"inp-tml-forgot-password"} placeholder={"Email hoặc sdt"} />
                    </div>
                    <div className={"wrap-input-forgot-page"}>
                        <ButtonTemplate onClick={()=> ""} disable={false} className={"btn-tml-forgot-password"}>Gửi</ButtonTemplate>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword