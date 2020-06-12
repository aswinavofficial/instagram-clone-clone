import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'


const Signup = () => {

    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            password
        })
    };

    const postData = () => {


        /* eslint-disable-next-line */
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
            return
        }

        if (name === "") {
            M.toast({ html: "Please input a valid name", classes: "#c62828 red darken-3" })
            return
        }

        if (password === "") {
            M.toast({ html: "Please input a valid password", classes: "#c62828 red darken-3" })
            return
        }
        fetch('https://insta-cloner.herokuapp.com/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.message) {
                    M.toast({ html: data.message, classes: "#388e3c green darken- 2" })
                    history.push('/signin')
                }
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })


                }
            }).catch(error => {
                console.log(error)
                M.toast({ html: error.message, classes: "#c62828 red darken-3" })

            })
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="insta-heading">Instagram </h2>
                <input type="text" placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <input type="text" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Email" />
                <input type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />

                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 signup-button"
                    onClick={() => postData()}>
                    Signup
                </button>

                <h6>
                    <Link to="/signin">Have an account? </Link>
                </h6>
            </div>
        </div>
    )

}

export default Signup