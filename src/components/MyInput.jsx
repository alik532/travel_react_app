import React from 'react'

const MyInput = ({placeholder}) => {
  return (
    <input type="text" style={{backgroundColor: "transparent", padding: "10px", color: "gray", border: "1px gray solid", borderRadius: "7px"}} placeholder={placeholder}/>
  )
}

export default MyInput