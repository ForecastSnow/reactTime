import { products } from '../assets/data/products'
import { useEffect, useState } from 'react'
import HomeTankGaleryCarousel  from './HomeTankGaleryCarousel'


function HomeTankGaleryConteiner() {

    const [randomsItems, setRandomsItems] = useState([]);

    const getProducts = () => new Promise((res) => { setTimeout(() => { res(products) }, 320) });

    useEffect(() => {
        getProducts().then(res => {
            const array = res;

            setRandomsItems(array.sort(() => Math.random() - 0.5).slice(0, 3));
        })
    }, []);

    return (
        <>

        {<HomeTankGaleryCarousel items={randomsItems} />}

        </>
    )


}

export default HomeTankGaleryConteiner;