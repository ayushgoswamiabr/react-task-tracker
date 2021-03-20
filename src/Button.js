import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,OnClick}) => {
  return (
            <button style={{backgroundColor: color}} className='btn' onClick={OnClick}>{text}</button>
            
    )
}

Button.propTypes  ={
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

Button.defaultProps = {
  color: 'blue',
  text: 'Add',
}



export default Button
