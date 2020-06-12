import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'



const NavBar = () => {

    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const renderList = () => {
        if (state) {
            return [
                <li key="profile"><Link to="/profile">Profile</Link></li>,
                <li key="logout">

                    <button className="btn waves-effect waves-light #e53935 red darken-1 "
                        onClick={() => {
                            localStorage.clear("user")
                            dispatch({ type: "CLEAR" })
                            history.push("/signin")

                        }}
                    >
                        Logout
                </button>

                </li>
            ]
        }
        else {
            return [
                <li key="signin"><Link to="/signin">Signin</Link></li>,
                <li key="signup"><Link to="/signup">Signup</Link></li>

            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white" >
                <div className="nav-content">
                    <Link to={state ? "/" : "/signin"} className="brand-logo left">Instagram</Link>
                    <ul id="nav-mobile" className="right">

                        {renderList()}
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default NavBar

