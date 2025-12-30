import { useState } from "react";

export default function Header() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function toggleSidebar() {
    setSidebarIsOpen(!sidebarIsOpen);
  }

  return (
    <>
      <header className="flex justify-end p-2 group fixed top-0 z-30 w-full">
        <button className="cursor-pointer" onClick={toggleSidebar}>
          <svg
            className="w-8 h-8 text-amber-100/30 group-hover:text-amber-100 duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
            />
          </svg>
        </button>
      </header>
      <div
        id="shade"
        className={`w-full h-full bg-gray-900/50 absolute top-0 left-0 z-40 ${
          sidebarIsOpen ? "" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`absolute z-50 duration-500 w-full md:w-1/2 lg:w-1/3 h-full bg-black right-0 p-2 ${
          sidebarIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="cursor-pointer" onClick={toggleSidebar}>
          <svg
            className="w-8 h-8 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
      </aside>
    </>
  );
}
