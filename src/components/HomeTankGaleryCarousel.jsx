import React, { useState, useEffect } from 'react';
import ItemGalery from './ItemGalery';

function HomeTankGaleryCarousel({ items }) {


    const [itemInView, setItemInView] = useState(0);

    useEffect(() => {
        if (!items?.length) return;

        const intervalId = setInterval(rightSlide, 10000);
        return () => clearInterval(intervalId);
    }, [items]);

    const rightSlide = () => {
        setItemInView((prevIndex) => (prevIndex + 1) % items.length);
    };

    /* const leftSlide = () => {
        setItemInView((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    }; */

    return (
        <>
            {items && items.length > 0 && (
                <ItemGalery item={items[itemInView]} key={items[itemInView].id} />
            )}
        </>
    );
}

export default HomeTankGaleryCarousel;
