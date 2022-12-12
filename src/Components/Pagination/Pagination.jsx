import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import * as Scroll from "react-scroll"

const PaginationPage = ({count, activePagination, setSearchParams, search, setCurrentPage, setOffSet}) => {
  const scroll= Scroll.animateScroll
  return (
    <div className={"fsjkdfjskfljkdasda"} style={{height: 50, direction: "rtl"}}>
        {
    <Pagination>
      {
        Array.from(Array(parseInt(count)).keys())?.reverse()?.map((item, key)=> <Pagination.Item active={parseInt(activePagination) === parseInt(item) ? true : false } key={key} onClick={()=> {
          setSearchParams({'spec': search, 'page': parseInt(item)})
          setCurrentPage(parseInt(item))
          setOffSet(parseInt(item) +1)
          scroll.scrollToTop({delay: 0})
        }}>{item}</Pagination.Item>)
      }
    </Pagination>
        }
    </div>
  )
}

export const Pagination2= ({count, activePagination, setSearchParams, search, setCurrentPage, setOffSet})=> {
  const scroll= Scroll.animateScroll
  return (
    <div className={"fsjkdfjskfljkdasda"} style={{height: 50, direction: "rtl"}}>
        {
    <Pagination>
      {
        Array.from(Array(parseInt(count)).keys())?.reverse()?.map((item, key)=> <Pagination.Item active={(parseInt(activePagination) === parseInt(item)) ? true : false } key={key} onClick={()=> {
          setSearchParams({'page': parseInt(item)})
          setCurrentPage(parseInt(item))
          setOffSet(parseInt(item) +1)
          scroll.scrollToTop({delay: 0})
        }}>{parseInt(item) + 1}</Pagination.Item>)
      }
    </Pagination>
        }
    </div>
  )
}


export default PaginationPage
