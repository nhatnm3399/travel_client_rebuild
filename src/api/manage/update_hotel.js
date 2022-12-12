import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const update_hotel= async (hotel_name, description, address, phone, image, image1, image2, image3, image4, city_id, latitude, longitude, check_in_time, check_out_time, is_payment_card, hotel_properties, hotelId, setData, setLoading)=> {
    setLoading(true)
    const res= await axios({
        url: SERVER_URL+ "/api/hotel/update/"+ hotelId,
        method: "put",
        data: {
            hotel_name, description, address, phone, image, image1, image2, image3, image4, city_id, latitude, longitude, check_in_time, check_out_time, is_payment_card: is_payment_card=== true ? "1" : "0", hotel_properties
        },
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default update_hotel