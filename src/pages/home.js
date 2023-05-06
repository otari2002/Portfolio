import styles from "../styles/home.module.css";
import Image from "next/image";
import minePic from "../assets/minePic.jpeg";

export default function Home(){
    return (
        <div className={styles.Home}>
            <div className={styles.row}>
                <div className={styles.titles}>
                    <h1 className="animate__animated animate__slideInLeft">Developer.</h1>
                    <h1 className="animate__animated animate__slideInRight">Programmer.</h1>
                    <h1 className="animate__animated animate__slideInLeft">Data Scientist.</h1>
                </div>
                <div className={styles.imageDiv}>
                    <Image src={minePic} className={styles.image}/>
                </div>
            </div>
            <div className={styles.intro}>
                Hey, I'm <strong>Omar</strong><br/>
                I am someone who enjoys discovering and creating new things, which is one of the reasons I love to code. <br/>
                I am curretly a Big Data and Cloud Computing Engineering student at University ENSET in Mohammedia, Morroco. <br/>
            </div>

        </div>
    )
}