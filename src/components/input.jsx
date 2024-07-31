import React from 'react'

const Input = ({label,textArea,...props}) => {
  return (
    <p>
    <label></label>
    {textArea ? <textarea {...props}/> : <input {...props}/>}
    </p>
  )
}

export default Input 