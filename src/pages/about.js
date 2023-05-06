import styles from "../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";

import JS from "../assets/PNGs/javascript.png";
import HTML from "../assets/PNGs/html.png";
import MYSQL from "../assets/PNGs/mysql.png";
import REACT from "../assets/PNGs/react.png";
import PYTHON from "../assets/PNGs/python.png";

export default function About(){
    return (
        <>
        <div className={styles.About}>
        <h1 className={styles.aboutME}>ABOUT ME.</h1>
        <p className={styles.bio}>I'm a software developer that loves building products and web applications.</p>
        <div className={styles.textZones}>
            <div className={styles.zoneOne}>
                <p><strong>Contact</strong></p>
                <p>For any sort help/ enquiry , shoot a <Link href="/contact">mail</Link> and I'll get back.</p>
                <p><strong>Job Opportunities</strong></p>
                <p>I'm currently looking for a job. Iyou see me as good fit, check my <Link href="/">CV</Link> and I'd love to work for you.</p>
                <p><strong>Social Links</strong></p>
                <div className={styles.links}>
                    <li><span><Link href="https://www.linkedin.com/in/omar-tahri-aa19231a3/" >LinkedIn </Link></span></li>
                    <li><span><Link href="https://github.com/otari2002" >Github </Link></span></li>
                </div>
            </div>
            <div className={styles.zoneTwo}>
                <div className={styles.story}><p>
                I discovered the world of Computer Science when I was 12 years old, encouraged by my father to learn my first programming language Python.
                I eventualy learned HTML, CSS and Javascript a few years later due to my studies and reached a high understanding of NodeJS.
                <br/>In a school project, 
                </p></div>
                <div className={styles.icons}>
                    {[JS,HTML,MYSQL,REACT,PYTHON].map((png)=><Image src={png} width={80} height={80}/>)}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}