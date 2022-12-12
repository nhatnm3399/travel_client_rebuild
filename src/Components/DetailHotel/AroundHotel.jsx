import React, { useEffect, useState } from 'react'
import nearly_place from '../../api/nearly_place'
import "./AroundHotel.sass"

const AroundHotel = (props) => {
  const [data, setData]= useState([])

  useEffect(()=> {
    if(props?.data1?.longitude && props?.data1?.latitude) {
        nearly_place(parseFloat(props?.data1?.longitude), parseFloat(props?.data1?.latitude), setData)
    }
  }, [props?.data1?.longitude, props?.data1?.latitude])
  return (
    <div className={"ajsjaksjakraew"} style={{width: "100%", padding: "10px 40px"}}>
        <div className={"djksadjkdsjklsaasas"} style={{width: "100%", background: "#fff", borderRadius: 5, padding: 5}}>
            <div className={"sakskaslkfrawawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 30}}>
                Xung quanh của khách sạn
            </div>
            <div className={"djsjakjiojawwa"} style={{width: "100%", display: "flex", flexWrap: "wrap", }}>
                {
                    data?.results?.slice(0, 4)?.map((item, key)=> <TemplateAround key={item.place_id} {...item} />)
                }
            </div>
        </div>
    </div>  
  )
}

export const PlacePerDistance= (props)=> {
    return (
        <div className={"ajksajkajkjwawwa"} style={{width: "25%"}}>
            <div className={"sajsaksjkfaaraww"} style={{fontWeight: 600, marginBottom: 20}}>
               {props?.properties_type}
            </div>
            <div className={"daskjaksjakjwiw"} style={{marginBottom: 25, display: "flex", justifyContent: 'space-between', width: "100%"}}>
                <div className={"sjksjakjskrjioawjw"}>{props?.properties_name}</div>
            </div>
            <br />
        </div>
    )
}

export default AroundHotel

export const TemplateAround= (props)=> {
    return (
        <div className={"ajksajkajkjwawwa"} style={{width: "50%"}}>
            <div className={"daskjaksjakjwiw"} style={{marginBottom: 25, display: "flex", justifyContent: 'space-between', alignItems: "center", width: "100%"}}>
                <div className={"sjksjakjskrjioawjw"} style={{flex: "1 1 0"}}>{props?.name}</div>
                <div className={"djsaskrjauwijwjawa"} style={{flex: "1 1 0"}}>Địa chỉ: {props?.vicinity}</div>
            </div>
        </div>
    )
}