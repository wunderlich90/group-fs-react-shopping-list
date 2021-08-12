import { func } from 'prop-types';
import react from 'react';
import { useState } from 'react';

function GroceryForm() {

    return(
<>
<br></br>
    <form onSubmit={console.log("test")}>
    <label htmlFor="Item:"> Item:</label>
    <input 
    type="text" 
    value=""
    onChange={evt => setPersonName(evt.target.value)}
    id="itemID" />

    <label htmlFor="Quantity:"> Quantity:</label>
    <input 
    type="number" 
    value=""
    onChange={evt => setPersonRole(evt.target.value)}
    id="quantityID" 
    />

<label htmlFor="Unit:"> Unit:</label>
    <input 
    type="text" 
    value=""
    onChange={evt => setPersonName(evt.target.value)}
    id="unitID" />

    <button>Save</button>
</form>
</>)
}

export default GroceryForm;
