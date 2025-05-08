import { Raleway } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layouts";


const raleway = Raleway({ subsets: ["latin"], preload: false });

export const metadata = {
  title: "PKB Pontianak",
  description: "Personal Website",
  icons: {
    icon: [
        {
            url: "/images/logo.jpg", 
            href: "/images/logo.jpg", 
        },
    ],
},
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
