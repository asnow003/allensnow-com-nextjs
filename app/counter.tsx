'use client'

import { useState, useEffect } from 'react'
import { Background } from './background'

export default function Counter() {

    useEffect(() => {
        const background = new Background([]);
    }, []); // Empty dependency array means this effect runs once after the initial render


    const [count, setCount] = useState(0)

    return (
        <></>
    )
}