import Link from "next/link";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.Layout}>
      {" "}
      {/* Yoki className={styles.Layout} CSS modulini ishlatish uchun */}
      <header>
        <nav>
          <ul className={styles.ul}>
            <Link href="/converter">
              <li
                className={
                  router.pathname === "/converter"
                    ? `${styles.li} ${styles.active}`
                    : styles.li
                }
              >
                Converter
              </li>
            </Link>
            <Link href="/">
              <li
                className={
                  router.pathname === "/"
                    ? `${styles.li} ${styles.active}`
                    : styles.li
                }
              >
                Valyuta kurslari
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
