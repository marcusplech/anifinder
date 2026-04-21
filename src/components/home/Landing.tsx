import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <header className="relative mx-auto mb-20 w-full max-w-[1200px] overflow-hidden rounded-none border border-indigo-500/25 border-t-0 bg-gradient-to-br from-[#0c1222] via-[#1e1b4b] to-[#134e4a] px-6 pb-16 pt-12 shadow-[0_24px_60px_rgba(15,23,42,0.12),inset_0_0_0_1px_rgba(255,255,255,0.04)] min-[1040px]:mt-6 min-[1040px]:rounded-[14px] max-[1040px]:mb-[72px] max-[760px]:mb-16 max-[760px]:px-5 max-[410px]:px-4">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_80%_10%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(ellipse_70%_50%_at_15%_60%,rgba(99,102,241,0.28),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mb-12 grid grid-cols-1 items-center gap-10 min-[900px]:mb-14 min-[900px]:grid-cols-[1.05fr_0.95fr] min-[900px]:gap-12">
        <div className="relative">
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-indigo-200 max-[760px]:mx-auto max-[760px]:table">
            Catálogo Kitsu · código aberto
          </span>
          <h1 className="relative m-0 mb-[18px] text-left text-[clamp(1.85rem,4.5vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-50 max-[760px]:text-center">
            Seu próximo anime favorito{" "}
            <span className="bg-gradient-to-br from-indigo-200 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              começa aqui
            </span>
          </h1>
          <p className="relative m-0 max-w-[34rem] text-left text-[clamp(1rem,1.8vw,1.15rem)] font-normal leading-relaxed text-slate-300 max-[760px]:mx-auto max-[760px]:text-center">
            Explore tendências, lançamentos e clássicos — com busca inteligente, filtros por gênero
            e dados sempre atualizados da API Kitsu.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 max-[760px]:justify-center">
            <a
              href="#discover"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-indigo-500 to-indigo-600 px-[22px] py-3 text-[15px] font-bold text-slate-50 no-underline shadow-[0_8px_28px_rgba(99,102,241,0.4)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(99,102,241,0.5)] max-[410px]:w-full"
            >
              Começar a explorar
            </a>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-[22px] py-3 text-[15px] font-bold text-slate-200 no-underline transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-white/15 max-[410px]:w-full"
            >
              Criar conta
            </Link>
          </div>
          <ul
            className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0 max-[760px]:justify-center"
            aria-label="Destaques"
          >
            <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-400">
              Busca com debounce
            </li>
            <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-400">
              Filtros combináveis
            </li>
            <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-400">
              Listas em destaque
            </li>
          </ul>
        </div>
        <div
          className="relative flex min-h-[220px] items-center justify-center max-[899px]:mx-auto max-[899px]:min-h-[180px] max-[899px]:max-w-[400px]"
          aria-hidden
        >
          <div className="pointer-events-none absolute right-[8%] top-[10%] h-[180px] w-[180px] rounded-full bg-indigo-500 opacity-55 blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-[140px] w-[140px] rounded-full bg-cyan-400 opacity-55 blur-[48px]" />
          <div className="pointer-events-none absolute left-[35%] top-[40%] h-[100px] w-[100px] rounded-full bg-violet-400 opacity-55 blur-[48px]" />
          <div className="relative w-full max-w-[280px] rounded-[10px] border border-white/15 bg-slate-900/45 px-[22px] py-5 shadow-[0_16px_48px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-400">
              Em alta
            </span>
            <div className="flex flex-col gap-2.5">
              <span className="block h-2 w-full rounded bg-gradient-to-r from-indigo-500/90 to-cyan-400/50 opacity-[0.85]" />
              <span className="block h-2 w-[78%] rounded bg-gradient-to-r from-indigo-500/90 to-cyan-400/50 opacity-[0.85]" />
              <span className="block h-2 w-[56%] rounded bg-gradient-to-r from-indigo-500/90 to-cyan-400/50 opacity-65" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mb-16 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[640px]:gap-x-5 min-[640px]:gap-y-4">
        <div className="grid grid-cols-[64px_1fr] gap-[18px] rounded-[10px] border border-white/15 bg-white/5 p-5 transition-[transform,border-color,background] duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/[0.09]">
          <div className="flex items-start justify-center opacity-95">
            <Image
              src="/images/stats.svg"
              alt=""
              width={56}
              height={56}
              className="drop-shadow-[0_4px_12px_rgba(34,211,238,0.25)]"
            />
          </div>
          <div>
            <h3 className="m-0 mb-2 p-0 text-base font-bold leading-snug text-slate-100">
              Descubra padrões
            </h3>
            <div className="text-[13px] font-normal leading-relaxed text-slate-400">
              Veja o que está em alta, o que está no ar e o que a comunidade mais ama — tudo em
              trilhos fáceis de navegar.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[64px_1fr] gap-[18px] rounded-[10px] border border-white/15 bg-white/5 p-5 transition-[transform,border-color,background] duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/[0.09]">
          <div className="flex items-start justify-center opacity-95">
            <Image
              src="/images/apps.svg"
              alt=""
              width={56}
              height={56}
              className="drop-shadow-[0_4px_12px_rgba(34,211,238,0.25)]"
            />
          </div>
          <div>
            <h3 className="m-0 mb-2 p-0 text-base font-bold leading-snug text-slate-100">
              Funciona no navegador
            </h3>
            <div className="text-[13px] font-normal leading-relaxed text-slate-400">
              Interface leve e responsiva: use no celular ou no desktop sem instalar nada além do
              seu browser.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[64px_1fr] gap-[18px] rounded-[10px] border border-white/15 bg-white/5 p-5 transition-[transform,border-color,background] duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/[0.09]">
          <div className="flex items-start justify-center opacity-95">
            <Image
              src="/images/social.svg"
              alt=""
              width={56}
              height={56}
              className="drop-shadow-[0_4px_12px_rgba(34,211,238,0.25)]"
            />
          </div>
          <div>
            <h3 className="m-0 mb-2 p-0 text-base font-bold leading-snug text-slate-100">
              Compartilhe listas
            </h3>
            <div className="text-[13px] font-normal leading-relaxed text-slate-400">
              Monte sua conta, salve favoritos e volte quando quiser — ideal para maratonar com
              amigos.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[64px_1fr] gap-[18px] rounded-[10px] border border-white/15 bg-white/5 p-5 transition-[transform,border-color,background] duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white/[0.09]">
          <div className="flex items-start justify-center opacity-95">
            <Image
              src="/images/custom.svg"
              alt=""
              width={56}
              height={56}
              className="drop-shadow-[0_4px_12px_rgba(34,211,238,0.25)]"
            />
          </div>
          <div>
            <h3 className="m-0 mb-2 p-0 text-base font-bold leading-snug text-slate-100">
              Do seu jeito
            </h3>
            <div className="text-[13px] font-normal leading-relaxed text-slate-400">
              Combine texto, gênero, ano, formato e status de exibição até achar exatamente o que
              quer assistir hoje.
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/signup"
        className="relative z-[2] mx-auto -mb-14 grid h-[50px] w-[220px] grid-cols-[1fr_38px] items-center rounded-full border border-white/15 bg-gradient-to-br from-indigo-500 to-indigo-600 pl-[22px] pr-2 no-underline shadow-[0_8px_32px_rgba(99,102,241,0.45)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.55)] max-[1040px]:-mb-12 max-[760px]:-mb-10"
      >
        <div className="text-center text-base font-extrabold leading-[21px] text-slate-50">
          Entrar na lista
        </div>
        <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/95 pl-0.5 text-base font-bold text-indigo-600">
          <span aria-hidden>→</span>
        </div>
      </Link>
    </header>
  );
};

export default Landing;
