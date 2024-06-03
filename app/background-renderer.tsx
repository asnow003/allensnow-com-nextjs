'use client'

import { useEffect } from 'react'
import { Background } from './background'

export default function BackgroundRenderer() {

    useEffect(() => {
        const background = new Background([]);
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <></>
    )
}