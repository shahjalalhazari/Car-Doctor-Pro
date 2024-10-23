import Image from "next/image";
import Link from "next/link";
import { BsBag, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100 lg:px-[150px] font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="
            menu menu-sm
            dropdown-content
            bg-base-100
            rounded-box
            z-[1] mt-3 w-52
            p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Car Doctor Pro"
            width="100"
            height="80"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-x-10">
        {navItems.map((item) => (
          <Link className="hover:text-primary" key={item.path} href={item.path}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="navbar-end">
        <div className="flex space-x-5 items-center">
          <Link href="/">
            <BsBag className="text-xl hover:text-primary" />
          </Link>
          <Link href="/">
            <BsSearch className="text-xl hover:text-primary" />
          </Link>
          <a className="ml-2.5 btn btn-primary btn-outline rounded-md border-2 px-8 py-4">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
