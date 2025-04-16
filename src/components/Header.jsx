import {
  HomeIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { headerButtons } from "../navItems";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#222222] rounded-lg h-16 max-w-70 container mx-auto lg:w-80 md:w-80 md:container md:mx-auto lg:container lg:mx-auto my-3 flex justify-center items-center">
      {headerButtons.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            href={item.link}
            key={index}
            className="hover:bg-gray-400 rounded-xl transition ease-in-out duration-150 hover:cursor-pointer"
          >
            <Icon className="w-5 text-[#f5f5f5] m-3" />
          </a>
        );
      })}
    </header>
  );
}
