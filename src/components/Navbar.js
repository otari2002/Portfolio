import React from "react";
import Head from "next/head";
import { navLinks } from "../links";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Navbar() {
  return (
    <>
    <div className={styles.header}>
      <ul className={styles.nav} role="navigation">
        <div className={styles.details}>
          <li><h4>Omar Tahri</h4></li>
          <li><h6>Full-Stack Developer</h6></li>
        </div>
        <div className={styles.pages}>
        {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.path}>
                  <p key={index}>{link.name}</p>
                </Link>
              </li>
            );
        })}
        </div>
        <div className={styles.links}>
          <li><Link href="https://www.linkedin.com/in/omar-tahri-aa19231a3/" ><AiFillLinkedin color="white" size={26} /></Link></li>
          <li><Link href="https://github.com/otari2002" ><AiFillGithub color="white" size={26} /></Link></li>
        </div>
      </ul>
    </div>
    </>
  );
}
