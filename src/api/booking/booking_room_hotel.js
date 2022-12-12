import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const booking_room_hotel= async (check_in, check_out, total_price, user_booking, phone, email, user_id, room_type_id, setData, owner_id= "123")=> {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/add-new",
        method: "post",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            check_in, check_out, total_price, user_booking, phone, email, user_id, room_type_id, owner_id
        }
    })
    const result= await res.data
    return result   
}

export default booking_room_hotel