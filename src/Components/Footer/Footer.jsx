import React from 'react'
import "./Footer.sass"

const Footer = (props) => {
  return (
    <>
        <div className={"fake-footer-main-page"}>
            
        </div>
        <div className={"footer-main-page"}>
          <div style={{textAlign: "center", color: "#fff", fontSize: 14}}>Công ty TNHH FTravel Việt Nam. Mã số DN: 0313581779. 60 Lê Văn Hiến, Ngũ Hành Sơn, Đà Nẵng</div>
          <div style={{textAlign: "center",marginTop: 8, color: "#fff", fontWeight: 600}}>Copyright © 2022 FTravel</div>
        </div>
    </>
  )
}

export default Footer