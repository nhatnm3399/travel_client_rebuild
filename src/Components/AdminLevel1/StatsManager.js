import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment';
import _ from 'lodash';
import stats from '../../api/admin/stats';
import {BiDownArrow} from "react-icons/bi"
import get_list_hotel from '../../api/manage/get_list_hotel';
import OutsideClickHandler from 'react-outside-click-handler';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Thống kê về khách sạn của bạn',
    },
  },
};

const labels = ['T1/2022', 'T2/2022', 'T3/2022', 'T4/2022', 'T5/2022', 'T6/2022', 'T7/2022', 'T8/2022', 'T9/2022', 'T10/2022', 'T11/2022', 'T12/2022'];



export default function StatsManager() {
  const [data1, setData1]= useState()
  const data = {
    labels,
    datasets: [
      {
        label: 'Doanh thu',
        data: [
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 1), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 2), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 3), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 4), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 5), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 6), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 7), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 8), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 9), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 10), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 11), function(e) {return parseFloat(e.total_amount)}),
        _.sumBy(data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 12), function(e) {return parseFloat(e.total_amount)}),
    
      ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Số lượng user đã đăng ký ',
        data: [
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 1)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 2)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 3)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 4)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 5)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 6)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 7)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 8)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 9)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 10)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 11)?.length,
          data1?.filter(item=> parseInt(moment(item?.create_date, "DD/MM/YYYY").format("MM")) === 12)?.length,
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };
  useEffect(()=> {
    stats(setData1)
  }, [])
  const [open, setOpen]= useState(false)
  const [data2, setData2]= useState([])
  
  return <>
    <div style={{position: "relative", width: "max-content"}}>
      <div onClick={()=> setOpen(prev=> !prev)} style={{fontSize: 18, fontWeight: 600}}>Tìm khách sạn của bạn muốn thống kê <BiDownArrow style={{width: 18, height: 18, cursor: "pointer"}} />
      {open=== true && <ListHotel data={data2} setData={setData2} setOpen={setOpen} />}
      </div>
    </div>
    {
      data2?.length > 0 && 
      <Bar options={options} data={data} />
    }
    {
      data2?.length <= 0 && <div style={{textAlign: "center", marginTop: 12}}>Chọn khách sạn mà bạn muốn thống kê</div>
    }
  </>;
}

const ListHotel= (props)=> {
  useEffect(()=> {
    get_list_hotel(props?.setData)
  }, [props?.setData])

  return (
    <OutsideClickHandler onOutsideClick={()=> props?.setOpen(false)}>
      <div className={"fjkldjksjkalsasfd"} style={{position: "absolute", left: "100%", top: 0, borderRadius: 5, border: "1px solid #e7e7e7", marginTop: 30, padding: 20, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", whiteSpace: "nowrap", zIndex: 99, background: "#fff"}}>
        {
          props?.data?.length === 0 && <div style={{textAlign: "center"}}>Bạn không quản lý khách sạn nào</div>
        }
      </div>
    </OutsideClickHandler>
  )
}