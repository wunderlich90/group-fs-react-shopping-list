import React from 'react';
import './shoppinglistitem.css';

function ShoppingListItem({data, deleteItem}) {
    console.log('data in shopping list item component', data);
    return (
        <div id='shopping-list-item'>
            {data.name}
            {data.quantity}
            {data.unit}
            {data.isPurchased}
            <button>BUY</button>
            <button onClick={deleteItem(data.id)}>REMOVE</button>
        </div>
    );
}

export default ShoppingListItem;
