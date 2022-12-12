import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const get_info_user= async (setData, setAuth)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/user/detail/"+ Cookies.get("uid"),
        method: "get", 
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const  result= await res.data
    if(result?.id?.length > 0) {
        setAuth(()=> true)
    }
    else {
        setAuth(()=> false)
    }
    return setData(result)
}

export default get_info_user