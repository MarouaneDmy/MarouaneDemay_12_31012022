import React from 'react'
import Header from '../components/header'
import EditButton from '../components/editButton'
import Accounts from '../components/accounts'

export default function User(props) {
    return (
        <>
            <Header isLoggedIn={true}/>
            <main className='main bg-dark'> 
                <EditButton/>
                <Accounts/>
            </main>
        </>
    )
}