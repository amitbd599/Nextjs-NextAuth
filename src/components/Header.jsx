"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useState } from "react";

const Header = () => {
  const [cookieToken, setCookieToken] = useState(getCookie("token"));
  const [cookieGit, setCookieGit] = useState(getCookie("next-auth.csrf-token"));
  const router = useRouter();
  const logoutControl = () => {
    deleteCookie("token");
    deleteCookie("next-auth.csrf-token");
    router.replace("/");
    setCookieToken(getCookie("token"));
    setCookieGit(getCookie("next-auth.csrf-token"));
  };
  console.log(document.cookie);
  console.log(getCookie("next-auth.csrf-token"));

  return (
    <header id="navbar" className="flex w-full bg-white py-6">
      <div className="container mx-auto">
        <nav className="flex items-center">
          {/* Navbar Brand Logo */}
          <Link href="/">
            <img src="/assets/logo-dark.svg" className="w-[200px]" />
          </Link>
          <div className="ms-auto flex justify-center items-center gap-[50px]">
            <ul className="flex gap-[40px] items-center justify-center">
              <li className="nav-item">
                <Link className="navlink" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="navlink" href="contact.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="navlink" href="contact.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="navlink" href="contact.html">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="navlink" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <div>
              {!!cookieToken || !!cookieGit ? (
                <button className="myBtn" onClick={logoutControl}>
                  Logout
                </button>
              ) : (
                <Link href={"/login"} className="myBtn">
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
