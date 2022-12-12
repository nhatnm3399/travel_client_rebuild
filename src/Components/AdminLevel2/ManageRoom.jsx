import React from "react";
import {
  ItemOption,
  ItemOption2,
  TitleItem,
} from "../AdminLevel1/AddRoomForHotel";

const ManageRoom = (props) => {
  return (
    <div className={"fksdaskskalssasa"} style={{ width: "100%" }}>
      <C1 />
      <Main />
    </div>
  );
};

const C1 = (props) => {
  return (
    <div
      className={"vdkakldklsklsdkaaasaw"}
      style={{
        fontSize: 16,
        marginTop: 20,
        paddingBottom: 20,
        borderBottom: "1px solid #000",
      }}
    >
      <div className={"kjdklasklakslklas"} style={{ marginBottom: 12 }}>
        Thông tin chung
      </div>
      {/* ? */}
      <div className={"jdsklakklkasasas"}>
        <div
          className={"kakklsakakwaawwa"}
          style={{
            width: "100%",
            maxWidth: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
            height: 40,
          }}
        >
          <div className={"jfdkjsajajskjajas"}>Tên phòng</div>
          {/* rest */}
          <div className={"sklsaklklasklklas"}></div>
        </div>
      </div>
    </div>
  );
};

const Main = (props) => {
  return (
    <div className={"fkdkalskalrwarae"} style={{ width: "100%", padding: 10 }}>
      <div className={"vkdkskadfdsdssd"} style={{ marginBottom: 20 }}>
        Thông tin chính
      </div>
      <Tab1 />
      <BtnTab1 />
      <br />
      <br />
      <Tab2 />
    </div>
  );
};

const Tab1 = (props) => {
  return (
    <div
      className={"ksskasksaklasklas"}
      style={{
        width: "100%",
        padding: 10,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <ItemOption width={"calc(100% / 3)"} title={"*Loại phòng"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Giá phòng"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Số lượng giường phòng"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Diện tích"} />
    </div>
  );
};

const BtnTab1 = (props) => {
  return (
    <div
      className={"fkaskldkldklska"}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
        gap: 30,
      }}
    >
      <button
        className={"mdlkdskldklkaa"}
        style={{
          padding: "10px 30px",
          background: "#1164E0",
          cursor: "pointer",
          border: "none",
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        Sửa
      </button>
      <button
        className={"mdlkdskldklkaa"}
        style={{
          padding: "10px 30px",
          background: "red",
          cursor: "pointer",
          border: "none",
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        Xóa
      </button>
    </div>
  );
};

const Tab2 = (props) => {
  return (
    <div
      className={"fkjjjasjaskjasj"}
      style={{ width: "100%", padding: 10, borderTop: "1px solid #000" }}
    >
      <TitleItem title={"Tiện nghi và nội quy"} />
      <div
        className={"fgjkkdkldskldkla"}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <ItemOption2 type={"checkbox"} title={"Wifi"} />
        <ItemOption2 type={"checkbox"} title={"Máy lạnh"} />
        <ItemOption2 type={"checkbox"} title={"WC"} />
        <ItemOption2 type={"checkbox"} title={"Chỗ để xe"} />
      </div>
      <br />
      <TitleItem title={"Hướng nhìn"} />
      <div
        className={"fgjkkdkldskldkla"}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <ItemOption2 type={"checkbox"} title={"Núi"} />
        <ItemOption2 type={"checkbox"} title={"Biển"} />
        <ItemOption2 type={"checkbox"} title={"Sông"} />
      </div>
      <br />
      <TitleItem title={"Phòng tắm"} />
      <div
        className={"fgjkkdkldskldkla"}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <ItemOption2 title={"Đồ vệ sinh cá nhân"} />
        <ItemOption2 title={"Dép"} />
      </div>
      <br />
    </div>
  );
};

export default ManageRoom;
