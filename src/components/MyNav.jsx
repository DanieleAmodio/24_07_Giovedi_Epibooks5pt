import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


function MyNav({
  categoria,
  handleCategoria,
  handleSearch,
  searchValue,
  booksData,
  toggleTheme,
  theme,
  colorText
}) {
  return (
    <>
      <Navbar bg={theme} data-bs-theme={theme}>
        <Button size="sm"style={{ backgroundColor: 'transparent', color: colorText }} onClick={toggleTheme}>Theme</Button>
        <Container className="d-flex flex-wrap flex-sm-nowrap">
          <Navbar.Brand style={{ color: colorText}} href="#home">EpiBOOKS</Navbar.Brand>
          <Nav  className="me-auto">
            <Nav.Link style={{ color: colorText}}  href="#">Home</Nav.Link>
            <Nav.Link  style={{ color: colorText}} href="#">About</Nav.Link>
            <Nav.Link  style={{ color: colorText}} href="#">Browse</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2">
          <select
            className="form-select "
            value={categoria}
            onChange={handleCategoria}
          >
            {Object.keys(booksData).map((cat) => {
              console.log(cat);
              return <option key={cat}>{cat}</option>;
            })}
          </select>

          {/* <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Ricerca</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ricerca il libro "
            onChange={handleSearch}
            value={searchValue}
          />
          {/* </Form.Group>
    </Form> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
