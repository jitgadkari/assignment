
import { Toaster } from "react-hot-toast";
import ".././globals.css"
import Navbar from "../components/Navbar";
import StoreProvider from "../StoreProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F1F3F6]">
      <StoreProvider>
      <Navbar/>
      <Toaster position="bottom-center" />
        {children}
      </StoreProvider>
        </body>
    </html>
  );
}
