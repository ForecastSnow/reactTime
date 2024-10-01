import React from 'react';

function ItemListContainer({ejemplo}) {
    return (
        <section className='bg-sectionColor bg-opacity-75 stroke-1 h-screen flex justify-center items-center'>
            <h2 className='text-5xl text-black'>{ejemplo}</h2>
        </section>
    );
}

export default ItemListContainer;