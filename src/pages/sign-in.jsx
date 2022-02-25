import React from 'react'
import Header from '../components/header'
import LoginForm from '../components/loginForm'

export default function SignIn(props) {
    return (
        <>
            <Header isLoggedIn={false}/>
            <main className="main bg-dark">
                <LoginForm/>
            </main>
        </>
    )
}