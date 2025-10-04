import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const fullURL = window.location.href

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname, "in", fullURL);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! The star system <b><a href="/" class-name="text-blue-500 underline hover:text-blue-700">{fullURL}</a></b> doesn't seem to exist. Did you mistype the URL?</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home (root URL)
        </a>
      </div>
    </div>
  );
};

export default NotFound;
