import Link from "next/link";
import styles from "./PageMenu.module.scss";

export default function PageMenu() {
  return (
    <nav className={styles.container}>
      <ul className={styles.menuOptions}>
        <li>
          <button onClick={() => "use firebase and oauth!!"}>
            Login/Logout
          </button>
        </li>
        <li>
          <Link href={`/users/[user-id-here]`}>User Profile</Link>
        </li>
        <li>
          <Link href="/me">My settings</Link>
        </li>
        <li>
          <Link href="/admin">Admin Board</Link>
        </li>
      </ul>
    </nav>
  );
}
