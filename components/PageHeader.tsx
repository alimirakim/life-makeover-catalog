import { startCase } from "lodash";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./PageHeader.module.scss";
import PageMenu from "./PageMenu";

interface PageHeaderProps {
  categories?: string[];
}

export default function PageHeader({
  categories = [],
  children,
}: PropsWithChildren<PageHeaderProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className={styles.menuAndHeading}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>

        <h1 className={styles.mainHeading}>
          <Link href="/">Life Makeover Catalog</Link>{" "}
          {categories.length && " / " + categories.map(startCase).join(" / ")}
        </h1>
      </div>

      {isMenuOpen && <PageMenu />}

      {children}
    </header>
  );
}
