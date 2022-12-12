import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const delete_hotel_x= async (idHotel, setData, setLoading)=> {
    setLoading(true)
    const res= await axios({
        url: SERVER_URL+ "/api/hotel/delete/"+ idHotel,
        method: "delete",
        headers: {
            "authorization": "Bearer " + Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default delete_hotel_x