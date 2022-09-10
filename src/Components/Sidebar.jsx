import React, { useState } from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import Drawer from './Drawer'


const links = [
    {
        path: "/",
        name: "HOME",
    },
    {
        path: "/about",
        name: "ABOUT",
    },
    {
        path: "/projects",
        name: "PROJECTS",
    },
    {
        path: "/contacts",
        name: "CONTACTS",
    },
    {
        path: "/skills",
        name: "SKILLS",
    },
]

const Sidebar = () => {

    return (
        <div>
            <div className="main_container">
                <div className='sidebar'>
                    <div className="top_section">
                        
                    </div>
                    <section className='routes'>
                        {links.map((route) =>
                            <NavLink activeclassname="active" to={route.path} key={route.name} className="link">
                                <div className="link_text">{route.name}</div>
                            </NavLink>
                        )}
                    </section>
                </div>

            </div>
        </div >
    )
}

export default Sidebar