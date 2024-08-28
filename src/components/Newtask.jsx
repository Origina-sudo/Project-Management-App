import React, { useState } from 'react'
import { useState } from 'react'

const Newtask = () => {
    const [enteredTask, setEnteredTask] = useState()
    
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }


  return (
      <div className='flex items-center gap-4'>
          <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200'
              onChange={handleChange}
          value={enteredTask}/>
          <button className='text-stone-700  hover:text-stone-950'>Add Task</button>
    </div>
  )
}

export default Newtask