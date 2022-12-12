import React, { useContext, useEffect } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./AdminLevel1.sass";
import { MdDelete } from "react-icons/md";
// import { TiArrowBackOutline} from "react-icons/ti"
import { useState } from "react";
import DatePickerPlugin from "../Plugin/DatePicker";
import OutsideClickHandler from "react-outside-click-handler";
import moment from "moment";
import { Button } from "react-bootstrap";
import { uploadImageClient } from "../../firebase/config";
import add_new_event from "../../api/admin/add_new_event";
// import validUrl from "valid-url"
import { ImForward } from "react-icons/im";
import { NavigationHeritage } from "../AdminLevel2/AdminLevel2";
import ListHotel from "./ListHotel";
import RegisterHotel from "./RegisterHotel";
import RequestBookingRoom from "../AdminLevel2/RequestBookingRoom";
import AddRoomForHotel from "./AddRoomForHotel";
import StatsManager from "./StatsManager";
// import PaginationPage from '../Pagination/Pagination';
import { AppContext } from "../../App";
import { AiOutlineFolderView } from "react-icons/ai";
import delete_hotel from "../../api/admin/delete_hotel";
// import Snackbar from "../Snackbar/Snackbar";
import HistoryBooking from "./HistoryBooking";
import list_activities from "../../api/admin/list_activities";
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import delete_event from "../../api/admin/delete_event";
import PopupSnackBar from "../PopupConfirm/PopupSnackBar";

const AdminLevel1 = (props) => {
  return (
    <div className={"djsklsjaksjasa"} style={{ width: "100%" }}>
      <div
        className={"sdkljdakldjkas"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Navigation />
        <Main />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  return (
    <div
      className={"jaksjakdslkdass"}
      style={{
        background: "#fff",
        minHeight: "100vh",
        width: 300,
        padding: 20,
      }}
    >
      {/* <NavigationHeritage
          text={"Quản lý khách sạn"}
          array_link={[
            { link: "/manage/hotel/general", text: "Danh sách khách sạn" },
            { link: "/manage/hotel/add-new", text: "Đăng ký thêm khách sạn" },
            { link: "/manage/hotel/edit", text: "Chỉnh sửa thông tin khách sạn" },
          ]}
          linkLv1={"/manage/hotel/general"}
        /> */}
      <NavigationHeritage
        text={"Danh sách khách sạn"}
        link={"/manage/hotel/general"}
      />
      <NavigationHeritage
        text={"Thêm khách sạn"}
        link={"/manage/hotel/add-new"}
      />
      <NavigationHeritage
        text={"Chỉnh sửa khách sạn"}
        link={"/manage/hotel/edit"}
      />
      <NavigationHeritage
        text={"Yêu cầu đặt phòng"}
        link={"/manage/request/booking"}
      />
      <NavigationHeritage
        text={"Thống kê khách sạn"}
        link={"/manage/stats/hotel"}
      />
      <NavigationHeritage 
        text={"Lịch sử đặt phòng"}
        link={"/manage/history/booking"}
      />
    </div>
  );
};
const Main = (props) => {
  return (
    <div
      className={"alksjklrjwkeawsa"}
      style={{
        flex: "1 1 0",
        padding: 20,
        background: "#e4f2fd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={"djkcskljcfcaxsa"}
        style={{
          width: "100%",
          borderRadius: 10,
          background: "#fff",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route
            path={"/"}
            element={<Navigate to={"/manage/hotel/general"} />}
          />
          <Route path={"/hotel/general"} element={<ListHotel />} />
          <Route path={"/hotel/add-new"} element={<RegisterHotel />} />
          <Route path={"/hotel/add/new/room"} element={<AddRoomForHotel />} />
          <Route path={"/hotel/list/disabled/*"} element={<Disable />} />
          <Route path={"/comment/reports/*"} element={<CommentsReport />} />
          <Route path={"/events"} element={<ListEvents />} />
          <Route path={"/events/add/new"} element={<AddNewEvent />} />
          <Route path={"/request/booking"} element={<RequestBookingRoom />} />
          <Route path={"/history/booking"} element={<HistoryBooking />} />
          <Route
            path={"/hotel/edit"}
            element={<RegisterHotel is_edit={true} />}
          />
          <Route
            path={"/hotel/manage/edit/room"}
            element={<AddRoomForHotel is_edit={true} />}
          />
          <Route path={"/stats/hotel"} element={<StatsManager />} />
        </Routes>
      </div>
    </div>
  );
};

export const Verified = (props) => {
  return (
    <>
      <Title title={"Danh sách khách sạn đang hoạt động"} />
      <MainElementList
        data={props.data}
        setData={props?.setData}
        type={"Censored Hotel"}
      />
    </>
  );
};

export const Pending = (props) => {
  return (
    <>
      <Title title={"Danh sách khách sạn đang chờ duyệt"} />
      <MainElementList
        pending={true}
        data={props?.data}
        setData={props?.setData}
        type={"Waiting Approve"}
      />
      {/* {
                <PaginationPage />
            } */}
    </>
  );
};

export const Disable = (props) => {
  return (
    <>
      <Title title={"Danh sách khách sạn đã bị vô hiệu hóa"} />
      <MainElementList
        data={props?.data}
        setData={props?.setData}
        type={"Deleted Hotel"}
      />
      {/* {
                <PaginationPage />
            } */}
    </>
  );
};

export const CommentsReport = (props) => {
  return (
    <>
      <Title title={"List comment bị report"} />
      <MainListCommentReport data={props?.data} />
    </>
  );
};

export const ListEvents = (props) => {
  // eslint-disable-next-line
  const [data, setData]= useState([])
  useEffect(()=> {
    list_activities(setData)
  }, [])
  return (
    <>
      <Title title={"List sự kiện"} is_add_event={true} />
      <MainElementEvent data={data} setData={setData} />
    </>
  );
};

export const AddNewEvent = (props) => {
  return (
    <>
      <Title title={"Thêm sự kiện"} />
      <MainAddEvent />
    </>
  );
};

const Title = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={"dslksjaklsjklsdjas"}
      style={{ marginBottom: 16, padding: "0 10px", width: "100%" }}
    >
      <div
        className={"jlsjkasjasjksaask"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 10,
          marginBottom: 8,
          borderBottom: "1px solid #e7e7e7",
          paddingTop: 10,
        }}
      >
        <div
          className={"djkasjaksjasaas"}
          style={{ fontSize: 20, fontWeight: 600 }}
        >
          {props.title}
        </div>
        {props.is_add_event === true && (
          <button
            style={{
              width: 200,
              height: 50,
              background: "#2DB83B",
              color: "#fff",
              cursor: "pointer",
              border: "none",
              outline: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 18,
              fontWeight: 600,
              borderRadius: 10,
            }}
            onClick={() => navigate("/admin/event/manage/add/new")}
          >
            Thêm event
          </button>
        )}
      </div>
    </div>
  );
};

const MainElementEvent = (props) => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup]= useState(false)
  const [openSnackbar, setOpenSnackbar]= useState(false)
  const [messageSnackbar, setMessageSnackbar]= useState("")
  const [idEvent, setIdEvent]= useState("")
  const deleteEvent= (idEvent)=> {
    setIdEvent(idEvent)
    setOpenPopup(true)
  }
  return (
   <>
     <table
      className={"jskldjakdjskdalks"}
      style={{
        width: "100%",
        padding: "0 30px",
        borderSpacing: 10,
        borderCollapse: "separate",
      }}
    >
      <thead
        className={"jskldjklajsakslas"}
        style={{
          width: "100%",
          paddingBottom: 10,
          borderBottom: "1px solid #000",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <th
          className={"djlasjkjddaksa"}
          style={{ fontSize: 18, fontWeight: 600 }}
        >
          Tên sự kiện
        </th>
        <th
          className={"djlasjkjddaksa"}
          style={{ fontSize: 18, fontWeight: 600 }}
        >
          Thời gian bắt đầu
        </th>
        <th
          className={"djlasjkjddaksa"}
          style={{ fontSize: 18, fontWeight: 600 }}
        >
          Thời gian kết thúc 
        </th>
        <th
          className={"djlasjkjddaksa"}
          style={{ fontSize: 18, fontWeight: 600 }}
        >
          Hình ảnh
        </th>
        <th
          className={"djlasjkjddaksa"}
          style={{ fontSize: 18, fontWeight: 600 }}
        >
          Hành động
        </th>
      </thead>
      <tbody style={{ width: "100%" }}>
        {
          props?.data?.map((item, key)=> <tr key={key}
          className={"djskldjaksjakass"}
          style={{
            width: "100%",
            padding: "10px 20px",
            marginBottom: 16,
            height: "max-content",
          }}
        >
          <td
            className={"djsjaksjaksjska"}
            style={{ fontSize: 16, textAlign: "center", height: "max-content" }}
          >
            {item?.name_activities}
          </td>
          <td
            className={"akljkdsjklfdajkd"}
            style={{ fontSize: 16, textAlign: "center", height: "max-content" }}
          >
            {moment(item?.start_time, "DDMMYYYY").format("DD-MM-YYYY")}
          </td>
          <td
            className={"akljkdsjklfdajkd"}
            style={{ fontSize: 16, textAlign: "center", height: "max-content" }}
          >
            {moment(item?.end_time, "DDMMYYYY").format("DD-MM-YYYY")}
          </td>
          <td
            className={"dsjkdjkasjaskassa"}
            style={{ textAlign: "center", height: "max-content" }}
          >
            <img
              alt=""
              src={item.image}
              className={"djkasjaksjasksa"}
              style={{
                width: "100%",
                maxWidth: 130,
                height: "auto",
                aspectRatio: 8 / 5,
                background: "#fff",
                border: "1px solid #e7e7e7",
              }}
              role={"img"}
            ></img>
          </td>
          <td
            className={"jdksdjaksjkasasas"}
            style={{ textAlign: "center", verticalAlign: "middle" }}
          >
            <button
              className={"jkldjkldsjksakas"}
              style={{
                color: "#fff",
                backgroundColor: "red",
                width: 60,
                height: 30,
                border: "none",
                outline: "none",
                cursor: "pointer",
                borderRadius: 5 
              }}
              onClick={()=> deleteEvent(item.id)}
            >
              Xóa
            </button>
          </td>
        </tr>)
        }
        
      </tbody>
    </table>
    <PopupConfirm func={()=> delete_event(idEvent)} open={openPopup} setOpen={setOpenPopup} title={"Thông báo"} content={"Bạn có chắc muốn xóa sự kiện này không?"} setMessageSnackbar={setMessageSnackbar} setOpenSnackbar={setOpenSnackbar}  />
    
   </>
  );
};

const MainElementList = (props) => {
  // eslint-disable-next-line
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup]= useState(false)
  const [openSnackbar, setOpenSnackbar]= useState(false)
  const [messageSnackbar, setMessageSnackbar]= useState("")
  const [idHotel, setIdHotel]= useState("")
  const deleteHotel = async (idHotel) => {
    setIdHotel(idHotel)
    setOpenPopup(true)
  };

  const func= async ()=> {
    await delete_hotel(idHotel, setData, setLoading);

    props?.setData(
      props?.data?.filter((item) => parseInt(item.id) !== parseInt(idHotel))
    );
  }
  return (
    <div
      className={"jskldjakdjskdalks"}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {props?.data
        ?.filter((item) => item?.status_hotel === props?.type)
        ?.map((item, key) => (
          <div
            key={key}
            className={"jdfljdkalsdasa "}
            style={{ width: "calc(100% / 3)", padding: 10 }}
          >
            <div
              className={"jlkdjkasdjkasas"}
              style={{
                width: "100%",
                padding: 10,
                background: "#fff",
                borderRadius: 5,
                border: "1px solid #e7e7e7",
              }}
            >
              <div
                className={"kssjkajskasaas"}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div className="dhsdljajskljassa">
                  {
                    props?.pending=== true && <Link to={"/check/hotel/"+ item?.id}>
                      <div
                          className="sljflkjeklasjas"
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: "#2e89fff",
                            marginBottom: 12,
                          }}
                        >
                          Tên khách sạn: {item?.title}
                        </div>
                    </Link>
                  }
                  {
                    props?.pending !== true && <div
                          className="sljflkjeklasjas"
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: "#2e89fff",
                            marginBottom: 12,
                          }}
                        >
                          Tên khách sạn: {item?.title}
                        </div>
                  }
                  <div
                    className="djasjklasjklasjas"
                    style={{ color: "#2e89ff", fontSize: 14 }}
                  >
                    Địa chỉ: {item?.address}
                  </div>
                </div>
                {props?.type === "Waiting Approve" && (
                  <div
                    title={"Chấp nhận"}
                    className={"fjhlksjlkasjassasa"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineFolderView style={{ width: 36, height: 36 }} />
                  </div>
                )}
                {props?.type === "Deleted Hotel" && (
                  <div
                    onClick={() => deleteHotel(item?.id)}
                    title={"Xóa khách sạn"}
                    className={"fjhlksjlkasjassasa"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <MdDelete style={{ width: 36, height: 36 }} />
                  </div>
                )}
                {props?.type === "Censored Hotel" && (
                  <div
                    onClick={() => deleteHotel(item?.id)}
                    title={"Xóa khách sạn"}
                    className={"fjhlksjlkasjassasa"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <MdDelete style={{ width: 36, height: 36 }} />
                  </div>
                )}
              </div>
              {/*  */}
              <div
                className={"djklsjdaksjkfsad"}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div
                  className={"jlkdsjakjskassaas"}
                  style={{ fontSize: 18, fontWeight: 600 }}
                >
                </div>
                <div
                  className={"jklsjaksjkasaas"}
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  Số điện thoại: 0{item?.phone}
                </div>
              </div>
              <div
                className={"jlksjaklsjkajakssa"}
                style={{ width: "100%", marginBottom: 16 }}
              >
                <div
                  className={"fjskldjaksjaksaas"}
                  style={{
                    width: "100%",
                    aspectRatio: 8 / 5,
                    height: "auto",
                    background: "#fff",
                  }}
                >
                  {
                    <img
                      src={item?.image}
                      alt="😂😂😂"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                </div>
              </div>
              <div className={"djksjklsajklasjklsa"}>
                <div
                  className={"fklsjaklsjaklsjasa"}
                  style={{ fontSize: 18, fontWeight: 600 }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      {/* {loading === true && (
        <Snackbar
          show={loading}
          setShow={setLoading}
          title={"Thông báo"}
          description={"Đã xóa khách sạn thành công"}
        />F
      )} */}
      {
        openPopup=== true && <PopupConfirm setOpenSnackbar={setOpenSnackbar} open={openPopup} setOpen={setOpenPopup} title={"Thông báo"} content={"Bạn có chắc muốn xóa khách sạn này ?"} messageSnackbar={"Bạn đã xóa khách sạn thành công"} setMessageSnackbar={setMessageSnackbar} func={func} />
      }
      {
        openSnackbar=== true && <PopupSnackBar open={openSnackbar} setOpen={setOpenSnackbar} alert={messageSnackbar} />
      }
      {/*  */}
    </div>
  );
};

const MainListCommentReport = (props) => {
  return (
    <div
      className={"djlksjkljdksdasas"}
      style={{ marginTop: 20, width: "100%", padding: "0 30px" }}
    >
      <table className={"fjkdjkjdksdas"} style={{ width: "100%" }}>
        {
          <thead
            className={"jskldjklajsakslas"}
            style={{
              width: "100%",
              paddingBottom: 10,
              borderBottom: "1px solid #000",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <tr>
              <th
                className={"djlasjkjddaksa"}
                style={{ fontSize: 18, fontWeight: 600 }}
              >
                Tên người dùng
              </th>
              <th
                className={"djlasjkjddaksa"}
                style={{ fontSize: 18, fontWeight: 600 }}
              >
                Comment bị report
              </th>
              <th
                className={"djlasjkjddaksa"}
                style={{ fontSize: 18, fontWeight: 600 }}
              >
                Hành động
              </th>
            </tr>
          </thead>
        }
        {/*  */}
        {props?.data?.map((item, key) => (
          <tbody
            className={"djskldjaksjakass"}
            style={{ width: "100%", padding: "10px 20px", marginBottom: 16 }}
          >
            <tr className={"fjkddsjfkjdakasas"}>
              <td
                className={"sdnajksjsjaksas"}
                style={{ fontSize: 18, fontWeight: 600, textAlign: "center" }}
              >
                {item?.full_name}
              </td>
              <td
                className={"jkdsjaklsjkalej"}
                style={{ fontSize: 18, fontWeight: 600, textAlign: "center" }}
              >
                {item?.comment}
              </td>
              <td
                className={"sdnajksjsjaksas"}
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                  textAlign: "center",
                }}
              >
                <td
                  className={"kdalkdjkawjwkawe"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <MdDelete style={{ width: 36, height: 36 }} />
                </td>
                <td
                  className={"kdalkdjkawjwkawe"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <ImForward style={{ width: 36, height: 36 }} />
                </td>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

const MainAddEvent = (props) => {
  const { user } = useContext(AppContext);
  const [place, setPlace] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState([]);
  const [description, setDescription] = useState("");
  // eslint-disable-next-line
  const [description1, setDescription1] = useState();
  // eslint-disable-next-line
  const [description2, setDescription2] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [listImg, setListImg] = useState([]);
  const checkImg = img.length > 0 ? true : false;
  const handleImg = (e) => {
    Object.values(e.target.files).map((item) =>
      setImg((prev) => [
        ...prev,
        {
          img: item,
          previewImg: URL.createObjectURL(item),
          key: item.lastModified,
        },
      ])
    );
  };
  const add_event = async () => {
    const list_img_final_unresolve = img?.map((item) =>
      uploadImageClient(item.img, setListImg)
    );
    const result = await Promise.all(list_img_final_unresolve);
    add_new_event(
      place,
      title,
      result[0],
      result[1],
      result[2],
      startDate,
      endDate,
      description,
      description1,
      description2,
      "100",
      "100",
      user?.full_name,
      setData
    );
  };
  return (
    <div
      className={"fsjkdjksdjsdkaas"}
      style={{
        width: "100%",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={"fdjskldjksfjksaasds"} style={{width: "100% "}}>
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            marginBottom: 20,
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Địa điểm
          </div>
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <input
              onChange={(e) => setPlace(e.target.value)}
              type="text"
              style={{
                width: "100%",
                height: 60,
                padding: 10,
                background: "#fff",
                border: "1px solid #e7e7e7",
                borderRadius: 5,
                fontWeight: 600,
              }}
            />
          </div>
        </div>
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Tên sự kiện
          </div>
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              style={{
                width: "100%",
                height: 60,
                padding: 10,
                background: "#fff",
                border: "1px solid #e7e7e7",
                borderRadius: 5,
                fontWeight: 600,
              }}
            />
          </div>
        </div>
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
            position: "relative",
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Thời gian diễn ra sự kiện
          </div>
          <div
            onChange={() => {}}
            onClick={() => setOpen((prev) => !prev)}
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              value={`${moment(startDate).format("DD/MM/YYYY")} - ${moment(
                endDate
              ).format("DD/MM/YYYY")}`}
              type="text"
              style={{
                width: "100%",
                height: 60,
                padding: 10,
                background: "#fff",
                border: "1px solid #e7e7e7",
                borderRadius: 5,
                fontWeight: 600,
              }}
            />
          </div>
          {open === true && (
            <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
              <div
                className={"jfksdskjsjsdasa"}
                style={{ position: "absolute", bottom: 0, left: 0 }}
              >
                <DatePickerPlugin
                  startDate={startDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  setStartDate={setStartDate}
                  setOpen={setOpen}
                />
              </div>
            </OutsideClickHandler>
          )}
        </div>
        {/*  */}
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Nội dung
          </div>
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              style={{
                width: "100%",
                height: 60,
                padding: 10,
                background: "#fff",
                border: "1px solid #e7e7e7",
                borderRadius: 5,
                fontWeight: 600,
              }}
            />
          </div>
        </div>
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Miêu tả 1:
          </div>
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              onChange={(e) => setDescription1(e.target.value)}
              type="text"
              style={{
                width: "100%",
                height: 60,
                padding: 10,
                background: "#fff",
                border: "1px solid #e7e7e7",
                borderRadius: 5,
                fontWeight: 600,
              }}
            />
          </div>
        </div>
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Miêu tả 2:
          </div>
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              onChange={(e) => setDescription2(e.target.value)}
              type="text"
              style={{
                width: "100%",
                height: 60,
                padding: 10,
                background: "#fff",
                border: "1px solid #e7e7e7",
                borderRadius: 5,
                fontWeight: 600,
              }}
            />
          </div>
        </div>
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
          }}
        >
          <div
            className={"dskjdaksjaskasjksa"}
            style={{ fontSize: 24, fontWeight: 600, width: 200, maxWidth: 200 }}
          >
            Hình ảnh
          </div>
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={"fioeujioasujsd"}
              style={{
                width: "100%",
                height: 250,
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                borderRadius: 5,
                fontWeight: 600,
                border: "1px solid #e7e7e7",
              }}
            >
              {checkImg === false && (
                <>
                  <button
                    style={{
                      width: 200,
                      height: 50,
                      padding: 10,
                      background: "#C311E0",
                      border: "none",
                      color: "#fff",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      borderRadius: 5,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Thêm ảnh{" "}
                    <span style={{ fontSize: 12 }}>
                      &nbsp;(Chọn đúng 3 ảnh)
                    </span>{" "}
                  </button>
                  <input
                    onChange={handleImg}
                    multiple
                    type="file"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                      zIndex: 13,
                      cursor: "pointer",
                    }}
                  />
                </>
              )}
              {checkImg === true && (
                <div>
                  <div>
                    {img.map((item, key) => (
                      <img
                        key={key}
                        src={item.previewImg}
                        alt=""
                        style={{
                          width: 120,
                          height: "calc(120px * 9 /16)",
                          objectFit: "cover",
                          borderRadius: 4,
                          marginRight: 5,
                        }}
                      />
                    ))}
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className={""}
                  >
                    <Button
                      onClick={() => setImg(undefined)}
                      variant={"primary"}
                    >
                      Hủy
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className={"djslkdjkasjkaskjas"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            width: "100%",
            maxWidth: "100%",
            marginTop: 20,
            flexDirection: "row-reverse",
          }}
        >
          <div
            className={"jdfskldjakjsakdas"}
            style={{
            flex: "1 1 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={"fioeujioasujsd"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={add_event}
                style={{
                  width: 200,
                  height: 60,
                  padding: 10,
                  background: "#2DB83B",
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: 18,
                  borderRadius: 5,
                }}
              >
                Lưu{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLevel1;
