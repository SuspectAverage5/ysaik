import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#112a4d]/[0.63] backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap gap-2 items-center rounded-none">
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
        <a href="https://www.instagram.com/yasaik_" className="ml-auto" id="watermark-header">
          <img src="src/assets/watermark.png" width="50%" height="50%" className="md:w-50% md:h-50%" alt="Instagram" />
        </a>
      </nav>
    </header>;
};