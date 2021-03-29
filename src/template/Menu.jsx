import '../css/Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <span>Menu <i className="fa fa-angle-down"></i></span>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Lista de países</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu