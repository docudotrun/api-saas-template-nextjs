import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const inter = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>

        <main className="min-h-screen flex flex-col">
          {children}
          <footer className="mt-auto bg-gray-800 text-white text-center py-2">
            Made with ❤️ by
            <a
              href="https://github.com/justinwkUKM/api-saas-template-nextjs.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              <span> JustinWKUKM</span>
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
