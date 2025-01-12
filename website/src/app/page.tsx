import { Grid, GridItem } from "@/app/components/Furniture/Grid/Grid";
import SiteHeader from "@/app/components/Furniture/SiteHeader/SiteHeader";
import PageHeader from "@components/PageHeader/PageHeader";
import Carousel from "@components/Carousel/Carousel";
import styles from "./Page.module.scss";

export default function Home() {
  return (
    <main className={styles.Main}>
      <SiteHeader />
      <PageHeader
        heading="What's in Space?"
        subheading="Discover the wonders of space: track near-Earth asteroids, space launches, current astronauts, satellites, and stay updated with key news on space travel, stars, and telescopes. Your gateway to the cosmos!"
      />
      <Carousel />
      <Grid gap="1rem">
        <GridItem colSpan={2}>1</GridItem>
      </Grid>
    </main>
  );
}
