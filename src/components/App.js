import React, { useState } from 'react';
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList'
import '../styles.css';

const App = () => {
  // stating to manage the list of jewelry items and track new jewelry that is added
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };


  return (
    <div>
      <h1>Jewelry Tracker</h1>
      <p>Welcome to the Jewelry Tracker App!</p>
      <InventoryForm addItem={addItem}/>
      {/* <InventoryList items={items} /> */}
    </div>
  );
};





export default App;
