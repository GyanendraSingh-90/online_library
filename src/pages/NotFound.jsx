import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
