import { useState } from 'react';
// IMPORT para as rotas
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Container, Row } from 'react-bootstrap';

import countries from './countries.json';

function App() {
  const [allCountries, setAllCountries] = useState(countries);

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <CountriesList allCountries={allCountries} />
          <Routes>
            <Route path="/" />
            <Route
              path="/:id"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </Row>
      </Container>
    </div>
  );
}

export default App;
