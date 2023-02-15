import "@/styles/tailwind.css";
import "@/styles/globals.css";

import { Header } from "@components/Layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>The Rick And Morty</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
