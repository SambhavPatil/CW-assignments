import React from 'react'

function Button({classes, text="Button",icon, handleEvent}) {
    // function handleEvent() {
    //     console.log("click");
    // }
  return (
  <button className={`btn ${classes}`} onClick={handleEvent}>
    {icon}
    {text}
    </button>
    );
}
export default Button;