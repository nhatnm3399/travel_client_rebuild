import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const login= async (account, password, setData)=> {
    try {
        const res= await axios({
            url: `${SERVER_URL}/api/auth/signin`,
            method: "post",
            data: {
                username: account, password
            }
        })
        const result= await res.data
        console.log(result)
        if(result?.roles?.[0]=== "ROLE_ADMIN") {
            Cookies.set("accessToken", result.accessToken)
            Cookies.set("uid", result.id)
            setData("Đăng nhập thành công")
            return window.location.href= window.location.origin+ "/admin"
        }
        else if(result?.roles?.[0]=== "ROLE_MODERATOR") {
            Cookies.set("accessToken", result.accessToken)
            Cookies.set("uid", result.id)
            setData("Đăng nhập thành công")
            return window.location.href= window.location.origin+ "/manage"
        }
        else if(result?.accessToken?.length > 0) {
            Cookies.set("accessToken", result.accessToken)
            Cookies.set("uid", result.id)
            setData("Đăng nhập thành công")
            return window.location.reload()
        }
        else {
            return setData("Tài khoản hoặc mật khẩu không chính xác")
        }
        
    } catch (error) {
        return setData("Tài khoản hoặc mật khẩu không chính xác")
        
    }
}   

export default login