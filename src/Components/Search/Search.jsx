import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import search_hotel from '../../api/search/search_hotel'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./Search.sass"

const Search = (props) => {
  return (
    <div className={"search-result"}>
      <MainSearch />
    </div>
  )
}

const MainSearch= (props)=> {
  const [minValue, setMinValue]= useState(0)
  const [maxValue, setMaxValue]= useState(5000000)
  const [result, setResult]= useState(()=> [])
  const [searchParams] = useSearchParams()
   useEffect(()=> {
      search_hotel(searchParams.get("spec"), setResult)
   }, [searchParams])
    return (
      <div className={"main-search-result"} style={{width: "100%", display: "flex", justifyContent: "space-between", padding: 20, gap: 30}}>
        <LeftSide setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} minValue={minValue} />
        <RightSide result={result} minValue={minValue} maxValue={maxValue} />
      </div>
    )
}



export default Search