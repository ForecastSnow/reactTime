import React from 'react';
import CartWidget from './CartWidget.jsx'

function NavBar() {
    return (
        <nav className='bg-navBarColor bg-opacity-75 stroke-1 flex flex-row justify-between w-full h-40'>

            <div className="flex flex-col ml-28 mt-6 lg:ml-36 xl:ml-56 2xl:ml-64">
                <div className='flex flex-row justify-between'>

                    <a className='w-20 ' href="/index.html"><img className='relative bottom-3' src="./src/assets/img/icono.png" alt="icono tienda" /></a>
                    <h1 className="font-bebas text-black text-4xl">Mercado Blindado</h1>

                </div>

                <ul className='flex justify-between mt-3 ml-1 '>
                    <li>
                        <a className='text-black text-lg mr-4' href="">Tanques</a>
                    </li>
                    <li>
                        <a className='text-black text-lg mr-4' href="">Aviones</a>
                    </li>
                    <li>
                        <a className='text-black text-lg mr-4' href="">Ofertas</a>
                    </li>
                    <li>
                        <a className='text-black text-lg ' href="">Contacto</a>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col mr-28 mt-4 lg:mr-36 xl:mr-56 2xl:mr-64">
                <div className='flex flex-row mb-4 mt-2' >
                    <a className='text-black text-lg mr-7' href="">Crea tu cuenta</a>
                    <a className='text-black text-lg mr-7' href=""> Ingresar</a>
                    <CartWidget />
                </div>
                <div className='flex flex-row mt-4'>
                    <a className='text-black text-lg mr-6' href="">Ayuda</a>
                    <a className='text-black text-lg' href="">Vende tu articulo</a>

                </div>
            </div>
        </nav>


    );
}

export default NavBar;