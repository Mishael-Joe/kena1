import Link from "next/link";

/**
 * Header component with responsive navigation
 *
 * Features:
 * - Logo and brand name
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-yellow-600/30 border-b bg-[#1d0e26] backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-20">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">
            V
          </span>
          <span className="font-semibold text-xl hidden sm:inline-block text-yellow-600">
            Ziv
          </span>
        </Link>
      </div>
    </header>
  );
}
