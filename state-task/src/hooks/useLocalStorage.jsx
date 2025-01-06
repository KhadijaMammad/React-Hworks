import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, initial) {
    const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initial)

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
  return [value, setValue]
}
