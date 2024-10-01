import React from 'react';

function CartWidget() {
    return (
        <div className='relative bottom-1'>
            <div className='text-xs absolute left-10 bg-red-600 w-5 h-5 rounded-full'>
                <p className='text-xs'>9</p>
            </div>

            <img className='w-10 ml-4' src="./src/assets/img/carrito.png" alt="icono de carrito" />
        </div>

    );
}

export default CartWidget;