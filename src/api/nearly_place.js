// import axios from "axios"

import axios from "axios"

const nearly_place= async (longtitude, latitude, setData)=> {
    const res= await axios({
        url: "https://puzzled-uniform-hen.cyclic.app/nearly-place",
        method: "get",
        params: {
            longtitude, latitude
        }
        
    })
    const result= await res.data
    return setData(result)
}

export default nearly_place