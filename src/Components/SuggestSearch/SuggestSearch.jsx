import React from 'react'
import { GoLocation} from "react-icons/go"
import "./SuggestSearch.sass"

const SuggestSearch = (props) => {

  const choosePlace= (place, id)=> {
    props.setValue(()=> place)
    props.setOpen(()=> false)
    props?.setIdCity(()=> id)
  }
  
  return (
    <div className={"suggest-search"} style={{width: "100%", padding: 20, background: "#fff", borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className={"dlksjdakljskdlfasd"} style={{marginBottom: 8, fontWeight: 600, fontSize: 15}}>
            Những địa điểm nổi tiếng gần bạn
        </div>
        <div style={{width: '100%', maxHeight: 300, overflow: "auto"}}>
        {
            props?.dataSuggest?.map((item, key)=> <div key={key} onClick={()=> choosePlace((item?.item?.city_name || item?.city_name), item?.item?.id)} className={"item-suggest-search"} style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 5px", borderRadius: 5, gap: 10}}>
                <div className={"fjksldjkalsjafadsas"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                    <GoLocation style={{width: 26, height: 26, color: "#333"}} />
                </div>
                <div className={"dsjlksjlskjakldfasdsasd"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                    <div className={""} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={item?.item?.city_image || item?.city_image} alt="can't open" style={{width: 48, height: 48, objectFit: "cover", borderRadius: "50%", background: "#d9d9d9"}} />
                    </div>
                    <div className={"gjskdjfdassasaasd"}>
                        <div className={"djsjakljdkslfjdassa"} style={{fontSize: 16, fontWeight: 600}}>
                            {item?.item?.city_name || item?.city_name}
                        </div>
                        <div className={"djaklsjalksjkldfjkasa"} style={{fontSize: 14, color: "#333"}}>
                            {item?.item?.province || item?.province}
                        </div>
                    </div>
                </div>
            </div>)
        }
        </div>
        {
            
        }
    </div>
  )
}

export default SuggestSearch