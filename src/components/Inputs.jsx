import React from 'react'

const Input = ({textarea,label,...props}) => {
    return (
      <p>
     <label >{label}</label>
     {textarea ? <textarea {...props}/> : <input {...props} />}
      </p>
    )
  }
   
  export default Input