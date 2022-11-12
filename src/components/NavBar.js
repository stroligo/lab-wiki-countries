import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          LAB - WikiCountries
        </a>
      </div>
    </Nav>
  );
}

export default NavBar;
