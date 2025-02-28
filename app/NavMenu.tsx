import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

import React from 'react'

const NavMenu = () => {
  return (
    <nav className = {styles.nav}>
        <Link href = "/">
        <Image src= "/images/logo.png" alt = "logo" width = {216} height = {30}/>
        </Link>
        <ul className={styles.links}>
            
            <li>
                <Link href = "/about">
                    About
                </Link>
            </li>
            <li>
                <Link href = "/blog">
                    Blog
                </Link>
            </li>
            <li>
                <Link href = "/users">
                    Users
                </Link>
            </li>
        </ul>
        


    </nav>
  )
}

export default NavMenu