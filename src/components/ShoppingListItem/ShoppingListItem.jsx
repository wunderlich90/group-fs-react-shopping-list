import React from 'react';
import './shoppinglistitem.css';

function ShoppingListItem({data, deleteItem, fetchList, markPurchased}) {

    const itemDeleted = () => {
        deleteItem(data.id)
        fetchList();
    }
    const markItPurchased = () => {
        markPurchased(data.id);
        fetchList();
    }

    console.log('data in shopping list item component', data);

    return (
        <div id='shopping-list-item'>
            {data.name}
            {data.quantity}
            {data.unit}
            {data.is_purchased}
            <button onClick={markItPurchased}>BUY</button>
            <button onClick={itemDeleted}>REMOVE</button>
        </div>
    );
}

export default ShoppingListItem;
