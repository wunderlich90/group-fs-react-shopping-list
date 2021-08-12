import react, { useState, useEffect } from 'react';
import { func } from 'prop-types';


function GroceryForm({postItem}) {


    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setNewItemQuantity] = useState(0);
    let [newItemUnit, setNewItemUnit] = useState('');

    const onFormSubmit = (evt) => {
        evt.preventDefault();

        let newItem = {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnit,
            isPurchased: 'false'
        }

        console.log('our new item object and we got in!',  newItem);

        postItem(newItem);

        setNewItemName('');
        setNewItemQuantity(0);
        setNewItemUnit('');
    }
    

    return(
    <>
    <br></br>
    <form onSubmit={onFormSubmit}>
    <label htmlFor="Item:"> Item:</label>
    <input 
    type="text" 
    value= {newItemName}
    onChange={evt => setNewItemName(evt.target.value)}
    id="itemID" />

    <label htmlFor="Quantity:"> Quantity:</label>
    <input 
    type="number" 
    value= {newItemQuantity}
    onChange={evt => setNewItemQuantity(evt.target.value)}
    id="quantityID" 
    />

<label htmlFor="Unit:"> Unit:</label>
    <input 
    type="text" 
    value= {newItemUnit}
    onChange={evt => setNewItemUnit(evt.target.value)}
    id="unitID" />

    <button>Save</button>
</form>
</>)
}

export default GroceryForm;
