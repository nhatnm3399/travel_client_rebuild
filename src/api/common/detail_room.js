import axios from "axios"
import { SERVER_URL } from "../../config/config"

const detail_room= async (idRoom, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/room-detail/${idRoom}`,
        method: "get"
    })
    const result= await res.data
    return setData(result)

}

export default detail_room