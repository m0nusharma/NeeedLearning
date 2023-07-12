import React from 'react'
import './Button.css'



const Button = ({item}) => {
  return ( 
    <button  type="button"  className='mainbotton btn btn-dark rounded-5'>{item}</button>
  )
}

export default Button