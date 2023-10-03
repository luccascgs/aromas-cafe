import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='container'>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <h3>Aromas de Café</h3>
        </div>
        <div className="col mb-3"></div>
        <div className="col mb-3">
          <h5>PÁGINAS</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to='/' className="nav-link p-0 text-muted">Início</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to='/sobre' className="nav-link p-0 text-muted">Sobre</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to='/contato' className="nav-link p-0 text-muted">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>CAFÉS</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='/cafe-quente' className="nav-link p-0 text-muted">Café Quente</Link></li>
            <li className="nav-item mb-2"><Link to='/cafe-gelado' className="nav-link p-0 text-muted">Café Gelado</Link></li>
            <li className="nav-item mb-2"><Link to='/cafe-expresso' className="nav-link p-0 text-muted">Café Expresso</Link></li>
          </ul>
        </div>
        <div>
          <h5>CONTATO</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted" href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i> @aromasdecafe</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted" href="https://twitter.com/" target="_blank"><i className="bi bi-twitter"></i> @aromasdecafe</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted" href="https://br.linkedin.com/" target="_blank"><i className="bi bi-linkedin"></i> @aromasdecafe</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
