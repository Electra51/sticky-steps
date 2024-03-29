import Header from "@/components/Ui/layoutComponent/Header";
import "./globals.css";

export const metadata = {
  title: "StickySteps | Home",
  description: "Generated by Safayet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
