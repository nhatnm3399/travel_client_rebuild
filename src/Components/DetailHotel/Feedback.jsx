import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {AiFillStar} from "react-icons/ai"

const Feedback = (props) => {
  return (
    <div className={"dskkjskajsakjewa"} style={{width: "100%", marginTop: 20, padding: "10px 40px"}}>
        <div className={"dfsdjdkljksjdksadjsa"} style={{width: "100%", background: "#fff", borderRadius: 5, padding: 5}}>
            <div className={"djskdjkasjklwawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 20}}>
                Đánh giá của khách
            </div>
            <div className={"djkajkajkassa"} style={{width: "100%"}}>
                <Swiper
                    modules={[Navigation]}
                    className="list-nearly-place-suggest"
                    navigation={true}
                    style={{width: "100%", height: "100%"}}
                    breakpoints={{
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                    }}
                >
                    {
                        props?.feed_back?.reverse()?.map((item, key)=> 
                        <SwiperSlide key={key}>
                            <FeedbackComponent {...item} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Feedback

const FeedbackComponent= (props)=> {
    // const [seeMore, setSeeMore]= useState(()=> false)
    
    return (
        <div className={"jksjkalsjdasaw"} style={{width: "100%", marginBottom: 50}}>
            <div className={"fjkajskasjasjkas"} style={{display: "flex", alignItems: "center", gap: 10}}>
                <div className={"dkskalkrleawias"} style={{display: "flex", justifyContent: 'center', alignItems:" center"}}>
                    <div role={"img"} className={"dkaskalskalwsawwaw"} style={{width: 40, height: 40, borderRadius: "50%", background: "#d9d9d9"}}>
                        <img src={props?.avatar} alt="" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius :"50%"}} />
                    </div>
                </div>
                <div className={"djsasksjkawkwia"}>
                    <div className={"dksasljkjawklajwlakwwa"} style={{marginBottom: 8}}>
                        {props.user_name}
                    </div>
                    <div className={"dkaskaljasjskassa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 4}}>
                        {
                            props?.star_point && Array.from(Array(parseInt(props?.star_point) - 1).keys()).map((item, key)=> <AiFillStar key={key} item={item} style={{color: "orange"}} />)
                        }
                        <AiFillStar style={{color: "orange"}} />
                    </div>
                </div>
            </div>
            <div className={"dsksakslajkassa"} style={{display: "flex", padding: 10}}>
                <div className={"djksjaksjaksasasa"}>
                    <div className={"dkskalkrleawias"} style={{display: "flex", justifyContent: 'center', alignItems:" center"}}>
                        <div role={"img"} className={"dkaskalskalwsawwaw"} style={{width: 40, height: 40}}></div>
                    </div>
                </div>
                <div className={"ksjaksjkasjrawa"}>
                    <div className={"dsjjaksjaklsjkalrsawa"} style={{marginTop: 30}}>
                        {props?.comment}
                    </div>
                </div>
            </div>
        </div>
    )
}