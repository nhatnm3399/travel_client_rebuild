import axios from "axios"
import { SERVER_URL } from "../../config/config"

const info_user= async (userId, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/user/detail/${userId}`,
        method: "get",
        
    })
    const result= await res.data
    return setData(result)
}

export default info_user