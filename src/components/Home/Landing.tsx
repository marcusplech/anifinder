import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <header className="landing">
      <div className="hero-glow" aria-hidden />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">Catálogo Kitsu · código aberto</span>
          <h1 className="heading">
            Seu próximo anime favorito <span className="heading-accent">começa aqui</span>
          </h1>
          <p className="sub-heading">
            Explore tendências, lançamentos e clássicos — com busca inteligente, filtros por gênero
            e dados sempre atualizados da API Kitsu.
          </p>
          <div className="hero-actions">
            <a href="#discover" className="hero-btn hero-btn--primary">
              Começar a explorar
            </a>
            <Link href="/signup" className="hero-btn hero-btn--ghost">
              Criar conta
            </Link>
          </div>
          <ul className="hero-pills" aria-label="Destaques">
            <li className="hero-pill">Busca com debounce</li>
            <li className="hero-pill">Filtros combináveis</li>
            <li className="hero-pill">Listas em destaque</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="hero-blob hero-blob--a" />
          <div className="hero-blob hero-blob--b" />
          <div className="hero-blob hero-blob--c" />
          <div className="hero-frame">
            <span className="hero-frame-label">Em alta</span>
            <div className="hero-frame-rows">
              <span className="hero-frame-bar hero-frame-bar--1" />
              <span className="hero-frame-bar hero-frame-bar--2" />
              <span className="hero-frame-bar hero-frame-bar--3" />
            </div>
          </div>
        </div>
      </div>

      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon-wrap">
            <Image src="/images/stats.svg" alt="" width={56} height={56} />
          </div>
          <div>
            <h3 className="title">Descubra padrões</h3>
            <div className="description">
              Veja o que está em alta, o que está no ar e o que a comunidade mais ama — tudo em
              trilhos fáceis de navegar.
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrap">
            <Image src="/images/apps.svg" alt="" width={56} height={56} />
          </div>
          <div>
            <h3 className="title">Funciona no navegador</h3>
            <div className="description">
              Interface leve e responsiva: use no celular ou no desktop sem instalar nada além do
              seu browser.
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrap">
            <Image src="/images/social.svg" alt="" width={56} height={56} />
          </div>
          <div>
            <h3 className="title">Compartilhe listas</h3>
            <div className="description">
              Monte sua conta, salve favoritos e volte quando quiser — ideal para maratonar com
              amigos.
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrap">
            <Image src="/images/custom.svg" alt="" width={56} height={56} />
          </div>
          <div>
            <h3 className="title">Do seu jeito</h3>
            <div className="description">
              Combine texto, gênero, ano, formato e status de exibição até achar exatamente o que
              quer assistir hoje.
            </div>
          </div>
        </div>
      </div>

      <Link href="/signup" className="join-btn">
        <div className="label">Entrar na lista</div>
        <div className="circle">
          <span aria-hidden="true">→</span>
        </div>
      </Link>
    </header>
  );
};

export default Landing;
