import React from 'react'

const input = ({textArea,}) => {
  return (
    <p>
    <label></label>
    {textArea ? <textarea/> : <input/>}
    </p>
  )
}

export default input