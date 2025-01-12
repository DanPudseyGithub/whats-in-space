import classNames from "classnames";
import styles from "@components/Carousel/Atoms/CarouselCard/CarouselCard.module.scss";

type CarouselCardTypes = {
  category: string;
  heading: string;
  colSpan?: number;
};

export const CarouselCard = ({
  category,
  heading,
  colSpan,
}: CarouselCardTypes) => {
  return (
    <section
      className={classNames(styles.CarouselCard, {
        [styles.CarouselCardSpanTwo]: colSpan === 2,
      })}
    >
      <p>{category}</p>
      <h2>{heading}</h2>
    </section>
  );
};

export default CarouselCard;
