import React from "react";
import { navLinks } from "../links";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { AiFillIdcard } from "react-icons/ai"

export default function Navbar() {
  const router = useRouter();
  return (
    <>
    <div className={styles.header}>
      <ul className={styles.nav} role="navigation">
        <div>
          <li><AiFillIdcard color="white" size={26} /></li>
        </div>
        <div>
        {navLinks.map((link, index) => {
            return (
              <li>
                <Link href={link.path}>
                  <p key={index}>{link.name}</p>
                </Link>
              </li>
            );
        })}
        </div>
      </ul>
    </div>
    </>
  );
}
