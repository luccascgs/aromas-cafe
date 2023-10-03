import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid container">
        <Link to='/' className="navbar-brand">Aromas de Café</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">INÍCIO</Link>
            </li>
            <li className="nav-item">
              <Link to='/sobre' className="nav-link">SOBRE</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">CAFÉS</a>
              <ul className="dropdown-menu">
                <li><Link to='/cafe-quente' className="dropdown-item">Café quente</Link></li>
                <li><Link to='/cafe-gelado' className="dropdown-item">Café gelado</Link></li>
                <li><Link to='/cafe-expresso' className="dropdown-item">Café expresso</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/contato' className="nav-link">CONTATO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
