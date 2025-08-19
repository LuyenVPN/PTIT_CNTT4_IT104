import React from 'react'

export default function Calculation() {
    const a=10
    const b=10
  return (
    <div>
       <h2>Danh sach ket qua</h2>
      <ul>
        <li>{a} + {b} = {a+b}</li>
        <li>{a} - {b} = {a-b}</li>
        <li>{a} * {b} = {a* b}</li>
        <li>{a} / {b} = {a/b}</li>
      </ul>
    </div>
  )
}
