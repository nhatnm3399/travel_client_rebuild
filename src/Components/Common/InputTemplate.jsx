import React from 'react'

const InputTemplate = ({className, onChange, value, placeholder, type, onFocus, onBlur, onClick, style, readOnly, name}) => {
  return (
    <input autoComplete={"off"} readOnly={readOnly} style={style} onClick={onClick} onFocus={onFocus} name={name} onBlur={onBlur} type={type} onChange={onChange} value={value} className={className} placeholder={placeholder} />
  )
}

export default InputTemplate