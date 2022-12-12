import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const approve_hotel= async(bookingId, setData, setLoading)=> {
    setLoading(true)
    const res= await axios({
        url: SERVER_URL+ "/api/booking/approve/"+ bookingId,
        method: "put",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    setData(result)
}

export default approve_hotel