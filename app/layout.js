import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const roboto_mono = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '500', '700', '800', '900']
})

export const metadata = {
  title: "Virtufy Learning",
  description: "virtufy Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} ${poppins.className}`}>{children}</body>
    </html>
  );
}
