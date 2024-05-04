import Image from 'next/image';
import styles from './styles.module.scss';
import img from '../public/images/Free-Contact-Us-Illustration-JPEG-1.jpg';

export default function ContactForm() {
    return (
        <article className={`p-10 ${styles.contact_form_main}`}>
            <h2 className="text-4xl text-center">How can we help you?</h2>
            <p className="text-lg text-center p-10">We love hearing from readers. Simply fill out the contact form below.</p>
            <form className={`${styles.contact_form} p-10 bg-white rounded-md flex w-full`}>
                <div className='w-full'>
                    <div className="flex flex-col w-full md:w-full">
                        <label htmlFor="name" className="py-3" >Name</label>
                        <input type="text" className="p-3 border rounded-md border-slate-300 hover:border-slate-400" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="flex flex-col w-full  md:w-full py-2">
                        <label htmlFor="name" className="py-3">Email Address</label>
                        <input type="email" name="email" className="p-3 border rounded-md border-slate-300 hover:border-slate-400" id="email" placeholder="Email Address" />
                    </div>
                    <div className="flex flex-col w-full md:w-full">
                        <label htmlFor="name" className="py-3">Subject</label>
                        <input type="text" name="subject" className="p-3 border rounded-md border-slate-300 hover:border-slate-400" id="subject" placeholder="Subject" />
                    </div>
                    <div className="flex flex-col w-full md:w-full py-2">
                        <label htmlFor="name" className="py-3">Message</label>
                        <textarea name="msg" className="p-3 border rounded-md border-slate-300 hover:border-slate-400" id="msg" cols="30" rows="4"></textarea>
                    </div>
                    <div className="flex flex-col w-full py-2 md:w-4/12">
                        <button type="button" className="py-3 rounded-md border border-slate-300 hover:border-slate-400">Submit</button>
                    </div>
                </div>
                <div className='w-full md:flex md:justify-center hidden md:inline-flex"'>
                    <Image src={img} alt="img-contact" width={500} height={500} />
                </div>
            </form>
        </article>
    )
}