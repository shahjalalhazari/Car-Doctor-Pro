"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BsBag, BsSearch, BsCaretDownFill } from "react-icons/bs";
import PrimaryOutlineBtn from "./PrimaryOutlineBtn";
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  const session = useSession();
  // console.log(session);

  return (
    <div className="flex justify-between items-center font-semibold">
      <div className="">
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
      <div className="hidden lg:flex gap-x-8">
        {navItems.map((item) => (
          <Link className="hover:text-primary" key={item.path} href={item.path}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex space-x-5 items-center">
        {/* shopping cart */}
        <Link href="/">
          {/* REPLACE */}
          <BsBag className="text-xl hover:text-primary" />
        </Link>

        {/* Search btn */}
        <Link href="/">
          {/* REPLACE */}
          <BsSearch className="mr-2.5 text-xl hover:text-primary" />
        </Link>

        {/* Appointment Action Btn */}
        <Link href="/">
          {/* REPLACE */}
          <PrimaryOutlineBtn text="Appointment" />
        </Link>

        {session.status === "authenticated" ? (
          <div className="dropdown dropdown-hover dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="px-8 py-4
            rounded-md bg-primary text-white flex items-center gap-2"
            >
              {session.data.user.name} <BsCaretDownFill />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 z-[1] w-52 border-primary border p-2 shadow"
            >
              <li>
                {/* REPLACE */}
                <Link href="/my-bookings">My Bookings</Link>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/sign-in">
            <PrimaryBtn text="Sign In" />
          </Link>
        )}
      </div>
    </div>
  );
};

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

export default Navbar;
