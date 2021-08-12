import React from 'react';
import './shoppinglistitem.css';

function ShoppingListItem({data}) {
    console.log('data in shopping list item component', data);
    return (
        <div id='shopping-list-item'>
            {data.name}
            <button>BUY</button>
            <button>REMOVE</button>
        </div>
    );
}

export default ShoppingListItem;
