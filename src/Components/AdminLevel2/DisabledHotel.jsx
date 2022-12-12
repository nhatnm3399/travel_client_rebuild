import React from 'react'
import { Disable } from '../AdminLevel1/AdminLevel1'

const DisabledHotel = (props) => {
  return (
    <Disable data={props?.data} setData={props?.setData} />
  )
}

export default DisabledHotel
