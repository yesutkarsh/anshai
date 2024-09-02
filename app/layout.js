"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import store from "@/store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>

      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
<Provider store={store}>
          {children}
        </Provider>
        
        
        </body>
    </html>
  );
}
