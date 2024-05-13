import Link from "next/link"
import { Icons } from "./icons"
import MainNav from "./main-nav"
export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-lg items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">HRMS</span>
          </Link>
          <MainNav />
        </div>
      </div>
    </header>
  )
}
