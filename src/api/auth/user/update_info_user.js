import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const update_info_user= async (full_name, phone, address, birthday, avatar, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/user/update/"+Cookies.get("uid"),
        method: "put",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            full_name, phone, address, birthday, avatar
        }
    })
    const result= await res.data
    return setData(result)
}

export default update_info_user