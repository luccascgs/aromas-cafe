export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Aromas de Café</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">INÍCIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">SOBRE</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">CAFÉS</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Café quente</a></li>
                <li><a class="dropdown-item">Café gelado</a></li>
                <li><a class="dropdown-item">Café expresso</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">CONTATO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
