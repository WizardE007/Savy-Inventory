import React from 'react';

const InventoryList = ({ items, deleteItem, editItem, sortItems }) => {
  const formatValue = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <span>
              {index + 1}. {item.name} - {item.type} - {formatValue(item.value)}
            </span>
            <div>
              <button onClick={() => editItem(item)} className="edit">Edit</button>
              <button onClick={() => deleteItem(item.id)} className="delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    
  );
};

export default InventoryList;
