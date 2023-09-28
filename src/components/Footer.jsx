import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h4>Aromas de Café</h4>
      <div>
        <span>PÁGINAS</span>
        <ul>
          <li>
            <Link to='/'>Início</Link>
          </li>
          <li>
            <Link to='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
        </ul>
      </div>
      <div>
        <span>CAFÉS</span>
        <ul>
          <li>Café quente</li>
          <li>Café expresso</li>
          <li>Café gelado</li>
        </ul>
      </div>
      <div>
        <span>CONTATO</span>
        <ul>
          <li><a href="https://www.instagram.com/" target="_blank">@aromasdecafe</a></li>
          <li><a href="https://twitter.com/" target="_blank">@aromasdecafe</a></li>
          <li><a href="https://br.linkedin.com/" target="_blank">@aromasdecafe</a></li>
        </ul>
      </div>
    </footer>
  );
}
