import React, { useState } from 'react';
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList'
import '../styles.css';

const App = () => {
  
  // stating to manage the list of jewelry items and track new jewelry that is added
  const [items, setItems] = useState([]);
  const [editingItem, setEditngItem] = useState(null); // track editing using state
  // CREATE
  const addItem = (item) => {
    setItems([...items, item]);
  };

   // DELETE
   const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id ));
  };

  // UPDATE
  const editItem = (item) => {
    setEditngItem(item);
  }

  const updateItem = (updateItem) => {
    setItems(items.map((item) => (item.id === updateItem.id ? updateItem : item )));
    setEditngItem(null);
  };





  return (
    <div>
      <h1>Jewelry Tracker</h1>
      <p>Welcome to the Jewelry Tracker App!</p>
      <InventoryForm addItem={addItem} updateItem={updateItem} editingItem={editingItem} />
      <InventoryList items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};





export default App;
