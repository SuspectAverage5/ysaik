import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-3 flex gap-2 items-center">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/gallery">
          <Button variant="ghost">Gallery</Button>
        </Link>
        <Link to="/equipment">
          <Button variant="ghost">Equipment</Button>
        </Link>
        <Link to="/biography">
          <Button variant="ghost">Biography</Button>
        </Link>
      </nav>
    </header>
  );
};
