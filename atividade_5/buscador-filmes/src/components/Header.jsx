import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/">
          <h2>MovieApp</h2>
        </Link>
        <nav>
          <Link to="/">Busca</Link>
          <Link to="/favorites">Meus Favoritos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;