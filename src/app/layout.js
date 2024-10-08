import { Inter } from "next/font/google";
import Menu from "@/app/components/Menu"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body-tertiary`}>
        <Menu />
        <div className="" >
          {children}
        </div>
      </body>
    </html>
  );
}
