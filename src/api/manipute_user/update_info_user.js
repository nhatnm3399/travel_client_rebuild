import axios from "axios"
import { SERVER_URL } from "../../config/config"

const update_info_user= async (userID)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/user/update/${userID}`,
        method: "put",
        
    })
}

export default update_info_user