import styles from "../styles/contact.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {BsTelephoneFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {BiCurrentLocation} from "react-icons/bi";

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i1idhxs', 'template_jauabfg', form.current, '1E_SQ6TqacGqC7JqH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    const copyClick = (text)=>{
        navigator.clipboard.writeText(text);
    }

    const personalData = {
        "phone": "(+212)716395440",
        "email": "omar.ibn.tahri@gmail.com",
        "adress": "ESSEDIQ 2 MOHAMMEDIA, MORROCO"
    }

    return (
        <div className={styles.Contact}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.row}>
                <div className={styles.zoneOne}>
                    <div>
                        <h3>Get in touch , let's talk.</h3>
                        <p>Fill in the details and I'll get back to you as soon as I can </p>
                    </div>
                    <div className={styles.icons}>
                        <div><li className={styles.iconsContent }><span className={styles.icon} role="button" title="Click to Copy" onClick={()=>copyClick(personalData.phone)}><BsTelephoneFill color ="blue" size={20}/></span><p className={styles.paddZero}>{personalData.phone}</p></li></div>
                        <div><li className={styles.iconsContent }><span className={styles.icon} role="button" title="Click to Copy" onClick={()=>copyClick(personalData.email)}><AiOutlineMail color ="blue" size={20}/></span><p className={styles.paddZero}>{personalData.email}</p></li></div>
                        <div><li className={styles.iconsContent }><span className={styles.icon} role="button" title="Click to Copy" onClick={()=>copyClick(personalData.adress)}><BiCurrentLocation color ="blue" size={20}/></span><p className={styles.paddZero}>{personalData.adress}</p></li></div>
                    </div>
                </div>
                <div className={styles.zoneTwo}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.inputName}>
                        <label htmlFor="name"><p className={styles.inputTitle}>Your Name</p></label>
                        <input type="text" name="user_name" required />
                    </div>
                    <div className={styles.inputEmail}>
                        <label htmlFor="email"><p className={styles.inputTitle}>Email</p></label>
                        <input type="email" name="user_email" required />
                    </div>
                    <div className={styles.inputMessage}>
                        <label htmlFor="message"><p className={styles.inputTitle}>Message</p></label>
                        <textarea type="text" name="message" rows="7" required />
                    </div>
                    <div className={styles.submitButton}>
                        <button type="submit">Send Message</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}