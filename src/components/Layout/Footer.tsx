import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container2">
          <div className="theme-selector">
            <h2 className="h2-footer">Tema do site</h2>
            <div className="light-theme">A</div>
            <div className="dark-theme">A</div>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <span className="footer-a">Apoiar</span>
              <span className="footer-a">AniFinder.co</span>
              <span className="footer-a">Anifinder.netlify.app</span>
            </div>
            <div className="footer-section">
              <span className="footer-a">App</span>
              <span className="footer-a">Estatísticas</span>
              <span className="footer-a">Recomendações</span>
              <span className="footer-a">API</span>
            </div>
            <div className="footer-section">
              <span className="footer-a">Discord</span>
              <span className="footer-a">Twitter</span>
              <span className="footer-a">Facebook</span>
              <span className="footer-a">GitHub</span>
            </div>
            <div className="footer-section">
              <span className="footer-a">Dados do app</span>
              <span className="footer-a">Moderadores</span>
              <span className="footer-a">Contato</span>
              <span className="footer-a">Termos e privacidade</span>
              <span className="footer-a">Mapa do site</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
