import axios from "axios"
import { SERVER_URL } from "../../config/config"

const delete_user= async (userId, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/user/delete/${userId}`,
        method: "delete",

    })
    const result= await res.data
    return setData(result)
}

export default delete_user