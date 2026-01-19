import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useSelector((state) => state.books.slice(0, 3));

  return (
    <div>
      <h1>📚 Welcome to Online Library</h1>

      <h2>Categories</h2>
      <Link to="/books/Fiction">Fiction</Link> |{" "}
      <Link to="/books/Non-Fiction">Non-Fiction</Link> |{" "}
      <Link to="/books/Sci-Fi">Sci-Fi</Link>

      <h2>Popular Books</h2>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
