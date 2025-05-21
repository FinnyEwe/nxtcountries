'use client';
import { useState } from "react"
import './NavBar.css'
import moon from '../assets/Moon.png'
import Image from "next/image"


    function NavBar() {
        const [isDark, setIsDark] = useState(false)
        const handleClick = () => {
            setIsDark(!isDark)
        }
        return (
        <nav className="navbar">
            <span>Where in the world?</span>
            <button className="themeButton" onClick={handleClick}>
                <Image src={moon} alt="Moon" className="moonImage"/>
                <span>Dark Mode</span>
            </button>
        </nav>
        )
       
    }

    export default NavBar