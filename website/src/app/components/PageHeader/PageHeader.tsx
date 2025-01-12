import { Grid, GridItem } from "@components/Furniture/Grid/Grid";
import styles from "@components/PageHeader/PageHeader.module.scss";

type PageHeaderTypes = {
  heading: string;
  subheading: string;
};

export const PageHeader = ({ heading, subheading }: PageHeaderTypes) => {
  return (
    <section className={styles.PageHeader}>
      <Grid gap="1rem">
        <GridItem colSpan={6}>
          <header className={styles.Header}>
            <h1>{heading}</h1>
            <p className={styles.Subheading}>{subheading}</p>
          </header>
        </GridItem>
      </Grid>
    </section>
  );
};

export default PageHeader;
