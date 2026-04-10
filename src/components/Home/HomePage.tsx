import Landing from "./Landing";
import HomePageClient from "./HomePageClient";

const HomePage = () => {
  return (
    <div className="home-page main content" style={{ minHeight: "100vh" }}>
      <Landing />
      <section id="discover" className="home-discover" aria-labelledby="discover-heading">
        <div className="container home-discover-header">
          <p className="home-discover-kicker">Descobrir</p>
          <h2 id="discover-heading" className="home-discover-title">
            Busque, refine e encontre em segundos
          </h2>
          <p className="home-discover-lede">
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
