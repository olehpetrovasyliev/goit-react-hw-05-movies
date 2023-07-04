import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import { Home } from './Home/Home';
import { NavBar } from './NavBar/NavBar';
import Reviews from './MovieDetails/Reviews/Reviews';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './MovieDetails/Casts/Cast';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies/">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="/movies/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
