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

  const base =
    "left-0 top-0 z-[999] flex h-[72px] w-full items-center justify-center border-b border-slate-400/15 text-slate-300 transition-[background,box-shadow] duration-300 ease-out max-[760px]:invisible max-[760px]:mb-0 max-[760px]:h-0";

  const variant = showNav
    ? "fixed border-slate-400/20 bg-slate-900/70 shadow-[0_4px_24px_rgba(15,23,42,0.15)] backdrop-blur-[14px] hover:bg-slate-900/90 hover:text-slate-100"
    : "relative bg-gradient-to-b from-slate-900/[0.97] to-slate-900/[0.94] shadow-[0_4px_24px_rgba(15,23,42,0.15)] backdrop-blur-xl";

  return (
    <header className={`${base} ${variant}`}>
      <div className="mx-[50px] flex h-full w-full max-w-[1050px] items-center justify-between max-[760px]:m-0 max-[760px]:block max-[760px]:h-0 max-[760px]:w-0">
        <Link
          href="/"
          className="inline-flex h-[55px] w-[65px] shrink-0 items-center justify-center"
        >
          <Image
            src="/images/logo.svg"
            alt="Logotipo AniFinder"
            width={150}
            height={50}
            priority
            className="h-[50px] w-auto drop-shadow-[0_2px_8px_rgba(99,102,241,0.35)]"
          />
        </Link>
        <nav className="flex flex-1 flex-wrap items-center justify-center gap-0 text-center text-[1.4rem] font-semibold">
          <span className="cursor-pointer rounded-lg px-4 py-[18px] text-sm font-semibold leading-4 tracking-wide transition-colors duration-200 hover:bg-white/[0.06] hover:text-slate-50">
            Explorar
          </span>
          <span className="cursor-pointer rounded-lg px-4 py-[18px] text-sm font-semibold leading-4 tracking-wide transition-colors duration-200 hover:bg-white/[0.06] hover:text-slate-50">
            Social
          </span>
          <span className="cursor-pointer rounded-lg px-4 py-[18px] text-sm font-semibold leading-4 tracking-wide transition-colors duration-200 hover:bg-white/[0.06] hover:text-slate-50">
            Fórum
          </span>
          <span className="ml-8 cursor-pointer rounded-lg px-5 py-3 text-sm font-semibold leading-4 transition-colors duration-200 hover:bg-white/[0.06] hover:text-slate-50 min-[760px]:ml-[70px]">
            Entrar
          </span>
          <Link
            href="/signup"
            className="ml-2 inline-block cursor-pointer rounded-[10px] border border-white/15 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 px-[18px] py-2.5 text-sm font-bold leading-4 text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(99,102,241,0.45)]"
          >
            Cadastrar-se
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
