import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const submit_feedback= async (hotel_id, user_id, star_point, comment, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/feedback/add-new",
        method: "post",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            hotel_id, user_id, star_point, comment
        }
    })
    const result= await res.data
    return setData(result)
}

export default submit_feedback