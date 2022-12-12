import React from 'react'

const ButtonTemplate = ({className, onClick, disable, children, style}) => {
  return (
    <button style={style} className={className} onClick={onClick} disabled={disable}>{children}</button>
  ) 
}

export default ButtonTemplate