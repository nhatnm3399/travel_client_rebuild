import React, { useEffect, useRef, useState } from "react";
import InputTemplate from "../Common/InputTemplate";
import GoogleMapPlugin from "../Plugin/GoogleMap";
import { Title } from "./ListHotel";
import TimePicker from "react-time-picker";
import { GrAdd } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import { uploadImageClient } from "../../firebase/config";
import { Button } from "react-bootstrap";
import add_hotel from "../../api/auth/manage_hotel/add_hotel";
import { SearchSuggest } from "../Home/Home";
import suggest_search from "../../api/search/suggest_search";
import Fuse from "fuse.js"
import Cookies from "js-cookie";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import detail_hotel from "../../api/hotel/detail_hotel";
// import Snackbar from "../Snackbar/Snackbar";
import update_hotel from "../../api/manage/update_hotel";
import approve_hotel from "../../api/admin/approve_hotel";
// import delete_hotel from "../../api/admin/delete_hotel";
import Popup from "./Popup";
import delete_hotel_x from "../../api/manage/delete_hotel_x";
import A from "./A";
// import PlacesAutocomplete from "./SuggestPlace";

export const RegisterHotel = (props) => {
  // eslint-disable-next-line
  const {idHotel}= useParams()
  // eslint-disable-next-line
  const [searchParams, setSearchParams]= useSearchParams()
  const [data, setData]= useState()
  useEffect(()=> {
    if(props?.is_detail=== true ) {
      detail_hotel(idHotel, setData)
    }
    if(props?.is_edit=== true) {
      detail_hotel(searchParams.get("idHotel"), setData)
    }
  }, [props?.is_edit, searchParams, props?.is_detail, idHotel])
  return (
    <div
      className={"jsjakljsakjsakeawa"}
      style={{ width: "100%"}}
    >
      {
        !props?.is_detail=== true &&
        <Title is_edit={props?.is_edit} title={props?.is_edit===true ? "Sửa khách sạn" : "Đăng ký khách sạn"} title1={props?.is_edit=== true ? "Sửa phòng" : "Đăng ký phòng"} />
      }
      <MainRegister is_detail={props?.is_detail} is_edit={props?.is_edit} data={data} />
    </div>
  );
};

const MainRegister = (props) => {
  const [convenient, setConvenient]= useState([])
  // eslint-disable-next-line
  const [imgX, setImgX]= useState([])
  // eslint-disable-next-line
  const [payload, setPayload]= useState()
  // 
  const {idHotel}= useParams()
  const [searchParams]= useSearchParams()
  const [hotelName, setHotelName]= useState()
  const [phoneNumber, setPhoneNumber]= useState()
  const [address, setAddress]= useState()
  const [description, setDescription]= useState()
  const [checkIn, setCheckIn]= useState()
  const [checkOut, setCheckOut]= useState()
  const [isPaymentCard, setIsPaymentCard]= useState()
  // eslint-disable-next-line
  const [listImageFinal, setListImageFinal]= useState([])

  // 
  const [listImage, setListImage] = useState([]);
  const [result, setResult] = useState([]);
  const isChooseImage = listImage.length > 0 ? true : false;
  // const [openListCity, setOpenListCity]= useState(false)
  const [idCity, setIdCity]= useState()
  // eslint-disable-next-line
  const [loading, setLoading]= useState(false)
  const [longtitude, setLongtitude]= useState(105.8330636)
  const [latitude, setLatitude]= useState(21.0330554)
  const navigate= useNavigate()
  const add_hotel_func= async ()=> {
    const list_img_final_unresolve= listImage?.map(item=> uploadImageClient(item.img, setListImageFinal))
    const result= await Promise.all(list_img_final_unresolve)
    const id_hotel= await add_hotel(hotelName, description, address, phoneNumber, result[0], result[1], result[2], result[3], result[4], idCity, latitude, longtitude, checkIn, checkOut, isPaymentCard, Cookies.get("uid"), convenient, setPayload)
    navigate("/manage/hotel/add/new/room?idHotel="+ id_hotel)
  }
  const update_hotel_func= async ()=> {
    const list_img_final_unresolve= listImage?.map(item=> uploadImageClient(item.img, setListImageFinal))
    const result= await Promise.all(list_img_final_unresolve)
    const id_hotel= await update_hotel(hotelName, description, address, phoneNumber, result[0], result[1], result[2], result[3], result[4], idCity, latitude, longtitude, checkIn, checkOut, isPaymentCard, convenient, searchParams.get("idHotel"), setPayload, setLoading)
    return id_hotel
  }
  useEffect(()=> {
    if(props?.is_edit=== true || props?.is_detail ) {
      setHotelName(props?.data?.hotel_name)
      setPhoneNumber(props?.data?.phone)
      setAddress(props?.data?.address)
      setDescription(props?.data?.description)
      setCheckIn(props?.data?.check_in_time)
      setCheckOut(props?.data?.check_out_time)
      setIsPaymentCard(props?.data?.is_payment_card)
      setImgX(prev=> ([props?.data?.image, props?.data?.image1, props?.data?.image2, props?.data?.image3, props?.data?.image4]))
      setConvenient(props?.data?.hotel_properties || [])
    }
  }, [props?.is_edit, props?.data, props?.is_detail, props?.hotel_properties])
  // eslint-disable-next-line
  const [y, setY]= useState()
  // eslint-disable-next-line
  const [loading2, setLoading2]= useState(false)
  // eslint-disable-next-line
  const [dataX, setDataX]= useState([])
  const approveHotel= ()=> {
    approve_hotel(idHotel, setDataX, setLoading)
  }
  const rejectHotel= ()=> {
    delete_hotel_x(idHotel, setY, setLoading2)
  }
  const [validatePhonenumber, setValidPhonenumber]= useState(true)
  function checkPhonenumber(str) {
    const re = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if(re.test(str.target.value)=== true) {
      setValidPhonenumber(true)
    }
    else {
      setValidPhonenumber(false)
    }
}
  return (
    <div className="sdjdjsjkjwasw" style={{width: "100%", background: "#e4f2fd"}}>
      <div
      className={"djksjajerkjawwawa"}
      style={{ width: "100%", padding: 10, background: "#fff"}}
    >
      <div
        className={"fjskdljskdfjeaaawa"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          marginBottom: 30,
        }}
      >
          {/* <PlacesAutocomplete /> */}

        {/*  */}
        <div
          className={`fjkjaklwjkrlawawaw ${props?.is_detail=== true ? "sjdkdsjkdjkeawa" : "skldksdlskdlsd"}`}
          style={{
            flex: "1 1 0",
            minHeight: 250,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            className={"fjejksljaklea"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: 30,
            }}
          >
            <div className={"dsjaajwjalkwawwa"} style={{ flex: "1 1 0" }}>
              <TitleItem title={<span>Tên khách sạn {!props?.is_detail=== true && <span style={{color: "red"}}>*</span>}</span>} />
              <InputTemplate
                readOnly={!props?.is_detail=== true ? false : true}
                
                onChange={(e) => setHotelName(e.target.value)}
                value={hotelName}
                style={{
                  width: "100%",
                  height: 40,
                  padding: 10,
                  outlineColor: "#2e89ff",
                  background: "#fff",
                  border: "1px solid #e7e7e7",
                  borderRadius: 5,
                }}
              />
            </div>
            <div className={"dsjaajwjalkwawwa"} style={{ flex: "1 1 0" }}>
              <TitleItem title={<span>Số điện thoại {!props?.is_detail=== true && <span style={{color: "red"}}>*</span>}</span>} />
              <InputTemplate
                readOnly={!props?.is_detail=== true ? false : true}
                onBlur={checkPhonenumber}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: "100%",
                  height: 40,
                  padding: 10,
                  outlineColor: "#2e89ff",
                  background: "#fff",
                  border: "1px solid #e7e7e7",
                  borderRadius: 5,
                  
                }}
              />
            
              {
                validatePhonenumber=== false && <div style={{fontSize: 12, width: "90%", color: "red", textAlign: "left"}}>Số điện thoại không hợp lệ</div>
              }
            </div>
          </div>
          <div className={"dsjaajwjalkwawwa"} style={{ width: "100%" }}>
            <TitleItem title={<span>Địa chỉ {!props?.is_detail=== true && <span style={{color: "red"}}>*</span>}</span>} />
            {
              !props?.is_detail=== true && <A setAddress={setAddress} setLongtitude={setLongtitude} setLatitude={setLatitude} />
            }
            {
              props?.is_detail=== true && <InputTemplate
                readOnly={!props?.is_detail=== true ? false : true}

                value={address}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: "100%",
                  height: 40,
                  padding: 10,
                  outlineColor: "#2e89ff",
                  background: "#fff",
                  border: "1px solid #e7e7e7",
                  borderRadius: 5,
                  
                }}
              />
            }
                
          </div>
          <>
          {
            !props?.is_detail=== true &&
            <div className={"dsjaajwjalkwawwa"} style={{ width: "100%", position: "relative"}}>
              <TitleItem title={<span>Chọn thành phố {!props?.is_detail=== true && <span style={{color: "red"}}>*</span>}</span>} />
            
            {<ChooseCity setIdCity={setIdCity} />}
            </div>
          }
          </>
        </div>
        {/* intergrate map */}
        {
          !props?.is_detail=== true && <div
          className={"fksedkawjrkjakwawwaw"}
          style={{ width: 250, height: 250 }}
        >
          <div
            className={"fjklejkjkeawawae"}
            style={{ width: "100%", height: "100%" }}
          >
            <GoogleMapPlugin data={{longitude: longtitude, latitude}} longtitude={longtitude} latitude={latitude} />
          </div>
        </div>
        }
      </div>
      {/*  */}
      <div
        className={"dsjaajwjalkwawwa"}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <TitleItem title={<span>Mô tả {!props?.is_detail=== true && <span style={{color: "red"}}>*</span>}</span>} />
        <textarea

          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            height: 200,
            padding: 10,
            outlineColor: "#2e89ff",
            background: "#fff",
            fontSize: 16,
            resize: "none",
            border: "1px solid #e7e7e7",
            borderRadius: 5
          }}
        />
      </div>
      <Convenient is_detail={props?.is_detail} setConvenient={setConvenient} convenient={convenient} />
      <br />
      <SetRule is_detail={props?.is_detail} checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} isPaymentCard={isPaymentCard} setIsPaymentCard={setIsPaymentCard} />
      <br />
      <ImageIllustation approveHotel={approveHotel} rejectHotel={rejectHotel} imgX={imgX} is_detail={props?.is_detail} is_edit={props?.is_edit} listImage={listImage}
        setListImage={setListImage}
        result={result}
        setResult={setResult}
        isChooseImage={isChooseImage}
        add_hotel_func={add_hotel_func}
        update_hotel_func={update_hotel_func}
      />
      {/* {loading=== true && <Snackbar show={loading} setShow={setLoading} title={"Thông báo "} description={"Cập nhật khách sạn thành công !"} />} */}
    </div>
    </div>
  );
};

const ChooseCity= (props)=> {
  const [destination, setDestination]= useState(()=> undefined)
  const [openDestination, setOpenDestination]= useState(()=> false)
  const [data, setData]= useState()
  const [dataSuggest, setDataSuggest]= useState([])

  const options = {
    isCaseSensitive: false,
    shouldSort: true,
    includeMatches: false,
    keys: [
      "city_name",
      "province"
    ]
  };
  const fuse = new Fuse(data, options);
  useEffect(()=> {
    suggest_search(setData, setDataSuggest)
  }, [])
  const search_by_place= (e)=> {
    setDestination(e.target.value)
    setDataSuggest(fuse.search(e.target.value))
  }
  return (
    <SearchSuggest
      setOpenDestination={setOpenDestination}
      destination={destination}
      search_by_place={search_by_place}
      dataSuggest={dataSuggest}
      setValue={setDestination}
      openDestination={openDestination}
      data={data}
      placeholder={"Chọn thành phố hoặc tìm kiếm thành phố"}
      setIdCity={props?.setIdCity}
    />
  )
}

const TitleItem = (props) => {
  return (
    <div
      className={"fgdjskljeklajkwawaw"}
      style={{ fontWeight: 600, marginBottom: 12 }}
    >
      {props.title}
    </div>
  );
};

const SetRule = (props) => {
  return (
    <div className={"fjkejklajkwljaklwwajaw"} style={{ width: "100%" }}>
      <TitleItem title={"Quy tắc chung"} />
      <div
        className={"fkajkawakwawaew"}
        style={{ width: "100%", padding: 20, background: "#fff",borderRadius: 5 }}
      >
        <Label is_detail={props?.is_detail} label={"Thời gian nhận phòng: "} value={props?.checkIn} component={<TimePicker onChange={props?.setCheckIn} value={props?.checkIn} />} />
        <Label is_detail={props?.is_detail} label={"Thời gian trả phòng: "} value={props?.checkOut} component={<TimePicker onChange={props?.setCheckOut} value={props?.checkOut} />} />
        <Label
          is_detail={props?.is_detail}
          label={"Hủy đặt phòng / Trả trước: "}
          value={props?.isPaymentCard=== true ? "Có": "Không"}
          component={<YesNoOptions setIsPaymentCard={props?.setIsPaymentCard} />}
        />
        {/* <Label label={"Trẻ em và giường"} />
        <Label label={"Độ tuổi đặt phòng"} />
        <Label label={"Vật nuôi"} />
        <Label label={"Hình thức thanh toán"} /> */}
      </div>
    </div>
  );
};

export const Convenient= (props)=> {
  return (
    <div className={"fdjklfjkdgjhklsdas"} style={{width: '100%'}}>
      <div className={"fkljdfdklsjdkfsdsas"} style={{width: "100%", padding: 10, background: "#fff", borderRadius: 5}}>
        <div className={"dskdjskfjkdjsaksas"} style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>
          Tiện nghi và nội quy
        </div>
        <div className={"fsjdjhkldjdsfdadas"} style={{display: "flex", alignItems: "center", gap: 30, }}>
          {
            props?.convenient?.filter(item=> item?.properties_name === "Tiện nghi và nội quy")?.map((item, key)=> 
            <div key={key} className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
              <span className={"fdjslkadjfksdsjfkdsa"}>{item?.properties_type}</span>
            </div>
            )
          }
          {
            !props?.is_detail=== true && <>
              <ComponentConvenient is_detail={props?.is_detail} name={"Wifi"} type_id={1} convenient={props?.convenient} setConvenient={props?.setConvenient} />
              <ComponentConvenient is_detail={props?.is_detail} name={"Máy lạnh"} type_id={1} convenient={props?.convenient} setConvenient={props?.setConvenient} />
              <ComponentConvenient is_detail={props?.is_detail} name={"Wc"} type_id={1} convenient={props?.convenient} setConvenient={props?.setConvenient} />
              <ComponentConvenient is_detail={props?.is_detail} name={"Chỗ để xe"} type_id={1} convenient={props?.convenient} setConvenient={props?.setConvenient} />
            </>
          }
        </div>
        <br />
        <br />
        {/*  */}
        <div className={"dskdjskfjkdjsaksas"} style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>
          Hướng nhìn
        </div>
        {
            props?.convenient?.filter(item=> item?.properties_name === "Hướng nhìn")?.map((item, key)=> 
            <div key={key} className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
              <span className={"fdjslkadjfksdsjfkdsa"}>{item?.properties_type}</span>
            </div>
            )
          }
        {
          !props?.is_detail=== true && <>
            <div className={"fsjdjhkldjdsfdadas"} style={{display: "flex", alignItems: "center", gap: 30, }}>
              <ComponentConvenient is_detail={props?.is_detail} name={"Núi"} type_id={2} convenient={props?.convenient} setConvenient={props?.setConvenient} />
              <ComponentConvenient is_detail={props?.is_detail} name={"Biển"} type_id={2} convenient={props?.convenient} setConvenient={props?.setConvenient} />
              <ComponentConvenient is_detail={props?.is_detail} name={"Sông"} type_id={2} convenient={props?.convenient} setConvenient={props?.setConvenient} />
            </div>
          </>
        }
        <br />
        <br />
        {/*  */}
        <div className={"dskdjskfjkdjsaksas"} style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>
          Phòng tắm
        </div>
        {
            props?.convenient?.filter(item=> item?.properties_name === "Phòng tắm")?.map((item, key)=> 
            <div key={key} className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
              <span className={"fdjslkadjfksdsjfkdsa"}>{item?.properties_type}</span>
            </div>
            )
          }
        {
          !props?.is_detail=== true && <>
            <div className={"fsjdjhkldjdsfdadas"} style={{display: "flex", alignItems: "center", gap: 30, }}>
              <ComponentConvenient is_detail={props?.is_detail} name={"Đồ vệ sinh cá nhân"} type_id={3} convenient={props?.convenient} setConvenient={props?.setConvenient} />
              <ComponentConvenient is_detail={props?.is_detail} name={"Dép"} type_id={3} convenient={props?.convenient} setConvenient={props?.setConvenient} />
            </div>
          </>
        }
        <br />
        <br />
      </div>
    </div>
  )
}

const ComponentConvenient= (props)=> {
  const ref= useRef()
  const setValue= ()=> {
    if(ref.current.checked) {
      props?.setConvenient(prev=> ([...prev, {properties_type_id: props?.type_id, properties_type: props?.name}]))
    }
    else {
      props?.setConvenient(props?.convenient?.filter(item=> parseInt(item.properties_type_id) !== parseInt(props?.type_id)))
    }
  }
  return (
    <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
      <span className={"fdjslkadjfksdsjfkdsa"}>{props?.name}</span>
      {
       !props?.is_detail=== true  && <input ref={ref} onChange={setValue} type="checkbox" style={{width: 18, height: 18}} />
      }
    </div>
  )
}

const Label = (props) => {
  return (
    <div
      className={"skdkeljakwjkawawa"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginBottom: 32,
      }}
    >
      <div className={"kldkalkaelkeawaa"} style={{ maxWidth: 200, width: 200 }}>
        {props.label}
      </div>
      <div
        className={"fjsekjakajwkawjwaeaaw"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!props?.is_detail=== true && props.component}
        {props?.is_detail=== true && props?.value}
      </div>
    </div>
  );
};

const YesNoOptions = (props) => {
  return (
    <div
      className={"fkakwklfaseaa"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <ComponentYesNo setIsPaymentCard={props?.setIsPaymentCard} value={true} text={"Có"} name={"deposit"} />
      <ComponentYesNo setIsPaymentCard={props?.setIsPaymentCard} value={false} text={"Không"} name={"deposit"} />
    </div>
  );
};

const ComponentYesNo = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: 24,
      }}
    >
      <span style={{}}>{props.text}</span>
      <div
        className={"fjiidjdjksteawsa"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "inherit",
        }}
      >
        <InputTemplate
          readOnly={!props?.is_detail=== true ? false : true}
          onClick={()=> props?.setIsPaymentCard(props?.value)}
          type={"radio"}
          name={props.name}
          value={props.value}
          style={{ width: 16, height: 16 }}
        />
      </div>
    </div>
  );
};

const ImageIllustation = (props) => {
  
  const f = (e) => {
    Object.values(e.target.files).map((item) =>
      props?.setListImage((prev) => [
        ...prev,
        {
          img: item,
          imgPreview: URL.createObjectURL(item),
          key: item.lastModified,
        },
      ])
    );
  };

  const a= (e)=> {
    props?.setListImage(prev=> ([...prev, {img: e.target.files[0], imgPreview: URL.createObjectURL(e.target.files[0]), key: e.target.files[0].lastModified}]))
  }
  // eslint-disable-next-line
  const testUpload = async () => {
    // listImage.map(item=> )
    const a = await uploadImageClient(props?.listImage[0].img, props?.setResult);
    console.log(a);
  };

  return (
    <div className={"fskjakejakwjaklawwa"} style={{ width: "100%" }}>
      <TitleItem title={"Hình ảnh "} />
      <div
        className={"fjajkjsklajraeweaa"}
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          position: "relative",
          background: "#fff",
          height: 400,
          flexWrap: "wrap",
          borderRadius: 5,
          border: "1px solid #e7e7e7"
        }}
        
      >
      {
            props?.is_detail=== true && props?.imgX.map((item, key) => (
              <div
                key={key}
                className={"dlakjklajwaasas"}
                style={{
                  width: "20%",
                  height: "auto",
                  aspectRatio: 1 / 1,
                  padding: 10,
                  position: "relative",
                }}
              >
                <img
                  src={item}
                  alt="open"
                  style={{
                    width: "100%",
                    aspectRatio: 1 / 1,
                    objectFit: "cover",
                    border: "1px solid #e7e7e7",
                  }}
                />
                {/* <div
                  title={"Xóa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  onClick={() =>
                    props?.setListImage(
                      props?.listImage.filter(
                        (img) => parseInt(img.key) !== parseInt(item.key)
                      )
                    )
                  }
                >
                  <AiFillCloseCircle style={{ color: "#3a3b3c" }} />
                </div> */}
              </div>
              ))}
              {/*  */}
        {props?.isChooseImage === true &&
          
          <>
          
            <>
              {props?.listImage.map((item, key) => (
              <div
                key={key}
                className={"dlakjklajwaasas"}
                style={{
                  width: 150,
                  height: 150,
                  padding: 10,
                  position: "relative",
                }}
              >
                <img
                  src={item.imgPreview}
                  alt="open"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "1px solid #e7e7e7",
                  }}
                />
                <div
                  title={"Xóa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  onClick={() =>
                    props?.setListImage(
                      props?.listImage.filter(
                        (img) => parseInt(img.key) !== parseInt(item.key)
                      )
                    )
                  }
                >
                  <AiFillCloseCircle style={{ color: "#3a3b3c" }} />
                </div>
              </div>
              ))}
              </>
              <>
              {
                props?.listImage?.length < 5 && <div style={{padding: 10}}><Button color={"primary"} style={{height: 130, width: 130, position: "relative"}}>Thêm
                  <input
                    onChange={a}
                    type="file"
                    multiple
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 9,
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Button></div>
              }
              </>
          </>
          }

        { !props?.is_detail=== true &&
          <>
          
          {(props?.isChooseImage === false) && (
            <div
              className={"fkdjksjakwjawawas"}
              style={{
                width: 80,
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "absolute",
                background: "#d9d9d9",
                cursor: "pointer",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)    ",
              }}
            >
              <div
                className={"fjdadjkwljeakwawa"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <GrAdd style={{ width: 24, height: 24 }} />
              </div>
              <div style={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}>
                Upload
              </div>
              <input
                onChange={f}
                type="file"
                multiple
                style={{
                  position: "absolute",
                  opacity: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          )}
        </>
        }
        {/* rule */}
        <div
          className={"djkjaksjkajraeaw"}
          style={{
            position: "absolute",
            bottom: 0,
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            width: "100%",
          }}
        >
        {
          !props?.is_detail=== true && 
          "Vui lòng đăng tải 5 hình ảnh"
        }
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      > 
      {
        !props?.is_detail === true &&
        <>
        {
          props?.is_edit !== true && <button
          onClick={props?.add_hotel_func}
          style={{
            padding: "10px 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #e7e7e7",
            outline: "none",
            background: "#2e89ff",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Đăng tải
        </button>
        }
        {
          props?.is_edit === true && <button
          onClick={props?.update_hotel_func}
          style={{
            padding: "10px 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #e7e7e7",
            outline: "none",
            background: "#2e89ff",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Cập nhật
        </button>
        }
        </>
      }
      </div>
      {
        props?.is_detail === true && 
        <div className={"dsjdksjskjdkasas"} style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 16,gap: 20 }}>
          <Popup desc="Đã chấp nhận khách sạn thành công" title={"Chấp nhận"} func={props?.approveHotel} />
          <Popup desc="Đã từ chối khách sạn thành công" title={"Từ chối"} func={props?.rejectHotel} />
        </div>
      }
    </div>
  );
};
export default RegisterHotel;
