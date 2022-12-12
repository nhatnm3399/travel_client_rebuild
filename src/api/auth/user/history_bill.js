import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const history_bill= async (setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/bill/history/"+ Cookies.get("uid"),
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        method: "get"
    })
    const result= await res.data
    return setData(result)
}

export default history_bill