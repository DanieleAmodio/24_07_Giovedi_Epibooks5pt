import SingleBook from "./SingleBook";

import { Container, Row } from "react-bootstrap";

function AllTheBooks({ filteredBook, theme, colorText}) {
  return (
    <Container style={{background: theme}}>
      <Row>
        {filteredBook.map((book) => (
          <SingleBook key={book.asin} book={book} colorText={colorText} theme={theme} />
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
