import React, { useState } from 'react';
import Card from './component/Card';
import Navbar from './component/Navbar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [error, setError] = useState(false);

  const cards = [
    { id: 1, title: 'Meat' },
    { id: 2, title: 'Rice' },
    { id: 3, title: 'Drink' }
  ];

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setFilteredCards([]);
      setError(false);
    } else {
      const filtered = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
      setError(filtered.length === 0);
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <Navbar onSearch={handleSearch} /> 
      {error && searchTerm !== '' && <p className="text-red-500">No matching items found.</p>}
      <div className="flex flex-wrap justify-center w-full">
        {(searchTerm === '' || filteredCards.length === 0) && 
          cards.map(card => <Card key={card.id} title={card.title} />)
        }
        {searchTerm !== '' && filteredCards.map(card => <Card key={card.id} title={card.title} />)}
      </div>
    </div>
  );
};

export default App;
