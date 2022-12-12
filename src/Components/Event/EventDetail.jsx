import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import detail_event from '../../api/detail_event'

const EventDetail = (props) => {
  const {eventId}= useParams()
  const [data, setData]= useState()
  useEffect(()=> {
    detail_event(eventId, setData)
  }, [eventId])
  return (
    <div className={"fdjkdjkfjkdass flexCenterItem"} style={{width: "100%", padding: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={"fkklsdklgkklaskdas"} style={{width: '100%', maxWidth: 1116}}>
          <Title title={data?.title} />
          <br />
          <ImageEvent image={data?.image} />
          <br />
          <SubTitle title={data?.description} />
          <br />
          <ImageEvent image={data?.image1} />
          <br />
          <SubTitle title={data?.description1} />
          <br />
          <ImageEvent image={data?.image2} />
          <br />
          <SubTitle title={data?.description2} />
          <br />
          <br />
          <div className={"dfjkldjifjdklssa"} style={{textAlign: "center", fontSize: 24, fontWeight: 600}}>
            Khách sạn gần đây 
          </div>
          <br />
          <div className={"dskdjlkfjdkawsasa"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
            {
              data?.hotel_list?.map((item, key)=> <Image2 key={key} {...item} />)
            }
          </div>
        </div>
    </div>
  )
}

const Title= (props)=> {
  return (
    <div className={"dfjkdjdkgljdkssaa"} style={{fontSize: 32, fontWeight: 600, }}>
      {props?.title}
    </div>
  )
}

const ImageEvent= (props)=> {
  return (
    <div className={"fsjdsljdkdjksdsaa"} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
      <img src={props?.image} alt="can't display" style={{width: "100%", height: "auto", aspectRatio: 8 / 4, objectFit: "cover", background: "#d9d9d9", borderRadius: 5}} />
    </div>
  )
}

const SubTitle= (props)=> {
  return (
    <div className={"dsjdkjfkjhkdsjas"} style={{width: "100%"}}>{props?.title}</div>
  )
}

const Image2= (props)=> {
  const navigate= useNavigate()
  
  return (
    <div onClick={()=> navigate("/hotel/detail/"+ props?.id)} className={"fjskdjkfjdksjskasa"} style={{flex: "1 1 0", position: "relative", cursor: "pointer"}}>
      <div className={"sjkdhjkdgjdskasa"} style={{fontWeight: 600, fontSize: 20, color: "#fff", position: "absolute", zIndex: 10, top: 0, left: 0, padding: 10}}>{props?.hotelName}</div>
      <img src={props?.image} alt="" style={{width: "100%", height: "auto", aspectRatio: 9 / 16, objectFit: "cover", background: "#d9d9d9", borderRadius: 5}} />
    </div>
  )
}



export default EventDetail
