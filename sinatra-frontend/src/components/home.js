// import React from 'react';
// import '../App.css'

// const Footballer = ({ name, team }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Team: {team}</p>
//     </div>
//   );
// };
// const App = () => {
//   const footballers = [
//     { name: 'Lionel Messi', team: 'Paris Saint-Germain' },
//     { name: 'Cristiano Ronaldo', team: 'Manchester United' },
//     { name: 'Neymar Jr.', team: 'Paris Saint-Germain' },
//     { name: 'Robert Lewandowski', team: 'Bayern Munich' },
//   ];

//   return (
//     <div className='home-page'>
//       <h1>Famous Footballers</h1>
//       {footballers.map((footballer, index) => (
//         <Footballer
//           key={index}
//           name={footballer.name}
//           team={footballer.team}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';

const Form = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteTerm, setDeleteTerm] = useState('');
  const [updateTerm, setUpdateTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic using the searchTerm state value
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // Perform delete logic using the deleteTerm state value
    console.log(`Deleting: ${deleteTerm}`);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Perform update logic using the updateTerm state value
    console.log(`Updating: ${updateTerm}`);
  };

  return (
    <div>
      <h1>Form</h1>
      <form>
        <h3>Search for any Europe player</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <h3>Delete player</h3>
        <input
          type="text"
          value={deleteTerm}
          onChange={(e) => setDeleteTerm(e.target.value)}
        />
        <button onClick={handleDelete}>Delete</button>

        <h3>Update player</h3>
        <input
          type="text"
          value={updateTerm}
          onChange={(e) => setUpdateTerm(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default Form;