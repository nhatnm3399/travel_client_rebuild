import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const approve_hotel= async (hotelId, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "api/hotel/approve/"+ hotelId,
        method: "put",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default approve_hotel