import React, { useState } from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            {/* logo */}
            <NavLink to='/' className="logo">
                website
            </NavLink>

            {/* hamburger menu togglor */}

            <div className='menu-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>

            </div>

            <ul className={menuOpen ? "show" : ""}>
                <li>

                    <NavLink to='/' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>

                        Home
                    </NavLink>
                </li>
                {/* about */}
                <li>


                    <NavLink to='/about' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>

                        About
                    </NavLink>


                </li>

                <li>


                    <NavLink to='/serivces' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>

                        serivces
                    </NavLink>


                </li>



            </ul>

        </nav>
    )
}

export default Navbar
