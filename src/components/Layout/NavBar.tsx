"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowNav(pathname.startsWith("/anime/"));
  }, [pathname]);

  return (
    <header className={`navbar ${showNav ? "single" : ""}`}>
      <div className="wrap-guest">
        <Link href="/" className="icon-logo">
          <Image
            src="/images/logo.svg"
            alt="AniFinder logo"
            width={150}
            height={50}
            priority
            className="logo-image"
          />
        </Link>
        <div className="links">
          <div className="browse-wrap">
            <span className="link">Browse</span>
            <span className="link">Social</span>
            <span className="link">Forum</span>
            <span className="link-login">Login</span>
            <Link href="/signup" className="link-signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
