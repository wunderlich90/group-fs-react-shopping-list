import React from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';


function ShoppingList({list, deleteItem, fetchList, clearList, putItem}) {
    
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
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
