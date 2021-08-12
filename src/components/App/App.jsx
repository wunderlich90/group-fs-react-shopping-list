import React from 'react';

import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

import './App.css';
import GroceryForm from '../Form/form.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
            <GroceryForm/>

                <p>Under Construction...</p>
                <ShoppingList />
            </main>
        </div>
    );
}

export default App;
