import "./globals.css";
import React from 'react'

export const metadata = {
  title: "Test App",
  description: "This is a test app",
};

export default function RootLayout({ children }: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
        />
      </head>
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
