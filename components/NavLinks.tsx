"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current Meeting" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="mx-auto flex max-w-6xl gap-6 px-6 py-4">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                active
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
