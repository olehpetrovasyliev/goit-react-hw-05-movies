import { NavLink, Outlet } from 'react-router-dom';

export const NavBar = () => {
  // const navOptions = ['home', 'movies'];
  const NavBarMarkup = (
    <>
      <NavLink to="/" key="Home">
        Home
      </NavLink>
      <NavLink to="/movies" key="Movies">
        Movies
      </NavLink>
    </>
  );
  return (
    <>
      {NavBarMarkup}
      <br />
      <Outlet />
    </>
  );
};
