import React, { useState } from 'react'
import { Navigate } from 'react-router'
import getToken from '../tools/getToken';
import getUserProfile from '../tools/getUserProfile';
import { useDispatch } from 'react-redux'
import { login } from '../store/user'

export default function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidFields, setInvalidFields] = useState("");
    const [tokenExist, setTokenExist] = useState("");

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInvalidFields("");
        if (email === "" || password === "") {
          return setInvalidFields("Please fill fields correctly");
        } else {
            const token = await getToken(email, password)
            console.log(token)
            const user = await getUserProfile(token)
            console.log(user)
            setTokenExist(token)
            dispatch(login(user))
        }
    };

    if(tokenExist){
        return <Navigate to="/user" />
    } 

    return (
        <>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input autoFocus type="text" id="username" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div>{invalidFields}</div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <NavLink className="sign-in-button" to="/user" type="submit">Sign In</NavLink> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button className="sign-in-button" onClick={handleSubmit}>Sign In</button>
                    {/* <!--  --> */}
                </form>
            </section>
        </>
    )
}