import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../config/config"

const event_nearly= async (setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/home/suggest-event",
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default event_nearly