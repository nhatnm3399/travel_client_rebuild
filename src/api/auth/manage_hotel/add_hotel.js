import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const add_hotel= async (hotel_name, description, address, phone, image, image1, image2, image3, image4, city_id, latitude, longtitude, check_in_time, check_out_time, is_payment_card, owner_id, hotel_properties, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/hotel/register",
        method: "post",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            hotel_name, description, address, phone, image, image1, image2, image3, image4, city_id, latitude: latitude?.toString(), longitude: longtitude?.toString(), check_in_time, check_out_time, is_payment_card: is_payment_card=== true ? "1" : "0", owner_id, hotel_properties
        }
    })
    const result= await res.data
    return result
}

export default add_hotel