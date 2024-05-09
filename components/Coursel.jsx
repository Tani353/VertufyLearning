import styles from './styles.module.scss';
import img from '../public/images/header-img.png'
import Image from 'next/image';

export default function Coursel ({ p1="", h2="", p2="" }) {
    p1 = "Project-based Learning! ✍️";
    let h2s = "Take the first step to learn with us";
    let p2s = "Master the industry-relevant skills with our online courses."
    // { p1, h2, p2} = item;

    return (
        <section id="Carousel" className={`${styles.carousel_main}`}>
            <div className={`${styles.carousel_inner_main} md:flex justify-center`}>
                <div className={`${styles.carousel_left} px-10 md:px-16 py-28`}>
                    <p className={`my-5`}>{...p1}</p>
                    <h2 className={`text-white my-3 text-3xl md:text-3xl`}>
                        {h2}
                    </h2>
                    <p>{p2}</p>
                </div>
                <div className={`${styles.carousel_right} hidden md:inline-flex px-16 md:px-20 py-12`}>
                    <Image src={img} alt='header-img' width={550} height={550} />
                </div>
            </div>
        </section>
    )
}