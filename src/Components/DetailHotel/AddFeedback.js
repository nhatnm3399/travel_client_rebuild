import { Button } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react'
import {AiTwotoneStar } from "react-icons/ai"
import submit_feedback from '../../api/auth/user/submit_feedback'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

const AddFeedback = (props) => {
  const {idHotel }= useParams()
  const [star, setStar]= useState(0)
  const [comment, setComment]= useState(()=> "")
  const [result, setResult]= useState()
  return (
    <div style={{padding: "10px 40px", width: '100%'}} className={"fjkdjkjkdjgkjdsdas"}>
        <div className={"fjkdjfkjsdkass"} style={{width: "100%", display: "flex", alignItems: "center", gap: 10}}>
            <div className={"jfksjdkjaksjdsd"} style={{width: "100%"}}>
                <input value={comment} onChange={e=> setComment(e.target.value)} type="text" className={"fjkdjskdjsass"} style={{width: "100%", height: 40, borderRadius: 5, border: "none", outline: "none", padding: 10, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} placeholder={"Mời bạn để lại bình luận"} />
                <div style={{fontSize: 12, marginTop: 12}} className={"fjskdjkjdfdadsdsa"}>*Nhập tối đa 200 ký tự</div>
            </div>
        </div>
        <br />
        <div className={"Dsjkldsjskljsasa"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <div className={"fjdjhjghjdshwsa"}>
                Đánh giá
            </div>
            <RatingStart setStar={setStar} star={star} />
        </div>
        <br />
        <Button disabled={(comment.length <= 0 ? true : false)} onClick={async ()=> {
            await submit_feedback(idHotel, Cookies.get("uid"),star, comment, setResult)
            props?.setChange(prev=> !prev)
            setComment(()=> "")
            setStar(()=> 0)
        }} variant={"primary"}>{result ? "Đã gửi đánh giá" : "Đánh giá"}</Button>
    </div>
  )
}

const RatingStart= (props)=> {
    return (
        <div className={"kjdjakdjhdjkldssa"}>
            <div className={"fjkldjksjfkdas"} style={{display: "flex", justifyContent :"center", alignItems: 'center', gap: 5}}>
                <ComponentStar {...props} value={1} />
                <ComponentStar {...props} value={2} />
                <ComponentStar {...props} value={3} />
                <ComponentStar {...props} value={4} />
                <ComponentStar {...props} value={5} />
                <ComponentStar {...props} value={6} />
                <ComponentStar {...props} value={7} />
                <ComponentStar {...props} value={8} />
                <ComponentStar {...props} value={9} />
                <ComponentStar {...props} value={10} />
            </div>
        </div>
    )
}

const ComponentStar= (props)=> {
    const exec= ()=> {
        props.setStar(parseInt(props.value))
    }

    return (
        <div onClick={exec} className={"fjdjhjfjjhshnasasa"} style={{display: "flex", justifyContent: "center", alignItems :"center"}}>
            <AiTwotoneStar className={parseInt(props.star) >= parseInt(props.value) ? "active123" : "notactive123"} color={parseInt(props.star) >= parseInt(props.value) ? "orange" : "#000"} style={{width: 20, height: 20}} />
        </div>
    )
}

export const StarPoint= (props)=> {
    return (
        <div className={"fjdjhjfjjhshnasasa"} style={{display: "flex", justifyContent: "center", alignItems :"center"}}>
            {
                Array.from(Array(parseInt(props?.start_point) - 1).keys()).map(item=> <AiTwotoneStar color={"orange"} style={{width: 20, height: 20}} />)
            }
        </div>
    )
    
}

export default AddFeedback
