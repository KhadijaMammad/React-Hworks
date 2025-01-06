import React from 'react'
import useCounter from './hooks/useCounter'

export default function Counter() {
    const [value, increase, decrease] = useCounter();

  return (
    <div>
        <h2>Counter</h2>
        <button onClick={()=>increase()}>+</button>
        <span>{value}</span>
        <button onClick={()=>decrease()}>-</button>
    </div>
  )
}
