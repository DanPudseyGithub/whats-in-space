import Link from "next/link";
import styles from "@components/Furniture/SiteHeader/SiteHeader.module.scss";
import siteNavigationMap from "@data/navigation";

const SiteHeader = () => {
  return (
    <header className={styles.SiteHeader}>
      <div className={styles.SiteHeaderInner}>
        <nav className={styles.Nav}>
          <ul className={styles.NavList}>
            {siteNavigationMap.map((item) => (
              <li className={styles.NavItem}>
                <Link
                  key={item.id}
                  href={item.link}
                  className={styles.NavItemLink}
                >
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
