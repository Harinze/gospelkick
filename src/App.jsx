import React, { useState } from 'react';
import Card from './component/Card';
import Navbar from './component/Navbar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    { id: 1, title: 'Meat' },
    { id: 2, title: 'Rice' },
    { id: 3, title: 'Drink' }
  ];

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <Navbar onSearch={handleSearch} /> 
      <div className="flex flex-wrap justify-center w-full">
        {searchTerm === '' ? (
          cards.map(card => <Card key={card.id} title={card.title} />)
        ) : (
          filteredCards.map(card => <Card key={card.id} title={card.title} />)
        )}
      </div>
    </div>
  );
};

export default App;
