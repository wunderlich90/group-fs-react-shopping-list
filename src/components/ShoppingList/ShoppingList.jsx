import React from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

let list = [
    {name: 'dane', quantity: 3, unit: 'gallon', isPurchased: 'FALSE'},
    {name: 'Alex', quantity: 2, unit: 'gallon', isPurchased: 'FALSE'}
]

function ShoppingList(/*{list} */) {
    return (
        <div id='shopping-list' className='shopping-list'>
            <button>RESET</button>
            <button>CLEAR</button>
            <div id='shopping-list' className='list'>
                {list.map(itemIndividual => 
                (
                    <ShoppingListItem 
                        data = {itemIndividual}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
