import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { MobileAccountNav } from "@/components/account/mobile-account-nav"

interface AccountLayoutProps {
  children: ReactNode
  params: { slug?: string[] }
}

export default function AccountLayout({ children, params }: AccountLayoutProps) {
  // Determine the current page for breadcrumb
  const slug = params.slug || []
  const currentPage = slug.length > 0 ? slug[0] : "account"

  // Format the page name for display
  const formatPageName = (page: string) => {
    return page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, " ")
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground mb-8">
          <Link href="/" className="hover:text-gold dark:hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link
            href="/account"
            className={`${currentPage === "account" ? "text-foreground dark:text-foreground" : "hover:text-gold dark:hover:text-gold"}`}
          >
            My Account
          </Link>
          {slug.length > 0 && (
            <>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-foreground dark:text-foreground">{formatPageName(currentPage)}</span>
            </>
          )}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {currentPage === "account" ? "My Account" : formatPageName(currentPage)}
          </h1>
          <MobileAccountNav />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8">
          <AccountSidebar />
          <main>{children}</main>
        </div>
      </div>
    </Layout>
  )
}

