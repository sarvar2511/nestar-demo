/* _app.tsx fayl orqali barcha global integrationlarni amalga oshiramiz  */
/* MUI ni integratsiyasi shu yerda amalga oshadi */

import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import React, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  console.log(" APP COMPONENT -- -- PAGE Router");
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  //socket.io, Redux, MUI ....
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
  /*Bu yerda biz MUI ni Component {...pageProps}
  ga parent component sifatida wrap qilamiz 
  bu degani page routing tizimidagi barcha fayllarga
  tarqatmoqda degani */
}
