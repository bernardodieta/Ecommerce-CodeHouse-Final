import React from 'react'
import { TbError404 } from "react-icons/tb";
import './notfound.css'


const NotFound = () => {
  return (
    <div className='not-found-container'>Page NotFound
        <TbError404 className='not-found'/>

    </div>
  )
}

export default NotFound