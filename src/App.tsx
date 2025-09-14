import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 6;

  const handlePageChange = (page: string, number: number) => {
    setSelectedPage(page);
    setPageNumber(number);
  };

  return (
    <div id="container">
      <div id="left">
        <div id="background-image" aria-hidden="true"></div>
        <Presentation firstName="Pedro" lastName="Fernández" />
      </div>

      <div id="right">
        <Navbar
          selectedPage={selectedPage}
          page={pageNumber}
          total={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
