import React from 'react'
import {AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const ChooseGuest = (props) => {
  const ascending= ()=> {
    props.setAmount(()=> parseInt(props.amount) + 1)
  }
  const descending= ()=> {
    if(parseInt(props.amount) > 0 ) {
        props.setAmount(()=> parseInt(props.amount) - 1)
    }
  }
  return (
    <div className={"sdajksjaksjassasa"} style={{padding: 20}}>
        <div className={"dklakslklsasads"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: 16}}>
            <div className={"skjHdhajssassafd"} style={{fontSize: 18, fontWeight: 600}}>
                {props.title}
            </div>
            <div className={"jdkasjkasjdsassa"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 20}}>
                <div onClick={descending} className={"jkjaksjsakjfksdsa"} style={{width: 40, height: 40, border: "1px solid #2e89ff", display: "flex", justifyContent: 'center', alignItems: 'center', cursor: "pointer"}}>
                    <AiOutlineMinus style={{color: "#2e89ff"}} />
                </div>
                <div className={"daksjaksljksasa"} style={{fontSize: 18}}>
                    {props.amount}
                </div>
                <div onClick={ascending} className={"jkjaksjsakjfksdsa"} style={{width: 40, height: 40, border: "1px solid #2e89ff", display: "flex", justifyContent: 'center', alignItems: 'center', cursor: "pointer"}}>
                    <AiOutlinePlus style={{color: "#2e89ff"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseGuest