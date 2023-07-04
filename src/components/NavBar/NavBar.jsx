import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const NavBar = () => {
  // const navOptions = ['home', 'movies'];
  const NavBarMarkup = (
    <>
      <div style={{ display: 'flex', gap: '24px' }}>
        <NavLink to="/" key="Home">
          Home
        </NavLink>
        <NavLink to="/movies" key="Movies">
          Movies
        </NavLink>
      </div>
    </>
  );
  return (
    <>
      {NavBarMarkup}
      <br />
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
