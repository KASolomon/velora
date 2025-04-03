import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 bg-gray-50/30 dark:bg-zinc-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B8860B]">Velora</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mb-4">
              Premium shopping experience for the discerning customer.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B8860B]">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/groceries"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Groceries
                </Link>
              </li>
              <li>
                <Link
                  href="/category/electronics"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/category/fashion"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/category/home"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/category/beauty"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Beauty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B8860B]">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/account"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/account/wishlist"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B8860B]">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 dark:text-zinc-400 hover:text-[#B8860B] dark:hover:text-[#B8860B]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800 text-center text-sm text-gray-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Velora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

