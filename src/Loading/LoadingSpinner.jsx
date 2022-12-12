import React from 'react'
import "./style.css"

const LoadingSpinner = ({style}) => {
  return (
    <div style={style}>
        <SvgComponent />
    </div>
  )
}

export default LoadingSpinner

const SvgComponent = () => (
    <svg className={"fkldjisdjkldsased"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx={50} cy={50} r={30} fill="transparent" strokeWidth={8} strokeDasharray={160} />
    </svg>
  )