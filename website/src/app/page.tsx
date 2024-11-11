import NEOS from "./near-earth-objects";
import Satellites from "./components/Satellites/Satelittes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Satellites />
      <NEOS />
    </main>
  );
}
