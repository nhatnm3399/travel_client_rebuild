import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const create_payment= async (booking_id, payment_method, total_amount, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/payment/create-payment",
        method: "POST",
        data: {
            booking_id, payment_method, total_amount
        },
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    window.location.href= result.payment_url
    return setData(result)
}

export default create_payment