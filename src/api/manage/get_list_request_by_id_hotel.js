import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const get_list_request_by_id_hotel = async(idHotel, setData) => {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/list-request/"+ idHotel,
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default get_list_request_by_id_hotel
