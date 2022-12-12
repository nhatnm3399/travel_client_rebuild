import React from 'react'

const GeneralRules = (props) => {
  return (
    <div className={"dkslskalskaldaaw"} style={{width: "100%", padding: "0 40px"}}>
        <div className={"dkaslskalkreaww"} style={{fontSize: 20, fontWeight: 600, marginBottom: 20}}>
            Quy tắc chung
        </div>
        <div className={"dklajwakljkaeaewa"} style={{width: "100%", padding: 20, background: "#fff", marginBottom: 30}}>
            <ItemPerRules title={"Check in: "} value={props?.check_in_time} />
            <ItemPerRules title={"Check out: "} value={props?.check_out_time} />
        </div>
    </div>
  )
}

const ItemPerRules= (props)=> {
    return (
        <div className={"djsklakjkaewwas"} style={{marginBottom: 20}}>{props.title} {props.value}</div>
    )
}

export default GeneralRules