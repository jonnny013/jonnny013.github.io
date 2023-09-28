import React from 'react'

const Display = (props) => {
  const display = props.display.toString()
  const fontSize = () => {
if (display.length > 14 ) {
  return "smallerText"
}
else {return "displayText"}
  }
  
  
  return (
    <>
        <div className='display'>
          <h2 className={fontSize()}>{props.display}</h2>
        </div>
    </>
  )
}

export default Display