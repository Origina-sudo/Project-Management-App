import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({children}) => {
  return (
  createPortal(  <dialog>
        {children}
    </dialog>)
  )
}

export default Modal