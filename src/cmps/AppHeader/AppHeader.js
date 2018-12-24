import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => {
    return (
        <header className="app-header">
            <nav>
                <ul>
                    <NavLink exact to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>Contacts</li>
                    </NavLink>
                    <NavLink to="/chart">
                        <li>Charts</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}