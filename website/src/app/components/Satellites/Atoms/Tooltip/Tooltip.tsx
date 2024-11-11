import styles from "./Tooltip.module.scss";

type TooltipProps = {
  point: {
    name: string;
    description: string;
    lat: number;
    lng: number;
    alt: number;
  };
};

export const Tooltip = ({ point }: TooltipProps) => {
  return (
    <article className={styles.Tooltip}>
      <h2>{point.name}</h2>
      <p>{point.description}</p>
      <p>Latitude: {point.lat}</p>
      <p>Longitude: {point.lng}</p>
      <p>Altitude: {point.alt} km</p>
    </article>
  );
};

export default Tooltip;
