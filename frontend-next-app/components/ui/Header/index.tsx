import Link from "next/link";
import styles from "./Header.module.css";

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
              <Link href="#">홈</Link>
            </li>
            <li className={styles.li}>
              <Link href="#">시리즈</Link>
            </li>
            <li className={styles.li}>
              <Link href="#">마이페이지</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
