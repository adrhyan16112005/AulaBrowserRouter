import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ofertas">Ofertas</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
