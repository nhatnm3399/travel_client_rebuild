import axios from "axios"
import { SERVER_URL } from "../../config/config"

const detail_hotel= async (idHotel, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/hotel-detail/${idHotel}`,
        method: "get"
    })
    const result= await res.data
    return setData(result)
}

export default detail_hotel