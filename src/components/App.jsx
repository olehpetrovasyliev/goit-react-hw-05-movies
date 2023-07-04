import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { NavBar } from './NavBar/NavBar';
import Reviews from '../pages/MovieDetails/Reviews/Reviews';
import Cast from '../pages/MovieDetails/Casts/Cast';
import { lazy } from 'react';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>

            <Route path="/movies/" element={<Movies />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
