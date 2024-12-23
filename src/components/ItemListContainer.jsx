import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { querySnapshot } from "../fireBase/db"


function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { category } = useParams();

    const getProducts = () => new Promise((res) => {res(querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()})))});


    useEffect(() => {

        if (category == undefined) {
            getProducts().then(res => setItems(res));
            return;
        }
        if (category == 'tanks') {
            getProducts().then(res => setItems(res.filter(item => item.categoria == 'tanque')));
            return;
        }
        if (category == 'planes') {
            getProducts().then(res => setItems(res.filter(item => item.categoria == 'avion')));
            return;
        }
        if (category == 'offers') {
            getProducts().then(res => setItems(res.filter(item => item.descuento == true)));
            return;
        }


    }, [category]);





    return (

        <div>

            <ItemList items={items} />

        </div>

    )

}

export default ItemListContainer;