import axios from "axios"
import { SERVER_URL } from "../../config/config"

const search_hotel= async (place, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/hotel-search`,
        method: "get",
        params: {
            param: place
        }
    })
    const result= await res.data
    return setData(result)
}

export default search_hotel