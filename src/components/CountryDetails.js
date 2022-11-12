import { Table, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';

function CountryDetails({ allCountries }) {
  const { id } = useParams();

  const selectCountry = (id) => allCountries.find((c) => c.alpha3Code === id);

  const country = selectCountry(id);

  return (
    <Col sm={8}>
      <h3>
        <img
          src={
            'https://flagpedia.net/data/flags/emoji/twitter/256x256/' +
            country.alpha2Code.toLowerCase() +
            '.png'
          }
          style={{ maxWidth: '30px', marginRight: '10px' }}
          alt="Bandeira"
        ></img>
        {country.name.common}
      </h3>
      <Table className="table" striped bordered hover>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td> {country.capital}</td>
          </tr>

          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>

          <tr>
            <td>Region</td>
            <td>{country.region}</td>
          </tr>

          <tr>
            <td>Sub-Region</td>
            <td>{country.subregion}</td>
          </tr>

          <tr>
            <td>Languages</td>
            <td>
              <ul>
                {Object.keys(country.languages).map((lang) => (
                  <li key={lang}>{country.languages[lang]}</li>
                ))}
              </ul>
            </td>
          </tr>

          <tr>
            <td>Localization</td>
            <td>
              <GoogleMap latlng={country.latlng}></GoogleMap>
            </td>
          </tr>

          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders?.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {selectCountry(border).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default CountryDetails;
