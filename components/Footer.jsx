import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer () {
    return(
        <footer className={`bg-white mt-2`}>
            <section className={`py-4 w-full`}>
                <div className="flex-column sm:flex justify-center w-full items-center px-2 md:px-5">
                    <div className="social__Media w-full">
                        <ul className="flex justify-center">
                            <li className={`ml-2 mr-3.5`}><FacebookIcon /></li>
                            <li className={`ml-2 mr-3.5`}><XIcon /></li>
                            <li className={`ml-2 mr-3.5`}><InstagramIcon /></li>
                        </ul>
                    </div>
                    <div className="reserved w-full flex justify-center my-3 md:my-0 items-center">
                        <p>&copy; {new Date().getUTCFullYear()} <Link href="/">Virtufy Learning</Link>. All rights reserved. </p>
                    </div>
                </div>
            </section>
        </footer>
    )
}