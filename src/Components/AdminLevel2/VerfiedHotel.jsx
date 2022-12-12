import React from 'react'
import { Verified } from '../AdminLevel1/AdminLevel1'

const VerfiedHotel = (props) => {
  return (
    <Verified data={props?.data} setData={props?.setData} />
  )
}

export default VerfiedHotel
