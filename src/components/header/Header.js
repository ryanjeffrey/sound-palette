import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

  return (
    <>
      <header>
        <h1>Sound Palette</h1>
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Keyboard</NavLink>
        </nav>
      </header>
    </>
  );
}