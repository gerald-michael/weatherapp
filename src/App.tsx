import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Random from './components/Random/Random';
import Search from './components/search/Search';
import Header from './components/shared/header/Header';
import WeatherContextProvider from './store/context/weather';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Header />

        <WeatherContextProvider>
          <Routes>
            <Route path="search/" element={<Search />} />
            <Route index element={<Random />} />
          </Routes>
        </WeatherContextProvider>
      </Router>
    </div>
  );
}

export default App;
