import { ReactNode } from "react";
import classNames from "classnames";
import styles from "@components/Furniture/Grid/Grid.module.scss";

interface GridProps {
  children: ReactNode;
  className?: string;
  gap?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className, gap }) => {
  const gridClass = classNames(styles.Grid, className);

  return (
    <div className={gridClass} style={{ gap }}>
      {children}
    </div>
  );
};

interface GridItemProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  gap?: string;
  isGrid?: boolean;
  isHorizontal?: boolean;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  colSpan,
  gap,
  isGrid,
  isHorizontal,
}) => {
  const gridItemClass = classNames("GridItem", className, {
    [`col-span-${colSpan}`]: colSpan,
    ["item-is-grid"]: isGrid,
    ["item-grid-is-horizontal"]: isHorizontal,
  });

  return (
    <div className={gridItemClass} style={{ gap }}>
      {children}
    </div>
  );
};
