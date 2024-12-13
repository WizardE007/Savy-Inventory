import React from 'react';


// our component function to show all items submitted
// passing our props param, that will contain list of jewelry items
const InventoryList = ({ items, deleteItem, editItem }) => {

    const formatValue = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
      };

    return (
        <ul>
            
            {items.map((item, index) => ( 
                // READ
                // we are using .map to iterate through items array
                // intializing each item to a property using id
                // each listed item needs its own key id 
                <li key ={item.id}>
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