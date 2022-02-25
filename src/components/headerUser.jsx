import React from "react"
import logo from "../image/argentBankLogo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/user'
/* import removeToken from "../tools/removeToken" */

export default function HeaderUser(props) {
    const user = useSelector((state)=>state.user.logged)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        dispatch(logout())
        navigate('/')
    }

    return ( 
        <>  
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink class="main-nav-item" to="/user">
                        <i class="fa fa-user-circle"></i>
                        {user.firstName}
                    </NavLink>
                    <NavLink class="main-nav-item" onClick={handleSignOut} to="/">
                        <i class="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

