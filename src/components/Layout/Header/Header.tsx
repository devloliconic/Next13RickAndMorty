import Link from "next/link";

import { ROUTES } from "@/utils/constants";

export const Header = () => {
  return (
    <header className="bg-green-500">
      <div className="container flex justify-between py-4 items-center text-gray-800">
        <h1 className="text-gray-800 text-xl">The Rick and morty</h1>
        <nav>
          <ul>
            <li>
              <Link href={ROUTES.CHARACTER}>Character</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
