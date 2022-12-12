import React, { useState } from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
//import BannerLoginSignup from '../Common/BannerLoginSignup'
//import BannerNameSite from '../Common/BannerNameSite'
import InputTemplate from '../Common/InputTemplate'
import "./Login.sass"
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import Background from '../Background/Background'
import login from '../../api/auth/user/login'

const Login = () => {
  return (
    <div className={"login-main-page"}>
      <MainLogin />
    </div>
  )
}

const MainLogin= ()=> {
  const [email, setEmail]= useState(()=> "")
  const [password, setPassword]= useState(()=> "")
  const [message, setMessgae]= useState()
  const [validPassword, setValidPassword]= useState(true)
  const [validEmail, setValidEmail]= useState(true)
  const responseGoogle = (response) => {
    console.log(response);
  }
  function checkPassword(str)
    {
        const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(re.test(str.target.value)=== true) {
          setValidPassword(true)
        }
        else {
          setValidPassword(false)
        }
    }
  function checkEmail(str) {
    const re = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if(re.test(str.target.value)=== true) {
      setValidEmail(true)
    }
    else {
      setValidEmail(false)
    }
  }
  return (
    <div className={"main-login-main-page"} style={{minHeight: '100vh'}}>
      <div className={"form-main-login-main-page"}>
      <div className={"title-form-main-login-main-page"}>
        Đăng nhập
      </div>
      <div className={"wrap-input-auth-page"}>
        <InputTemplate onBlur={checkEmail} type={"email"} onChange={(e)=> setEmail(e.target.value)} value={email} placeholder={"Email hoặc sdt"} className={"inp-tml-email"}  />
      </div>
      {
        validEmail=== false && <div style={{fontSize: 12, width: "90%", color: "red", textAlign: "left"}}>Email hoặc số điện thoại không hợp lệ</div>

      }
      <div className={"wrap-input-auth-page"}>
        <InputTemplate onBlur={checkPassword} type={"password"} onChange={(e)=> setPassword(e.target.value)} value={password} placeholder={"Mật khẩu"} className={"inp-tml-password"}  />
      </div>
      {
        validPassword=== false && <div style={{fontSize: 12, width: "90%", color: "red"}}>Mật khẩu cần phải tối thiểu 8 chữ cái bao gồm chữ số, chữ cái viết thường, chữ cái viết hoa và một ký tự đặc biệt</div>

      }
      <br />
      {
        message && <div className={"fksdklkdsasaas"} style={{margin: "8px 0", width: "90%"}}>{message}</div>
      }
      <div className={"wrap-input-auth-page"}>
        <ButtonTemplate className={"btn-tml-login"} disable={false} onClick={()=> login(email, password, setMessgae) }>Đăng nhập</ButtonTemplate>
      </div>
      <div style={{width: "90%", maxWidth: 708, display: "flex", justifyContent: 'space-between',  alignItems:" center"}}>
        <span>Bạn không có tài khoản? <Link to={"/signup"} style={{fontWeight: 600, color: "#2e89ff",  textDecoration: "none"}}>Đăng ký tại đây</Link></span>
        <span><Link to={"/forgot/password"} style={{fontWeight: 600, color: "#2e89ff",  textDecoration: "none"}}>Quên mật khẩu</Link></span>
      </div>
      <div className={"toggle-to-login"}>
        Hoặc tiếp tục với
      </div>
      <div className={"link-to-login-page"}>
        <div style={{display: "flex", justifyContent:" center", alignItems: "center", margin: 8}}>
          <GoogleLogin
            clientId="795778883777-ui60ejuabu59dq1hg7pnk32lplccs1g6.apps.googleusercontent.com"
            buttonText="Tiếp tục với google"
            onSuccess={responseGoogle}
          />
        </div>
      </div>
      </div>
      <Background />
    </div>
  )
}

export default Login