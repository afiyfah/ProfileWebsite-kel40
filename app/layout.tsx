
import { Poppins } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'


const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${fontPoppins.className} antialiased  bg-gradient-to-b from-black to-[#59171B] text-white min-h-screen bg-fixed
`}>
        {children}
      </body>
    </html>
  );
}
