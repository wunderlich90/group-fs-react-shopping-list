import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

import './App.css';
import GroceryForm from '../Form/form.jsx';

function App() {

    let [shoppingListArray, setShoppingListArray] = useState([]);

    // On Load, do this thing
    useEffect(() => {
        console.log('in useEffect')
        fetchList ();
    }, []);

    const fetchList = () => {
        console.log('got into fetch list function');
        axios.get('/list').then((response) => {
            console.log('this is the response from fetchList', response.data);
            setShoppingListArray(response.data);
        }).catch(error => {
            console.log('POST /list failed', error);
          })
    }

    /**
     * Post Item Axios Request
     * Adds our new shopping list item
     */
    const postItem = (newItem) => {
        axios({
            method: 'POST',
            url: '/list',
            data: newItem
        }).then(response => {
            console.log('POST /list', response);
            fetchList();
          }).catch(error => {
            console.log('POST /list failed', error);
          })
    }

    const putItem = () => {
        axios({
            method: 'PUT',
            url: '/list',
        }).then(response => {
            console.log('POST /list', response);
            fetchList();
          }).catch(error => {
            console.log('POST /list failed', error);
          })
    }

    const deleteItem = (id) => {
        console.log('This is the id', id);

        axios({
            method: 'DELETE',
            url: `/list/${id}`
        }).then(response => {
            console.log('Deleted item');
        }).catch(error => {
            console.log('DELETE error', error);
        })
    }

    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/list'
        }).then(response => {
            console.log('Cleared list');
        }).catch(error => {
            console.log('DELETE LIST error', error);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
            <GroceryForm 
                postItem= {postItem}
            />
            
            <ShoppingList 
                list={shoppingListArray}
                deleteItem={deleteItem}
                fetchList={fetchList}
                clearList={clearList}
                putItem={putItem}
            />
            </main>
        </div>
    );
}

export default App;
