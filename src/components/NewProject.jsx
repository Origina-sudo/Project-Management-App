import React from 'react'
import Input from './Inputs'

const NewProject = () => {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
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