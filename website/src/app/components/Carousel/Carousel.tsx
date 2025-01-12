"use client";

import { ReactNode, FC } from "react";
import { Grid, GridItem } from "@components/Furniture/Grid/Grid";
import CarouselCard from "@components/Carousel/Atoms/CarouselCard/CarouselCard";
import styles from "./Carousel.module.scss";

type CarouselTypes = {
  children: ReactNode;
};

export const Carousel: FC<CarouselTypes> = ({ children }) => {
  return (
    <section className={styles.Carousel}>
      <div className={styles.PanelColumn1}>
        <p>HELLO 1</p>
      </div>
      <div className={styles.PanelColumn2}>
        <Grid gap="2rem">
          <GridItem colSpan={2} isGrid gap="2rem">
            <CarouselCard
              category="Space launch"
              heading="Falcon 9 / Starlink 10-6"
            />
            <CarouselCard
              category="Image of the day"
              heading="Hubble Captures a Galaxy with Many Lights"
            />
          </GridItem>
          <GridItem colSpan={4} isGrid gap="2rem">
            <GridItem colSpan={4} isGrid gap="2rem" isHorizontal>
              <CarouselCard
                category="Data visualisation"
                heading="Near-Earth objects"
              />
              <CarouselCard
                category="A particular lenticular cloud"
                heading="Falcon 9 / Starlink 10-6"
              />
            </GridItem>
            <GridItem colSpan={4}>
              <CarouselCard
                category="Space launch"
                heading="Falcon 9 / Starlink 10-6"
                colSpan={2}
              />
            </GridItem>
          </GridItem>
          <GridItem colSpan={6} isGrid gap="2rem">
            <GridItem colSpan={6} isGrid gap="2rem" isHorizontal>
              <CarouselCard
                category="Space launch"
                heading="Falcon 9 / Starlink 10-6"
                colSpan={2}
              />
              <CarouselCard
                category="Data visualisation"
                heading="Near-Earth objects"
              />
            </GridItem>
            <GridItem colSpan={6} isGrid gap="2rem" isHorizontal>
              <CarouselCard
                category="Data visualisation"
                heading="Near-Earth objects"
              />
              <CarouselCard
                category="History"
                heading="Atlantis Begins 13th Space Trip"
                colSpan={2}
              />
            </GridItem>
          </GridItem>
        </Grid>
      </div>
      <div className={styles.PanelColumn3}>
        <p>HELLO 3</p>
      </div>
    </section>
  );
};

export default Carousel;
