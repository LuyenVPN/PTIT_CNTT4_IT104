import React from 'react'

interface ColorBoxProps {
  color: string
}

export default function ColorBox({ color }: ColorBoxProps) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        margin: "10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
      }}
    >
        Box
    </div>
      )
}
