import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-1">{book.title}</h3>
      <p className="text-sm text-gray-600">Author: {book.author}</p>
      <p className="text-sm">Category: {book.category}</p>
      <p className="text-sm mb-2">⭐ {book.rating}</p>

      <Link
        to={`/book/${book.id}`}
        className="text-blue-600 font-medium hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};
export default BookCard;
