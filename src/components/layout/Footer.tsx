import React from "react";

const linkClass =
  "block cursor-pointer px-2.5 py-2.5 text-inherit no-underline transition-colors duration-200 outline-0 hover:text-cyan-400 max-[1040px]:py-1.5";

const Footer = () => {
  return (
    <footer className="mt-[60px] text-center">
      <div className="mt-5 w-full border-t border-indigo-500/20 bg-gradient-to-b from-slate-900 to-black py-[50px] pl-[30px] pr-[30px] text-left font-[family-name:var(--font-overpass)] font-semibold text-slate-400 max-[1040px]:py-8">
        <div className="mx-auto flex min-h-[100px] w-full min-w-[320px] max-w-[1140px] flex-col gap-8 px-5 min-[1040px]:flex-row min-[1040px]:items-start min-[1040px]:justify-between min-[1040px]:px-[50px] min-[1540px]:max-w-[1520px] min-[1540px]:px-[100px] max-[1040px]:p-0">
          <div className="shrink-0">
            <h2 className="bg-gradient-to-r from-indigo-300 to-cyan-400 bg-clip-text pb-3.5 text-base font-bold text-transparent">
              Tema do site
            </h2>
            <div className="inline-block h-7 w-7 cursor-pointer rounded-lg border border-slate-400/35 bg-slate-100 pt-1 pl-0.5 text-sm font-medium text-slate-900 transition-[border-color,transform] duration-200 hover:scale-105 hover:border-indigo-500/60">
              A
            </div>
            <div className="ml-2.5 inline-block h-7 w-7 cursor-pointer rounded-lg border border-slate-400/35 bg-slate-800 pt-1 pl-0.5 text-sm font-medium text-slate-200 transition-[border-color,transform] duration-200 hover:scale-105 hover:border-indigo-500/60">
              A
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-end gap-x-20 gap-y-5 text-[15px] max-[1040px]:mx-auto max-[1040px]:mt-5 max-[1040px]:block max-[1040px]:text-center min-[1040px]:ml-auto min-[1540px]:gap-x-[60px]">
            <div className="min-[1040px]:ml-20 min-[1540px]:ml-[60px]">
              <span className={linkClass}>Apoiar</span>
              <span className={linkClass}>AniFinder.co</span>
              <span className={linkClass}>Anifinder.netlify.app</span>
            </div>
            <div>
              <span className={linkClass}>App</span>
              <span className={linkClass}>Estatísticas</span>
              <span className={linkClass}>Recomendações</span>
              <span className={linkClass}>API</span>
            </div>
            <div>
              <span className={linkClass}>Discord</span>
              <span className={linkClass}>Twitter</span>
              <span className={linkClass}>Facebook</span>
              <span className={linkClass}>GitHub</span>
            </div>
            <div>
              <span className={linkClass}>Dados do app</span>
              <span className={linkClass}>Moderadores</span>
              <span className={linkClass}>Contato</span>
              <span className={linkClass}>Termos e privacidade</span>
              <span className={linkClass}>Mapa do site</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
