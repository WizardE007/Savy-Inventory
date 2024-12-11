import React from 'react';


// our component function to show all items submitted
// passing our props param, that will contain list of jewelry items
const InventoryList = ({ items, deleteItem, editItem }) => {
    return (
        <ul>
            
            {items.map((item) => ( // READ
                // we are using .map to iterate through items array
                // intializing each item to a property using id
                // each listed item needs its own key id 
                <li key ={item.id}>
                    {item.name} - {item.type} - ${item.value}
                    <button onClick={() => editItem(item)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default InventoryList;