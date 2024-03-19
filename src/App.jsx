import React, { useState } from 'react';
import dictionary from '../dictionary.json';
import './App.css';

const App = () => {

  const words = Object.keys(dictionary);

  // Single state variable for filters
  const [filters, setFilters] = useState({
    firstLetter: '',
    secondLetter: '',
    thirdLetter: '', 
    fourthLetter:'',
    fifthLetter:'',
    SixLetter:'',
    lastLetter: '',
    length: '', 
    notIncluded: '', 
    any:'',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const { firstLetter, secondLetter, thirdLetter,fourthLetter,fifthLetter,SixLetter, lastLetter, length, notIncluded, any } = filters;

  // Check if all filters are empty
  const areAllFiltersEmpty = !firstLetter && !secondLetter && !thirdLetter && !fourthLetter&& !fifthLetter && !SixLetter && !lastLetter && !length && !notIncluded && !any;

  const filteredWords = areAllFiltersEmpty
    ? []
    : words.filter((word) => {
        return (
          (!notIncluded || !new RegExp(`[${notIncluded}]`).test(word.toLowerCase())) && 
          (!thirdLetter || word.length > 2 && word[2].toLowerCase() === thirdLetter) &&
          (!length || word.length === parseInt(length)) &&
          (!firstLetter || word.toLowerCase().startsWith(firstLetter)) &&
          (!secondLetter || word.length > 1 && word[1].toLowerCase() === secondLetter) &&
          (!fourthLetter || word.length > 3 && word[3].toLowerCase() === fourthLetter) &&
          (!fourthLetter || word.length > 4 && word[4].toLowerCase() === fifthLetter) &&
          (!fourthLetter || word.length > 5 && word[5].toLowerCase() === fifthLetter) &&
          (!lastLetter || word.toLowerCase().endsWith(lastLetter)) &&
          (!any || new RegExp(`[${any}]`).test(word.toLowerCase()))
        );
      });

  return (

    <div className='App'>
      <h1>Words Filter</h1>
      <div className='inputs'>

        <input
          type="text"
          placeholder="Enter Length of the Word"
          name="length"  // Change from Lengthy
          value={filters.length}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter First Letter"
          name="firstLetter"
          value={filters.firstLetter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter Second Letter"
          name="secondLetter"
          value={filters.secondLetter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter Third Letter"
          name="thirdLetter"  // Change from third
          value={filters.thirdLetter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter Fourth Letter"
          name="fourthLetter"  // Change from third
          value={filters.fourthLetter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter Fifth Letter"
          name="fifthLetter"  // Change from third
          value={filters.fifthLetter}
          onChange={handleFilterChange}
        />
         <input
          type="text"
          placeholder="Enter Six Letter"
          name="SixLetter"  // Change from third
          value={filters.SixLetter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter Last Letter"
          name="lastLetter"
          value={filters.lastLetter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter Letters not included"
          name="notIncluded"  // Change from nowords
          value={filters.notIncluded}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Enter the Word at any place"
          name="any"  
          value={filters.any}
          onChange={handleFilterChange}
        />
      </div>
      <ol className='list'>
  <div className="grid-container">
    {filteredWords.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </div>
</ol>
    </div>
  );
};

export default App;
