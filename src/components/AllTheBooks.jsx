import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Pages from "./Pages";
import { useState } from "react";

const itemsPerPage = 12;


function AllTheBooks({ filteredBook,colorText,theme}) {
 const [currentPage, setCurrentPage] = useState(1);
 const startIndex = (currentPage-1) * itemsPerPage;
 const currentBooks = filteredBook.slice(startIndex, startIndex+itemsPerPage);



  return (
    <Container fluid>
       <Row>
        {currentBooks.map((book) => (
          <SingleBook key={book.asin} book={book} colorText={colorText} theme={theme} />
        ))}
        </Row>
         <Pages
        totalItems={filteredBook.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}

export default AllTheBooks;
