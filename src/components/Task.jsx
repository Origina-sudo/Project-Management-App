import React from 'react'
import Newtask from './Newtask'
const Task = ({onAdd, onDelete}) => {
  return (
      <section>
          <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
          <Newtask onAdd={onAdd} />
          {/* Will render only conditionally */}
          <p className='text-stone-800 my-4'>This Project does not have any tasks yet</p> 
          <ul></ul>
     </section>
      
  )
}

export default Task