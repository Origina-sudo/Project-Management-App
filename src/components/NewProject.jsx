import React from 'react'
import Input from './Inputs'
import { useRef } from 'react'
import Modal from './Modal';

const NewProject = ({onAdd, onCancel}) => {
  const modal = useRef();
const title=useRef();
const description=useRef();
const dueDate=useRef();

function handleSave(event) {
      const enteredTitle = title.current.value
      const enteredDescription = description.current.value
       const enteredDueDate = dueDate.current.value

       if (enteredTitle.trim() === "" ||
        enteredDescription.trim() === "" ||
         enteredDueDate.trim() === ""){
         modal.current.open();
         return
       }

onAdd({
  title: enteredTitle,
  description: enteredDescription,
  dueDate: enteredDueDate
});


}

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'> 
        <h2 className='text-xl font-bold text-stone-800 my-4'>Invalid Input</h2>
        <p className='text-stone-700 mb-4'>Ooops.. looks like you forgot to enter a value.</p>
        <p className='text-stone-700 mb-4 '>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4  '>
          <li><button onClick={ onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button
            onClick={handleSave} 
            className='bg-stone-800 text-stone-50
             hover:bg-stone-950 px-6 
             py-2 rounded-md'>Save</button></li>
        </menu> 
        <div>
       <Input type="text" ref={title} label="Title" />
       <Input ref={description} label="Description" textarea/>
       <Input  type="date" ref={dueDate}label="Due Date"/>
        </div>
        
    </div>
    </>

  )
}
///
export default NewProject