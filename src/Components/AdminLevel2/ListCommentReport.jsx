import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import get_list_report from '../../api/admin/get_list_report'
import { CommentsReport } from '../AdminLevel1/AdminLevel1'

const ListCommentReport = () => {
  const [data, setData]= useState([])
  useEffect(()=> {
    get_list_report(setData)
  }, [])
  return (
    <CommentsReport data={data} />
  )
}

export default ListCommentReport
