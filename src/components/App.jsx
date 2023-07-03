import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './Home/Home';
import { NavBar } from './NavBar/NavBar';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/movies/:movieId" element={<MovieDetails id={1} />}>
                <Route path="/movies/:movieId/cast" />
                <Route path="/movies/:movieId/reviews" />
              </Route>
            </Route>
            <Route path="/movies/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
