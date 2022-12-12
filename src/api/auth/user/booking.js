import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const booking= async (check_in, check_out, total_price, user_booking, phone, email, user_id, owner_id, room_type_id, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/add-new",
        method: "post",
        data: {
            check_in, check_out, total_price, user_booking, phone, email, user_id, owner_id, room_type_id
        },
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default booking  