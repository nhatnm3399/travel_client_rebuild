import axios from "axios"
import { SERVER_URL } from "../../config/config"

const history_booking= async(hotelId, startDate, endDate, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/revenue-report",
        method: "get",
        params: {
            hotelId, startDate, endDate
        }
    })
    const result= await res.data
    return setData(result)

}

export default history_booking