"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationList() {
  const pathname = usePathname();

  const links = [
    { id: 0, name: "Home", href: "/" },
    { id: 1, name: "Destination", href: "/destination" },
    { id: 2, name: "Crew", href: "/crew" },
    { id: 3, name: "Technology", href: "/technology" },
  ];
  return (
    <ul className="flex gap-8 backdrop-blur-[100] bg-white/8 px-8 py-4">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            key={link.id}
            className={clsx(
              "flex gap-1 uppercase text-whitee text-sm font-Barlow",
              {
                "border-b-2 border-white": isActive,
              },
            )}
          >
            <span className="font-bold">0{link.id}</span>
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
