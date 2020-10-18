import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

import { UserContext } from '../../App'


const Signin = () => {

    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password
        })
    };

    const authCheck = () => {

        /* eslint-disable-next-line */
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
            return
        }

        if (password === "") {
            M.toast({ html: "Please input a valid password", classes: "#c62828 red darken-3" })
            return
        }



        fetch('http://localhost:5000/signin', requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log(data)
                if (data.error) {
                    return M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }

                M.toast({ html: "Hi " + data.user.name, classes: "#388e3c green darken- 2" })
                dispatch({ type: "USER", payload: data })
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                history.push("/")

            })

    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="insta-heading">Instagram</h2>
                <input type="text" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Email" />
                <input type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />

                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 signin-button"
                    onClick={() => {
                        authCheck()
                    }}
                >
                    Signin
                </button>
                <h6>
                    <Link to="/signup">Don't have an account? </Link>
                </h6>

            </div>
        </div>
    )

}

export default Signin
