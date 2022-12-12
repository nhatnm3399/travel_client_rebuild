import React from 'react'
import { Pending } from '../AdminLevel1/AdminLevel1'

const PendingHotel = (props) => {
  return (
    <Pending data={props?.data} setData={props?.setData} />
  )
}

export default PendingHotel
