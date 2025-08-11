import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background shadow-soft border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
                <path d="M20 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" fill="currentColor"/>
                <path d="M32 30c0-6.6-5.4-12-12-12s-12 5.4-12 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 22c-2 2-3 4-3 6 0 3 2 5 5 5h20c3 0 5-2 5-5 0-2-1-4-3-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Hope Basket</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <a href="#impact">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;