import React, { useState, useEffect } from "react";
import InventoryForm from "./InventoryForm";
import InventoryList from "./InventoryList";
import "../styles.css";

const App = () => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("inventory");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(items));
  }, [items]);

  const totalValue = items.reduce((sum, item) => sum + Number(item.value || 0), 0);
  const averageValue = items.length > 0 ? totalValue / items.length : 0;

  const addItem = (item) => setItems([...items, item]);
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  const editItem = (item) => setEditingItem(item);
  const updateItem = (updatedItem) =>
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item))) && setEditingItem(null);

  const sortItems = (property) => {
    const sorted = [...items].sort((a, b) => {
      if (typeof a[property] === "string") return a[property].localeCompare(b[property]);
      return a[property] - b[property];
    });
    setItems(sorted);
  };

  // Filtered Items
  const filteredItems = items.filter((item) =>
    searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["Name", "Type", "Value"];
    const csvRows = [headers.join(",")];

    items.forEach((item) => {
      csvRows.push(`${item.name},${item.type},${item.value}`);
    });

    const csvContent = `data:text/csv;charset=utf-8,${csvRows.join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inventory.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to JSON
  const exportToJSON = () => {
    const jsonContent = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(items, null, 2))}`;
    const link = document.createElement("a");
    link.setAttribute("href", jsonContent);
    link.setAttribute("download", "inventory.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <div className="form-panel">
        <h2>{editingItem ? "Edit Jewelry" : "Add Jewelry"}</h2>
        <InventoryForm addItem={addItem} updateItem={updateItem} editingItem={editingItem} />
      </div>

      <div className="inventory-panel">
        <h2>Inventory List</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Jewelry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="inventory-summary">
          <p>
            <strong>Total Items:</strong> {items.length}
          </p>
          <p>
            <strong>Total Value:</strong> ${totalValue.toLocaleString()}
          </p>
          <p>
            <strong>Average Value:</strong>{" "}
            ${averageValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
        <div className="sort-filter-controls">
          <button onClick={() => sortItems("name")}>Sort By Name</button>
          <button onClick={() => sortItems("type")}>Sort By Type</button>
          <button onClick={() => sortItems("value")}>Sort By Value</button>
          <button onClick={exportToCSV}>Export to CSV</button>
          <button onClick={exportToJSON}>Export to JSON</button>
        </div>
        <InventoryList items={filteredItems} deleteItem={deleteItem} editItem={editItem} sortItems={sortItems} />
      </div>
    </div>
  );
};

export default App;
