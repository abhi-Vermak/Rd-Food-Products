import React from 'react'

export default function Raf() {
    const ClickMe = () =>{
        console.log("click Me ")
    }
  return (
    <div>
      <button onClick={ClickMe}>Click Me</button>
    </div>
  )
}
