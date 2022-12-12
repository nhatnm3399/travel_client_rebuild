import React from 'react'
import "./BannerLoginSignup.sass"

const BannerLoginSignup = (props) => {
  return (
    <div className={"banner-login-and-signup"}>
        {props.type}
    </div>
  )
}

export default BannerLoginSignup