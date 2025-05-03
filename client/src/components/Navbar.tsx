import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { NAV_LINKS, RESUME_URL } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass" : "bg-transparent"}`}>
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary dark:text-white">
          Awais<span className="text-secondary">.dev</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <ThemeToggle />
          
          <a 
            href={RESUME_URL} 
            download="Muhammad_Awais_Hussain_Resume.pdf"
            className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/80 transition duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
        </div>
        
        <button 
          className="md:hidden text-gray-700 dark:text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass py-4 px-6 animate-in fade-in slide-in-from-top">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              
              <a 
                href={RESUME_URL} 
                download="Muhammad_Awais_Hussain_Resume.pdf"
                className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/80 transition duration-300 flex items-center gap-2"
                onClick={closeMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
