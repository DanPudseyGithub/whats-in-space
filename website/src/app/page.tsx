import NEOS from "./near-earth-objects";
// import Satellites from "./satelittes";
import SatellitesCopy from "./satelittes_copy";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Satellites /> */}
      <SatellitesCopy />
      <NEOS />
    </main>
  );
}
