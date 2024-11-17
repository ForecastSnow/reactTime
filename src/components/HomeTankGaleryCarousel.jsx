import React, { useState, useEffect } from 'react';
import ItemGalery from './ItemGalery';

function HomeTankGaleryCarousel({ items }) {


    const [itemInView, setItemInView] = useState(0);

    const [autoSkip, setAutoSkip] = useState(1);

    useEffect(() => {
        if (!items?.length) return;
        if (autoSkip == 0) {
            return;
        }
        const intervalId = setInterval(rightSlide, 3500);
        return () => clearInterval(intervalId);
    }, [items, autoSkip]);

    const rightSlide = () => {
        setItemInView((prevIndex) => (prevIndex + 1) % items.length);
    };

    const leftSlide = () => {
        setItemInView((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className='flex mt-14 mr-[176px] ml-[176px]'>
                <img className='w-20 h-64 my-auto cursor-pointer' src="/img/leftArrow.png" alt="flecha a la izquierda" onClick={() => {

                    setAutoSkip(0);

                    leftSlide();

                }} />

                {items?.length == 0 && (
                    <ItemGalery item={null} key={null} />
                )}

                {items?.length > 0 && (
                    <ItemGalery item={items[itemInView]} key={items[itemInView].id} />
                )}

                <img className='w-20 h-64 my-auto cursor-pointer' src="/img/rightArrow.png" alt="flecha a la derecha" onClick={() => {

                    setAutoSkip(0);

                    rightSlide();

                }} />



            </div >

        </>
    );
}

export default HomeTankGaleryCarousel;
