import Coursel from "@/components/Coursel";
import styles from '../../components/styles.module.scss'

export default function About () {
    return (
        <section id="about" className={`${styles.about}`}>
            <Coursel p1= "" h2="About" p2="" />

            <div className="px-20 py-2 text-center">
                <h2 className={`text-3xl font-bold font-serif `}>About Virtufy Learning</h2>
                <p className="text-xl text-blue font-serif">Learn, Practice, and Repeat. </p>
            </div>

            <div className="px-10 md:px-20 py-10">
                <div className="flex flex-col md:flex-row">
                    <img className="mx-2 md:mx-5 w-full md:w-6/12 rounded-lg" src="https://images.datacamp.com/image/upload/v1685454800/learn_ai_robot_stairs_c6600dbdf5.png" alt="img" />
                    <p className="text-lg text-justify px-2 md:px-10 py-5 md:py-0 font-serif"> 
                    Virtufy Learning is online learning platform specialsing in project-based learning 
                    that is suitable from beginners to professionals. You will learn from tutors who are experienced 
                    professionals themselves. A proper study plan will be made to follow 
                    that will help you plan your course effectively. Moreover,
                    you will be able to assess your knowledge with assignments and 
                    projects that will be provided at different steps of your course.
                    </p>
                </div>
            </div>


        </section>
    )
}