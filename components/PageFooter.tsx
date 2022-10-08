import Link from "next/link";

import styles from "./PageFooter.module.scss";

export default function PageFooter() {
  return (
    <footer className={styles.container}>
      <hr />

      <p>
        <small>Made by alimirakim.</small>
      </p>

      <nav>
        <ul>
          <li>
            <button>Go to top</button>
          </li>
          <li>
            <Link href="/contact-me">Contact me</Link>
          </li>
          <li>
            <Link href="">GitHub</Link>
          </li>
          <li>
            <Link href="/about">About & FAQ</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
