import React, { useState } from 'react';

const InventoryForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ id: Date.now(), name, type, value });
        setName('');
        setType('');
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Jewelry Name"
            value={name}
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
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Add Jewelry</button>
        </form>
      );
    
};

export default InventoryForm;