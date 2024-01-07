import localFont from "next/font/local";

export const vazirFont = localFont({
  src: [
    {
      path: "../../public/fonts/Vazir-Bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
        path: "../../public/fonts/Vazir-Light.ttf",
        weight: "300",
        style: "normal",
      },
      {
        path: "../../public/fonts/Vazir-Medium.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../../public/fonts/Vazir-Thin.ttf",
        weight: "200",
        style: "normal",
      },
      {
        path: "../../public/fonts/Vazir.ttf",
        weight: "350",
        style: "normal",
      },
  ],
});
