import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import PageHeader from "@/components/__shared/page-header"
import { Toaster } from "@/components/ui/toaster"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata = {
  title: "HRMS Front End",
  description: "Human Resource Management System Front End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="relative flex min-h-screen flex-col bg-background">
          <PageHeader />
          <Toaster />
          {children}
        </div></body>
    </html>
  );
}
