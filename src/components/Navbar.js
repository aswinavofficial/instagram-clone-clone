import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper white" >
                <div className="nav-content">
                    <Link to="/" className="brand-logo left">Instagram</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/signin">Signin</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default NavBar

