import React from 'react'

export default function Card({cardHeader,
    cardText, 
    children,
    background= "transparent"}) {
    const cardStyle = {
        maxWidth: 400,
        minWidth: 400,
        boxShadow:"0 0.5rem 1rem rgba(224,221,221,0.15)",
        padding: "1rem",
        borderRadius: "5px",
        textAlign: "left",
        background: background,
        margin:"1rem",
    };

    const cardHeaderStyle = {
        maxWidth: 400,
        boxShadow:"0 0.5rem 1rem rgba(224,221,221,0.15)",
        padding: "1rem",
        borderRadius: "5px",
        borderColor: "#61dafb",
        color: "#61dafb",
        fontSize: "2.5rem",
    };

    const cardBodyStyle = {
        window: "100%",
        margin:"1rem 0",
        display:"flex",
        flexDirection: "column",
    };

    return (
    <div style={cardStyle}>
      {cardHeader && <div style={cardHeaderStyle}>
        {cardHeader}
        </div>}
        <div  style={cardBodyStyle}>
            <p>
                {cardText}
            </p>
            {children}
        </div>
    </div>
  );
}
