import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="navList">
          <li className="home-button">
            <a href="/home-page" className="nav-link"> Home
            </a>
          </li>
          <li className="graficos-button">
            <a href="/grafico-page" className="nav-link"> WindSpeedAvg
            </a>
          </li>
          <li className="graficos-button">
            <a href="/grafico-page2" className="nav-link"> WindSpeedInst
            </a>
          </li>
          <li className="sobre-button">
            <a href="/Sobre-page" className="nav-link"> Sobre
            </a>
          </li>
          <li className="sair-button">
            <a href="/" className="nav-link"> Sair
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;