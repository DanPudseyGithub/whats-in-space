import localFont from "next/font/local";

const tofinoWide = localFont({
  src: [
    {
      path: "./fonts/TofinoWide-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TofinoWide-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TofinoWide-Ultra.woff",
      weight: "900",
      style: "bold",
    },
    {
      path: "./fonts/TofinoWide-Ultra.woff2",
      weight: "900",
      style: "bold",
    },
  ],
  variable: "--font-tofino-wide",
});

export default tofinoWide;
