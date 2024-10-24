import React from 'react';
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='bg-navBarColor bg-opacity-75 stroke-1 flex flex-row justify-between w-scream h-40'>

            <div className="flex flex-col ml-28 mt-6 lg:ml-36 xl:ml-56 2xl:ml-64">
                <Link to='/reactTime/' className='flex flex-row justify-between'>

                    <img className=' w-20 relative bottom-3' src="./src/assets/img/icono.png" alt="icono tienda" />
                    <h1 className="font-bebas text-black text-4xl">Mercado Blindado</h1>

                </Link>

                <ul className='flex justify-between mt-3 ml-1 '>
                    <li>
                        <Link to='/reactTime/category/tanks' className='text-black text-lg hover:text-gray-700 mr-4' >Tanques</Link>
                    </li>
                    <li>
                        <Link to='/reactTime/category/planes' className='text-black text-lg hover:text-gray-700 mr-4' >Aviones</Link>
                    </li>
                    <li>
                        <Link to='/reactTime/category/offers' className='text-black text-lg hover:text-gray-700 mr-4' >Ofertas</Link>
                    </li>
                    <li>
                        <Link to='/reactTime/contact' className='text-black text-lg hover:text-gray-700' >Contacto</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col mr-28 mt-4 lg:mr-36 xl:mr-56 2xl:mr-64">
                <div className='flex flex-row mb-4 mt-2' >
                    <Link className='text-black text-lg hover:text-gray-700 mr-7' >Crea tu cuenta</Link>
                    <Link className='text-black text-lg hover:text-gray-700 mr-7' > Ingresar</Link>
                    <CartWidget />
                </div>
                <div className='flex flex-row mt-4'>
                    <Link className='text-black text-lg hover:text-gray-700 mr-6' >Ayuda</Link>
                    <Link className='text-black text-lg hover:text-gray-700' >Vende tu articulo</Link>

                </div>
            </div>
        </nav>


    );
}

export default NavBar;