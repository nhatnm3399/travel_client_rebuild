import axios from "axios"
import Cookies from "js-cookie"
import _ from "lodash"
import { SERVER_URL } from "../../config/config"

const suggest_search= async (setData, setDataSuggest)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/home/list-city",
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    setDataSuggest(_.shuffle(res.data).slice(0, 6))
    return setData(result)
}

export default suggest_search