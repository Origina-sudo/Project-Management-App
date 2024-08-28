import React from 'react'

const Newtask = () => {
  return (
      <div className='flex items-center gap-4'>
          <input type="text"  className='w-64 px-2 py-1 rounded-sm'/>
          <button>Add Task</button>
    </div>
  )
}

export default Newtask