import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../assets/data/products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { category } = useParams();

    const getProducts = () => new Promise((res) => { setTimeout(() => { res(products) }, 300) });


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
            getProducts().then(res => setItems(res.filter(item => item.descuento == 1)));
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