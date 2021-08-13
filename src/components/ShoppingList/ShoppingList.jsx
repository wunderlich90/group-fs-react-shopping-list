import React from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';


function ShoppingList({list, deleteItem, fetchList}) {
    return (
        <div id='shopping-list' className='shopping-list'>
            <button>RESET</button>
            <button>CLEAR</button> 
            <div id='shopping-list' className='list'>
                {list.map(itemIndividual => 
                (
                    <ShoppingListItem
                        key = {itemIndividual.id}
                        data = {itemIndividual}
                        deleteItem = {deleteItem}
                        fetchList={fetchList}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
