import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContent}>
          <p>&copy; 2024 Marvelous Times. All rights reserved.</p>
          <p>
            <Link href="#" className="link">
              개인정보 처리방침
            </Link>{" "}
            |{" "}
            <Link href="#" className="link">
              이용약관
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
