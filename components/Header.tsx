"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return theme === "light" ? (
    <span onClick={() => setTheme("dark")}>
      <svg
        key={1}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"
        />
      </svg>
    </span>
  ) : (
    <span onClick={() => setTheme("light")}>
      <svg
        key={2}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"
        />
      </svg>
    </span>
  );
};

const Header = () => (
  <header>
    <div className="max-w-screen-xl mx-auto px-4 flex items-center h-16">
      <div>
        <div className="select-none flex items-center">
          <div className="mr-1">
            <Image src="/logo.svg" alt="Logo" width={36} height={36} />
            {/* <img alt="Tailsc Logo" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style="color:transparent" src="/logo.svg"> */}
          </div>
          <div className="text-xl font-bold">Indie Road</div>
        </div>
      </div>
      <ul className="hidden md:flex flex-1 min-w-0 justify-center items-center gap-1 !text-base">
        <li>
          <a href="#hero">
            <Button variant="ghost" data-active="false">
              Home
            </Button>
          </a>
        </li>
        <li>
          <a href="#features">
            <Button variant="ghost" data-active="false">
              Features
            </Button>
          </a>
        </li>
        <li>
          <a href="#faq">
            <Button variant="ghost" data-active="false">
              FAQ
            </Button>
          </a>
        </li>
      </ul>
      <div className="grow md:hidden"></div>
      <div className="flex items-center gap-2 text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3"
          />
        </svg>
        <ModeToggle />
      </div>
    </div>
  </header>
);

export default Header;
