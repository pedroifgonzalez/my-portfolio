import { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Blog from './sections/Blog';
import Home from './sections/Home';
import Return from './Return';

interface NavbarProps {
  selectedPage: string;
  page: number;
  total: number;
  onPageChange: (page: string, number: number) => void;
}

export default function Navbar({ selectedPage, page, total, onPageChange }: NavbarProps) {
  // State for transition effects
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedPage, setDisplayedPage] = useState(selectedPage);
  const [isPageNumberChanging, setIsPageNumberChanging] = useState(false);
  const [displayedPageNumber, setDisplayedPageNumber] = useState(page);

  // Map section names to their corresponding page numbers
  const pageNumbers: Record<string, number> = {
    home: 1,
    portfolio: 2,
    blog: 3,
    skills: 4,
    contact: 5,
    about: 6,
  };

  // Handle page transitions
  useEffect(() => {
    if (selectedPage !== displayedPage) {
      setIsTransitioning(true);
      setIsPageNumberChanging(true);

      // First update the page number with animation
      setTimeout(() => {
        setDisplayedPageNumber(page);
        setIsPageNumberChanging(false);
      }, 200);

      // Then update the content
      const timer = setTimeout(() => {
        setDisplayedPage(selectedPage);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedPage, displayedPage, page]);

  // Handle page change with transition
  const handlePageChange = (page: string) => {
    if (page === 'home' && selectedPage === 'home') return; // Prevent navigating to home when already on home

    setIsTransitioning(true);
    setIsPageNumberChanging(true);
    setTimeout(() => {
      onPageChange(page, pageNumbers[page] || 1);
    }, 100);
  };

  // Create section components with navigation capability
  const sectionComponents = {
    home: <Home onNavigate={(page: string) => handlePageChange(page)} />,
    portfolio: <Projects />,
    blog: <Blog />,
    skills: <Skills />,
    contact: <Contact />,
    about: <About />,
  };

  return (
    <div id="navbar">
      <div id="page-counter" aria-label="Page navigation">
        <span
          id="page-number"
          className={`page-selected ${isPageNumberChanging ? 'changing' : ''}`}
        >
          {displayedPageNumber}
        </span>
        <span id="separator" style={{ margin: '0 10px' }}>
          /
        </span>
        <span id="page-total">{total}</span>
      </div>
      {selectedPage !== 'home' ? (
        <Return onReturn={() => handlePageChange('home')} />
      ) : (
        <Hero position="Backend Developer" />
      )}
      <div
        id="content"
        style={{
          width: '70%',
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
        }}
      >
        {sectionComponents[displayedPage as keyof typeof sectionComponents]}
      </div>
    </div>
  );
}
