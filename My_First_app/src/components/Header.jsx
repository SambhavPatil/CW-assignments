import React from 'react'

export default function Header({children,headerText="Header"}) {
  return (
    <header style={{display:"flex",
     flexDirection:"column",
     border:"1px solid #fff",
     }}>
        <h2>{headerText}</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Sint eum eius, cum sequi ab
             perspiciatis exercitationem reprehenderit 
             dolorum iure, saepe, eligendi labore 
             cupiditate voluptates corrupti 
             blanditiis maiores aliquam quod quaerat.
        </p>
        {children}
    </header>
  )
}
