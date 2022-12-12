import React, { useState } from "react";
import { Tab1 } from "../Booking/Booking";
import { BannerHome } from "../Home/Home";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import { NumericFormat } from 'react-number-format';

const DetailSubRoom = (props) => {
  return (
    <div className={"detail-sub-room"} style={{ width: "100%" }}>
      <BannerHome />
      <Tab1 />
      <Tab2 />
      <div className={"dfkfkdkgfsda flexCenterItem"} style={{width: "100%"}}>
        <Button variant={"primary"}>Đặt phòng này</Button>
      </div>
    </div>
  );
};

export const Tab2 = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(() => null);

  return (
    <div
      className={"sjkdjaskajskldfas"}
      style={{
        width: "100%",
        padding: "0 40px",
        display: "flex",
        justifyContent: "center",
        gap: 50,
        marginBottom: 30,
      }}
    >
      {/*  */}
      <div className={"dskjhjvsjklddsda"} style={{ width: "50%" }}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              alt={""}
              style={{ width: "100%", aspectRatio: 8 / 5, background: "#d9d9d9" }}
              src={props?.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt={""}
              style={{ width: "100%", aspectRatio: 8 / 5, background: "#d9d9d9" }}
              src={props?.image1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt={""}
              style={{ width: "100%", aspectRatio: 8 / 5, background: "#d9d9d9" }}
              src={props?.image2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt={""}
              style={{ width: "100%", aspectRatio: 8 / 5, background: "#d9d9d9" }}
              src={props?.image3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt={""}
              style={{ width: "100%", aspectRatio: 8 / 5, background: "#d9d9d9" }}
              src={props?.image4}
            />
          </SwiperSlide>
        </Swiper>
        {/* <div className={"djskajklfjskldasas"} style={{width: "100%", marginBottom: 30}}>
                    <div className={"fnsamdklsajdfkasda"} style={{width: "100%", aspectRatio: 8 / 5, background: "#d9d9d9"}}>

                    </div>
                </div> */}
        <div className={"djsskjsjdsksaasdj"} style={{ width: "100%" }}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            <SwiperSlide style={{ width: "20%" }}>
              <img
                alt={""}
                style={{ width: "100%", aspectRatio: 1 / 1 }}
                src={props?.image}
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: "20%" }}>
              <img
                alt={""}
                className={"hjksdshkljfddasks"}
                style={{
                  width: "100%",
                  aspectRatio: 1 / 1,
                  background: "#d9d9d9",
                }}
                src={props?.image1}
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: "20%" }}>
              <img
                alt={""}
                className={"hjksdshkljfddasks"}
                style={{
                  width: "100%",
                  aspectRatio: 1 / 1,
                  background: "#d9d9d9",
                }}
                src={props?.image2}
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: "20%" }}>
              <img
                alt={""}
                className={"hjksdshkljfddasks"}
                style={{
                  width: "100%",
                  aspectRatio: 1 / 1,
                  background: "#d9d9d9",
                }}
                src={props?.image3}
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: "20%" }}>
              <img
                alt={""}
                className={"hjksdshkljfddasks"}
                style={{
                  width: "100%",
                  aspectRatio: 1 / 1,
                  background: "#d9d9d9",
                }}
                src={props?.image4}
              />
            </SwiperSlide>
          </Swiper>
          {/* <div className={"hjksdshkljfddasks"} style={{width: "18%", aspectRatio: 1 / 1, background: "#d9d9d9"}}>

                    </div> */}
        </div>
      </div>
      {/*  */}
      <div className={"fjkdsjisadkljasdlas"} style={{ width: "50%" }}>
        <div className={"klsadkjsaskdlas"}
          style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          Số người ở: {props?.number_people} người
        </div>
        <div className={"klsadkjsaskdlas"}
          style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          Giá phòng: <NumericFormat value= {props?.price} thousandSeparator={","} displayType="text" renderText={(value) => <>{value.replaceAll(",", ".")}</>} /> VND
        </div>
        <div className={"klsadkjsaskdlas"}
          style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
         Diện tích: {props?.room_area} m<sup>2</sup>
        </div>
        <br />
        <div
          className={"klsadkjsaskdlas"}
          style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}
        >
          Các tiện nghi và cơ sở vật chất
        </div>
        <div
          className={"dnksajksaklskals"}
          style={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {
            props?.data1?.hotel_properties?.map((item, key)=> <div key={key} style={{width: "calc(100% / 3)"}} className={"jskdsjskljkasas"}>{item?.properties_name}</div>)
          }
        </div>
        <br />
      </div>
    </div>
  );
};

export default DetailSubRoom;
