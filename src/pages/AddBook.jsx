import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(book).some((val) => val === "")) {
      alert("All fields are required");
      return;
    }

    dispatch(addBook({ ...book, id: Date.now() }));
    navigate(`/books/${book.category}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setBook({ ...book, title: e.target.value })} />
      <input placeholder="Author" onChange={(e) => setBook({ ...book, author: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setBook({ ...book, category: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setBook({ ...book, description: e.target.value })} />
      <input placeholder="Rating" type="number" onChange={(e) => setBook({ ...book, rating: e.target.value })} />
      <button>Add Book</button>
    </form>
  );
};

export default AddBook;
