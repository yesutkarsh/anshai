"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import store from "@/store";
import { Provider } from "react-redux";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>

      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
        strategy="afterInteractive"
      />

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
