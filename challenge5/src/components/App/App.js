import React from 'react';
import Header from '../Header/Header';
import TripMaker from '../TripMaker/TripMaker';
import UserContext from '../../context/User/User';


const user = {
  name: "Homero",
  email: "hsimpson@email.com"
}

function App() {
  return (
    <>
      <React.StrictMode>
        <UserContext.Provider value={user}>
          <Header/>
          <TripMaker/>
        </UserContext.Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
