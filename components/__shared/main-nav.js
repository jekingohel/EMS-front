"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function MainNav() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-6 text-sm">
      <Link
        href="/company"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/company" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Company
      </Link>
      <Link
        href="/department"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/department" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Department
      </Link>
      <Link
        href="/map-department-to-company"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/map-department-to-company"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Mapping Company & Departments
      </Link>
      <Link
        href="/employee"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/employee" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Employee
      </Link>
    </nav>
  )
}
