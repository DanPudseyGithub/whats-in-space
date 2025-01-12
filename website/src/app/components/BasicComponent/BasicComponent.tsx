"use client";

import { ReactNode, FC } from "react";

type Types = {
  children: ReactNode;
};

export const BasicComponent: FC<Types> = ({ children }) => {
  return <section>BASIC COMPONENT{children}</section>;
};

export default BasicComponent;
