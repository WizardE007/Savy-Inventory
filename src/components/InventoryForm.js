import React, { useState, useEffect } from 'react';

const InventoryForm = ({ addItem, updateItem, editingItem }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        if (editingItem) {
            setName(editingItem.name);
            setType(editingItem.type);
            setValue(editingItem.value);
        }
    }, [editingItem]);

    const handleSubmit = (e) => {
        e.preventDefault(); // stops page from reloading after each submisson
        const formattedValue = Number(value);
        if (editingItem) {
            updateItem({ ...editingItem, name, type, value});
        } else {
        addItem({ id: Date.now(), name, type, value }); // sending our data (inserted values) to the App.js
        }
        setName(''); // clears form after submission and sets it back to placeholder value
        setType(''); // clears form after submission and sets it back to placeholder value
        setValue(''); // clears form after submission and sets it back to placeholder value
    };

    return (
        // form listens for when sumbit button is clicked and runs handleSubmit function
        // CREATE 
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Jewelry Name"
            value={name}
            // updates the state whenever the user types something in the input field
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Jewelry Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Value ($)"
            value={value}
            onChange={(e) => setValue(e.target.value)} // on every change (onChange) thats made (e.target.value) updates the state (setValue)
            required
          />
          <button type="submit" className={editingItem ? 'update' : 'add'}>{editingItem ? 'Update Jewelry' : 'Add Jewelry'}</button>

        </form>
      );
    
};

export default InventoryForm;