import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact name = "Hilda Sutton" avatar = "https://randomuser.me/api/portraits/women/47.jpg" online/>
      <Contact name = "Eli Ramos" avatar = "https://randomuser.me/api/portraits/men/51.jpg" online/>
      <Contact name = "Justin Porter" avatar = "https://randomuser.me/api/portraits/men/48.jpg" online/>
    </div>
  );
}

export default App;
