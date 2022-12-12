import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../config/config"

const detail_event= async (eventId, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/activities/detail/"+ eventId,
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default detail_event