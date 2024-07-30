import React from 'react'

const NewProject = () => {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <p>
                <label htmlFor="">Title</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Description</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">DueDate</label>
                <textarea/>
            </p>
        </div>
        
    </div>
  )
}

export default NewProject