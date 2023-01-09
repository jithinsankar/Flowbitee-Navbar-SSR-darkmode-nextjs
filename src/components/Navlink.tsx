import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navlink({ href, children }) {
  const path = usePathname();
  const active = href === path;
  return (
    <Link
      className={
        active
          ? "block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
          : "block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      }
      href={href}
    >
      {" "}
      {children}
    </Link>
  );
}
