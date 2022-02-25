import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'

export default function Home(props) {
    return (
        <main>
            <Header isLoggedIn={false}/>
            <Hero/>
            <Features/>
        </main>
    )
}