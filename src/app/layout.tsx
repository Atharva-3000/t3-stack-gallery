import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "T3 Stack Gallery",
  description: "Huge appreciation for Theo for the t3 stack. ",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};




export default function RootLayout({
  children,
  modal
}: { children: React.ReactNode;
  modal: React.ReactNode;
 }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans ${inter.variable} flex  flex-col gap-4`}>
          <TopNav />
          {children}
          {modal}
          <div id="modal-root"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
