import axios from "axios"
import Cookies from "js-cookie"
import moment from "moment"
import { SERVER_URL } from "../../config/config"

const add_new_event= async (place, title,image,image1, image2, start_time, end_time, description, description1, description2,latitude,longitude,user_name ,setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/activities/add-new",
        method :"post",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            name_activities: place, title,image,image1,image2,startTime: moment(start_time).format("DDMMYYYY"),endTime: moment(end_time).format("DDMMYYYY"), description, description1, description2,latitude,longitude,user_name
        }
    })
    const result= await res.data
    return setData(result)
}

export default add_new_event