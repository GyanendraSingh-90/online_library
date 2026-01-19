import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === Number(id))
  );

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>⭐ Rating: {book.rating}</p>
      <Link to={`/books/${book.category}`}>Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
