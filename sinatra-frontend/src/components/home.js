import React from 'react';
import '../App.css'

const Footballer = ({ name, team }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Team: {team}</p>
    </div>
  );
};

const App = () => {
  const footballers = [
    { name: 'Lionel Messi', team: 'Paris Saint-Germain' },
    { name: 'Cristiano Ronaldo', team: 'Manchester United' },
    { name: 'Neymar Jr.', team: 'Paris Saint-Germain' },
    { name: 'Robert Lewandowski', team: 'Bayern Munich' },
  ];

  return (
    <div className='home-page'>
      <h1>Famous Footballers</h1>
      {footballers.map((footballer, index) => (
        <Footballer
          key={index}
          name={footballer.name}
          team={footballer.team}
        />
      ))}
    </div>
  );
};

export default App;
