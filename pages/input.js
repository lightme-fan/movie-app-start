import React, { useState } from 'react'

export function Input() {
  const [ inputValue, setInputValue ] = useState('')
  return (
      <>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </>
  )
}