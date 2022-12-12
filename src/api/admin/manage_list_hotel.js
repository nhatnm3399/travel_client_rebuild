import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const manage_list_hotel = async (setData) => {
  const res= await axios({
    url: SERVER_URL+ "/api/hotel/list",
    method: "get",
    headers: {
        "authorization": "Bearer "+ Cookies.get("accessToken")
    }
  })
  const result= await res.data
  return setData(result)
}

export default manage_list_hotel