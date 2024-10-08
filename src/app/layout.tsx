import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/providers";

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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  
  return (
    <ClerkProvider>
      < CSPostHogProvider>
        <html lang="en">
          <NextSSRPlugin
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <body className={`font-sans ${inter.variable}`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
              {modal}
            </div>
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}