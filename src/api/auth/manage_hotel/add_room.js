import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const add_room_hotel= async (type_room_name, price, number_people, room_area, image, image1, image2, image3, image4, hotel_id, properties, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/room/register",
        method: "post",
        data: {
            type_room_name, price, number_people, room_area, image, image1, image2, image3, image4, hotel_id, properties
        },
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default add_room_hotel