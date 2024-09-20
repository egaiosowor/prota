import "./globals.css";

export const metadata = {
  title: "Test App",
  description: "This is a test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
