import { NavLink } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Keyboard</NavLink>
    </>
  );
}