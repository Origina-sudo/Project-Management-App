import React from 'react'

const Task = () => {
  return (
      <section>
          <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
          NEW TASK
          {/* Will render only conditionally */}
          <p className='text-stone-800 mt-4'>This Project does not have any tasks yet</p> 
          <ul></ul>
     </section>
      
  )
}

export default Task