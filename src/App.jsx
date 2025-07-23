import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import Footer from "./components/Footer.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";
import history from "./books/history.json";
import { useState } from "react";
import { contextTheme } from "./context/contextTheme";

const booksData = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi: scifi,
  History: history,
};
function App() {
  const [categoria, setCategoria] = useState("Fantasy");
  const [searchValue, setSearchValue] = useState("");
  const [filteredBook, setFilteredBook] = useState(booksData[categoria]);
  const [theme, setTheme] = useState("white");
  const [colorText, setColorText] = useState("black");

  function toggleTheme() {
    if (theme == "black") {
      setTheme("white");
      setColorText("black");
    } else {
      setTheme("black");
      setColorText("white");
    }
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const books = booksData[categoria].filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBook(books);
  };

  const handleCategoria = (e) => {
    setSearchValue("");
    setCategoria(e.target.value);
    setFilteredBook(booksData[e.target.value]);
  };
  return (
    <>
      <contextTheme.Provider value={{ theme, colorText }}>
        <MyNav
          categoria={categoria}
          handleCategoria={handleCategoria}
          handleSearch={handleSearch}
          searchValue={searchValue}
          filteredBook={filteredBook}
          booksData={booksData}
          toggleTheme={toggleTheme}
          theme={theme}
          colorText={colorText}
        />

        <Welcome searchValue={searchValue} filteredBook={filteredBook} />
        <AllTheBooks
          filteredBook={filteredBook}
          toggleTheme={toggleTheme}
          theme={theme}
          colorText={colorText}
        />
        <Footer />
      </contextTheme.Provider>
    </>
  );
}

export default App;
