import { ListGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  return (
    <Col sm={5} style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <ListGroup>
        {allCountries.map((country) => {
          return (
            <div key={country.tld} className="country">
              <ListGroup.Item>
                <Link to={`/${country.alpha3Code}`}>
                  <h6>
                    <img
                      src={
                        'https://flagpedia.net/data/flags/emoji/twitter/256x256/' +
                        country.alpha2Code.toLowerCase() +
                        '.png'
                      }
                      style={{ maxWidth: '30px', marginRight: '10px' }}
                      alt="Bandeira"
                    ></img>
                    <b>{country.name.common}</b>
                  </h6>
                </Link>
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </Col>
  );
}

export default CountriesList;
