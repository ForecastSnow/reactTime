import { querySnapshot } from "../fireBase/db"
import { useEffect, useState } from 'react'
import HomeTankGaleryCarousel  from './HomeTankGaleryCarousel'


function HomeTankGaleryConteiner() {

    const [randomsItems, setRandomsItems] = useState([]);

    const getProducts = () => new Promise((res) => {res(querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()})))});

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