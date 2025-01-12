import SiteHeader from "@/app/components/Furniture/SiteHeader/SiteHeader";
import Satellites from "@components/Satellites/Satelittes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SiteHeader />
      <Satellites />
    </main>
  );
}
