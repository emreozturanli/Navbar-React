import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navItemsRef = useRef(null);
    const linksRef = useRef(null);


    useEffect(()=>{
        const height = linksRef.current.getBoundingClientRect().height;
        if(show){
            navItemsRef.current.style.height = `${height}px`;

        }else{
            navItemsRef.current.style.height = "0px";
        }
    },[show])

    return (
        <nav>
            <div className="logo-toggle">
                <h1>Nusata</h1>
                <button onClick={()=>setShow(!show)}>
                    <FaBars />
                </button>
            </div>
            <div className="nav-items" ref={navItemsRef}>
                <ul className='links' ref={linksRef}>
                    {
                        links.map((item) => {
                            const { id, url, text } = item;
                            return <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
            <ul className='icons'>
                {
                    social.map((item) => {
                        const { id, url, icon } = item;
                        return <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    })
                }
            </ul>

        </nav>
    )

}

export default Navbar;