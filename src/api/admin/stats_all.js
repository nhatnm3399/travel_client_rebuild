import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const stats_all= async (setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/revenue-report?startDate=01/01/2022&endDate=31/12/2022",
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default stats_all