import Landing from "./Landing";
import HomePageClient from "./HomePageClient";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <Landing />
      <section
        id="discover"
        className="relative -mt-10 scroll-mt-[88px] pb-12 before:pointer-events-none before:absolute before:inset-0 before:top-[-24px] before:z-0 before:bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(99,102,241,0.06),transparent_55%)] max-[760px]:-mt-7"
        aria-labelledby="discover-heading"
      >
        <div className="relative z-10 mx-auto max-w-[640px] px-4 pb-2 text-center">
          <p className="m-0 mb-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-indigo-500">
            Descobrir
          </p>
          <h2
            id="discover-heading"
            className="m-0 mb-3 text-[clamp(1.35rem,3vw,1.75rem)] font-extrabold leading-tight tracking-[-0.03em] text-slate-900"
          >
            Busque, refine e encontre em segundos
          </h2>
          <p className="m-0 text-[15px] leading-relaxed text-slate-500">
            Digite um título ou escolha filtros — os resultados aparecem logo abaixo. Role para ver
            as coleções em destaque quando não houver busca ativa.
          </p>
        </div>
        <HomePageClient />
      </section>
    </div>
  );
};

export default HomePage;
