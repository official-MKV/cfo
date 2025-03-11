import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for App Router
import { USER_CLASSES, getNavItemsByUserClass } from "@/lib/sidebarnav";

export function Sidebar({ open, userClass = USER_CLASSES.DEFAULT }) {
  const [navItems, setNavItems] = useState({ main: [], footer: [] });
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    setNavItems(getNavItemsByUserClass(userClass));
  }, [userClass]);

  return (
    <aside
      className={`${
        open ? "w-56" : "w-0 -ml-56"
      } bg-white transition-all duration-300 flex flex-col h-full`}
    >
      <div className="p-4 flex gap-3 items-baseline">
        <h1 className="text font-bold">CFO Compass</h1>
        <div className="flex items-center mt-2">
          <span className="text-sm">EN</span>
          <div className="ml-2 w-6 h-4 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web%20app-KGODaA5MniBr27v3DjwlFzItwIPReI.png')] bg-cover bg-center rounded-sm"></div>
        </div>
      </div>

      <div className="p-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything"
            className="w-full py-2 pl-8 pr-4 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span className="absolute left-2.5 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </span>
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {navItems.main.map((item) => {
          // Special case for the home route
          const isHome = item.href === "/app";
          const isActive = isHome
            ? pathname === item.href // Exact match for home
            : pathname.startsWith(item.href); // Prefix match for other routes

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm rounded-md ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-5 h-5 mr-3 mask-image bg-no-repeat ${
                  isActive ? "bg-white" : "bg-gray-700 group-hover:bg-gray-900"
                }`}
                style={{
                  WebkitMaskImage: `url(${item.icon})`,
                  maskImage: `url(${item.icon})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t">
        {navItems.footer.map((item) => {
          const isActive = pathname.startsWith(item.href); // Check if the current path starts with the item's href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm rounded-md ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-5 h-5 mr-3 mask-image bg-no-repeat ${
                  isActive ? "bg-white" : "bg-gray-700 group-hover:bg-gray-900"
                }`}
                style={{
                  WebkitMaskImage: `url(${item.icon})`,
                  maskImage: `url(${item.icon})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              {item.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
