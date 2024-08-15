import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "../GoogleAnalytics";
import "../globals.css";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indie Road",
  description: "A free, self-training and mutual learning community",
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "48x48", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      </body>
    </html>
  );
}
