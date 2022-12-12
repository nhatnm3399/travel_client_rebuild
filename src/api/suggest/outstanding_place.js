import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const outstanding_place= async (setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/home/top-city",
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })    
    const result= await res.data

    return setData(result)
}

export default outstanding_place