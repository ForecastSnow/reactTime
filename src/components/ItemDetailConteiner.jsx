import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/data/products";
import ItemDetail from './ItemDetail';

function DetailItemConteiner() {


    const [item, setItem] = useState([]);

    const {idSelected} = useParams()

    const getProducts = () => new Promise((res) => { setTimeout(() => { res(products) }, 300) });

    useEffect(() => {getProducts().then(res => setItem(res.find(item => item.id == parseInt(idSelected))));

    },[idSelected]);


    return (
        <>
        
        <ItemDetail item={item}/>

        </>
    )
};

export default DetailItemConteiner;