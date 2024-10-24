import React, { useEffect } from "react";
import "./Header.scss";
import headerLogo from "../../assets/Logo.svg";

// icons 
import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
// icons end 

// links 
let LINKS = [
    {
        id: 1,
        title: "Home",
        href: '#Home',
    },
    {
        id: 2,
        title: "Brands",
        href: '#Brands',
    },
    {
        id: 3,
        title: "Contact",
        href: '#Contact',
    },
    {
        id: 4,
        title: "About",
        href: '#About',
    }
]
// links end 

const Header = () => {
    useEffect(() => {
        const bar = document.querySelector('.bar');
        const menuBar = document.querySelector('.navbar__link-wrapper');
        const menuClose = document.querySelector('.close');

        bar.onclick = () => {
            menuBar.style.left = '0';
        }

        menuClose.onclick = () => {
            menuBar.style.left = '-300px';
        }
    }, []); 

    let renderLINK = LINKS.map((item) => (
        <div key={item.id} className="navbar__links">
            <a href={item.href}>{item.title}</a>
        </div>
    ));

    return (
        <header>
            <div className="container">
                <nav className="navbar__wrapper">
                    <div className="navbar__img">
                        <img src={headerLogo} alt="Logo" />
                    </div>
                    <div className="navbar__link-wrapper">
                        <button className="close"><IoMdClose /></button>
                        {renderLINK}
                        <div className="media__task">
                            <strong>write here if you <br /> have any questions</strong>
                            <div>
                                <input type="text" placeholder="Questions"/>
                                <button>send</button>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__icon">
                        <button className="bar"><FaBars /></button>
                        <a href="#"><IoSearch /></a>
                        <a href="#"><AiOutlineUser /></a>
                        <a href="#"><IoCart /></a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
