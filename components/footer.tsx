import Image from "next/image";

const footer = () => (
  <footer id="footer" className="py-8 border-t border-solid bg-muted">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-4">
      <div>
        <div className="select-none flex items-center">
          <div className="mr-1">
            <Image
              alt="Tailsc Logo"
              loading="lazy"
              width="36"
              height="36"
              decoding="async"
              data-nimg="1"
              src="/logo.svg"
            />
          </div>
          <div className="text-xl">Indie Road</div>
        </div>
      </div>
      <ul className="flex flex-1 min-w-0 justify-center items-center gap-8">
        <li>
          <a className="text-slate-700 dark:text-slate-400 hover:text-blue-500" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-slate-700 dark:text-slate-400 hover:text-blue-500" href="#">
            Product
          </a>
        </li>
        <li>
          <a className="text-slate-700 dark:text-slate-400 hover:text-blue-500" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="text-slate-700 dark:text-slate-400 hover:text-blue-500" href="#">
            About
          </a>
        </li>
        <li>
          <a className="text-slate-700 dark:text-slate-400 hover:text-blue-500" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="text-sm text-zinc-500 text-center">
        © 2024 Indie Road. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default footer;