import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

  return (
    <>
      <header>
        <nav>
          <NavLink to="/"><h1>Sound Palette</h1></NavLink>
          <div className='nav-links'>
            <NavLink to="/">Play</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}