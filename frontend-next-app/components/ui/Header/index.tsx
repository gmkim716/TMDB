import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          {/* <Image
            src="/marvelous_logo.png"
            alt="Marvelous Times"
            width={100}
            height={300}
          /> */}
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="#">Home</Link>
            </li>
            <li className={styles.li}>
              <Link href="#">Series</Link>
            </li>
            <li className={styles.li}>
              <Link href="#">MyPage</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
