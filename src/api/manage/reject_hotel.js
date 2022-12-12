import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const reject_hotel = async (bookingId, setData) => {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/reject/"+ bookingId,
        method: "put",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        } 
    })
    const result= await res.data
    return setData(result)
}

export default reject_hotel
