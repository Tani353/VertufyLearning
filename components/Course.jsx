import Image from 'next/image';
import styles from './styles.module.scss';
import img from '../public/images/Full-Stack.png'
import img1 from '../public/images/web-development-image.webp'

export default function Course () {
    return (
        <section className={`${styles.courses} py-10`}>
            <h2 className="flex justify-center text-3xl my-3 font-bold text-center">Popular Courses Available Right Now</h2>
            <p className="flex justify-center text-lg py-5 text-center">Choose from live online classes, project-based learning.</p>
            <div className='bg-white rounded pt-5'>

                <div className={`flex flex-col-reverse md:flex-row p-2 md:px-32 md:py-5`}>
                    <div className="left my-5 md:w-6/12 px-1 md:px-5">
                        <h3 className='text-xl md:text-2xl font-bold my-2' >Web Development Course for Beginners</h3>
                        <ul className='text-gray-500 list-disc px-5'>
                            <li>2 months training</li>
                            <li>Professional Certificate</li>
                        </ul>
                        <button type="button" className='text-white font-bold my-3 px-5 py-3 bg-blue-700 rounded-md border border-slate-300 hover:border-slate-400'>Get Access!</button>
                    </div>
                    <div className="right rounded md:w-6/12 relative">
                        <Image src={img1} height={200} width={500} className={`${styles.img_course} rounded-lg md:max-h-52 w-full`} />
                        
                        <span className={`absolute top-0 right-0 px-2 m-1 bg-green-200 rounded-full `}>Available</span>
                        
                        <span className='absolute bottom-9 right-0 px-2 m-1 bg-green-200 rounded-full '>Hindi / English</span>
                        {/* <img className="rounded-lg" src="https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp" alt="aa" height="200px" /> */}
                    </div>
                </div>
                <div className={`flex flex-col-reverse md:flex-row-reverse p-2 md:px-32 md:py-5`}>
                    <div className="left my-5 md:w-6/12 px-1 md:px-5">
                        <h3 className='text-xl md:text-2xl font-bold' >Full Stack Web Development Course</h3>
                        <ul className='text-gray-500 list-disc px-5'>
                            <li>4 months training</li>
                            <li>Professional Certificate</li>
                        </ul>
                        <button type="button" className='text-white font-bold my-3 px-5 py-3 bg-blue-700 rounded-md border border-slate-300 hover:border-slate-400'>Get Access!</button>
                    </div>
                    <div className="right rounded md:w-6/12 relative">
                        <Image src={img} height={200} width={500} className={`${styles.img_course} object-cover rounded-lg md:max-h-52 w-full`} />
                        <span className={`absolute top-0 left-0 px-2 m-1 bg-green-200 rounded-full `}>Available</span>
                        
                        <span className='absolute bottom-5 left-0 px-2 m-1 bg-green-200 rounded-full '>Hindi / English</span>
                        
                        {/* <img className="rounded-lg" src="https://media.licdn.com/dms/image/D4E12AQHPfeaf61ARlw/article-cover_image-shrink_720_1280/0/1707956393334?e=2147483647&v=beta&t=GYpFx7NlLhBWpF2Ow0tzdwoqWrF78PvPmI-wVFuO3B8" alt="aa" height="200px" /> */}
                    </div>
                </div>

            </div>
        </section>
    )
}