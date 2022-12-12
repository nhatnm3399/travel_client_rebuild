import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const delete_event= async (activitiesId)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/activities/delete/"+ activitiesId,
        method: "delete",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return console.log(result)
}

export default delete_event