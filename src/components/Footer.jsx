import Container from "react-bootstrap/Container";
function footer() {
  return (
    <>
      <footer className=" py-3 my-4 border-top bg-dark ">
        <Container fluid className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="col-md-4 mb-0 text-white">© 2025 Company, Inc</p>
          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            aria-label="Bootstrap"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              aria-hidden="true"
            ></svg>
          </a>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}

export default footer;
