import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import history_bill from '../../api/auth/user/history_bill'
import { NumericFormat } from 'react-number-format';
import { Pagination2 } from '../Pagination/Pagination'

const ListBill = (props) => { 
    const [data, setData]= useState([])
    const [searchParams, setSearchParams]= useSearchParams()
    // const [sort, setSort]= useState([''])
    // eslint-disable-next-line
    const [page, setPage]= useState(10)
    const [offSet, setOffSet]= useState(1)
    const [currentPage, setCurrentPage]= useState(1)
    useEffect(()=> {
        history_bill(setData)
    }, [])
  return (
    <div className={"fjsahjdksdjkldadsa"} style={{width: "100%", minHeight: "100vh"}}>
        <div className={"fdjkdjkfjkdass flexCenterItem"} style={{width: "100%", padding: 10}}>
            <div className={"fkklsdklgkklaskdas"} style={{width: '100%', maxWidth: 1116}}>
                <table className={"dfjksfjkdjgfkkdas"} style={{width: "100%"}} cellSpacing={28} cellPadding={20}>
                    <thead className={"dfdmksdjkgjdsas"} style={{width: "100%"}}>
                        <tr className={"fjkldjkgjdksldssd"}>
                            <th className={"fkdldkfdjskdljksa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Hóa đơn</th>
                            <th className={"fjkdjfdkjdskjsaksa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Trạng thái hóa đơn</th>
                            <th className={"fsklfjdkdjskjkaeaw"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Hình thức thanh toán</th>
                            <th className={"djdsjkkjfkjaskasjsa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Tổng tiền</th>
                            <th className={"fjkdjksdjskdsjkasjsa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody className={"fkdjsdjkshfjdhajlsas"} style={{width: "100%"}}>
                        {
                            data?.slice(parseInt(page) * offSet - 10, parseInt(page) * offSet)?.map((item, key)=> <ItemListBill key={key} x1={item?.id} x2={item?.status_bill} x3={item?.payment_method} x4={<NumericFormat value= {item?.total_amount} thousandSeparator={","} displayType="text" renderText={(value) => <>{value.replaceAll(",", ".")}</>} />} x5={"Xem hóa đơn"} />)
                        }
                    </tbody>
                </table>
                <Pagination2  setOffSet={setOffSet} search={searchParams.get("spec")} setSearchParams={setSearchParams} count={Math.ceil(parseInt(data?.length) / page)} activePagination={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    </div>
  )
}

export default ListBill

const ItemListBill= (props)=> {
    const navigate= useNavigate()

    return (
        <tr className={"fdjsdjkskjsdkdgjsdas"}>
            <td className={"fjsklgjkfjkjakasjaks"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x1}</td>
            <td className={"fnjdhjkhajsdhjashjas"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x2}</td>
            <td className={"fileuyehskjskhajkssa"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x3}</td>
            <td className={"bvncjknbjaksbagawawa"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x4}</td>
            <td className={"tjioeuyuhrsjksahdjka"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>
                <Button onClick={()=> navigate("/booking/payment?id_payment=1")} variant={"primary"}>{props.x5}</Button>
            </td>
        </tr>
    )
}