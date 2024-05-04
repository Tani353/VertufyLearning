'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon  from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Header() {
    const  [isClicked, setIsClicked ] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <header className={`${styles.header} flex justify-between px-5 py-5 w-full lg:px-20 lg:py-5 bg-white`}>
            <Link className={styles.logo} href="#">Virtufy Learning
            </Link>

            <div className={` md:hidden `}>
                <button type="button" onClick={handleClick}>
                    {
                        isClicked ? (<MenuOpenIcon />)
                        : (<MenuIcon />)
                    }
                </button>
            </div>

            {     
            <nav className={`${styles.nav} ${isClicked ? `flex:column w-9/12 absolute right-0 top-0 z-100 bg-white h-screen py-3 px-10`  : `hidden md:inline-flex justify-between w-7/12` } `}>
                
                <div className={isClicked ? `flex justify-between py-3` : `hidden`}>
                <Link className={styles.logo} href="#">Virtufy Learning
                </Link>
                <button onClick={() => setIsClicked(false)}>
                <CloseIcon />
                </button>
                </div>

                <ul className={`${isClicked ? `flex:column` : `flex` }`}>
                    <li className='ml-2 mr-3.5 text-base my-5 md:my-0 '>
                        <Link href="/" className={``}>
                            Home
                        </Link>
                    </li>
                    <li className='mr-3.5 ml-2 text-base  my-5 md:my-0 '>
                    <Link href="/about" className={``}>
                        About Us
                        </Link>
                        </li>
                    <li className='mr-3.5 ml-2 text-base  my-5 md:my-0 '>
                    <Link href="/courses" className={``}>
                        Courses
                        </Link>
                    </li>
                    <li className='mr-3.5 ml-2 text-base  my-5 md:my-0 '>
                        <Link href="/contact" className={``}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <ul className={`${isClicked ? `flex:column` : `flex` }`}>
                    <li className=' text-base mx-3.5  my-5 md:my-0'>Login</li>
                    <li  className=' text-base mx-3.5  my-5 md:my-0'> <ShoppingCartIcon /> </li>
                </ul>
            </nav>
            }
        </header>
    )
}