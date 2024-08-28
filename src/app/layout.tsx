import "~/styles/globals.css";
import { type Metadata } from "next";
import {Inter} from "next/font/google";
 // Add this line to import the 'inter' font

 const inter  = Inter({
  subsets: ["latin"],
  variable:"--font-inter",
 });


export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav(){
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  )
}


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex  flex-col gap-4`}>
        <TopNav/>
          {children}
      </body>

    </html>
  );
}
