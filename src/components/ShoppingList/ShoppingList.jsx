import React from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import ItemPurchased from '../ShoppingListItem/ItemPurchased';


function ShoppingList({list, deleteItem, fetchList, clearList, putItem, markPurchased}) {
    
    const listCleared = () => {
        clearList();
        fetchList();
    }
    const resetList = () => {
        putItem();
        fetchList();
    }



    return (
        <div id='shopping-list' className='shopping-list'>
            <button onClick={resetList}>RESET</button>
            <button onClick={listCleared}>CLEAR</button> 
            <div id='shopping-list' className='list'>
                {list.map(itemIndividual => 
                ( 
                    <ShoppingListItem
                        key = {itemIndividual.id}
                        data = {itemIndividual}
                        deleteItem = {deleteItem}
                        fetchList={fetchList}
                        markPurchased={markPurchased}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
