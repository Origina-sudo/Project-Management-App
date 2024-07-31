import React from 'react'
import Input from './Inputs'

const NewProject = () => {
  return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4  '>
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button className='bg-stone-800 text-stone-50
             hover:bg-stone-950 px-6 py-2 rounded-md'>Save</button></li>
        </menu> 
        <div>
       <Input label="Title"/>
       <Input label="Description" textarea/>
       <Input label="Due Date"/>
        </div>
        
    </div>
  )
}

export default NewProject