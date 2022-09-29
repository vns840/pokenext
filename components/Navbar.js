import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/images/pokeball.png" width="30px" height="30px" alt="PokeNext" />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link__items}>
        <li>
          <Link href="/"><a>home</a></Link>
        </li>
        <li>
          <Link href="/about">sobre</Link>
        </li>
      </ul>
    </nav>
  )
}