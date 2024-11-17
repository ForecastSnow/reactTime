import React from 'react';
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='bg-navBarColor bg-opacity-75 stroke-1 flex flex-row justify-between w-scream h-40'>

            <div className="flex flex-col ml-28 mt-6 lg:ml-36 xl:ml-56 2xl:ml-64">
                <Link to='/' className='flex flex-row justify-between'>

                    <img className=' w-20 relative bottom-3' src="./src/assets/img/icono.png" alt="icono tienda" />
                    <h1 className="font-bebas text-black text-4xl">Mercado Blindado</h1>

                </Link>

                <ul className='flex justify-between mt-3 ml-1 '>
                    <li>
                        <Link to='/category/tanks' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Tanques</Link>
                    </li>
                    <li>
                        <Link to='/category/planes' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Aviones</Link>
                    </li>
                    <li>
                        <Link to='/category/offers' className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-4' >Ofertas</Link>
                    </li>
                    <li>
                        <Link to={"/developingState"} className='text-black text-lg hover:text-gray-700 focus:text-gray-400' >Contacto</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col mr-28 mt-4 lg:mr-36 xl:mr-56 2xl:mr-64">
                <div className='flex flex-row mb-4 mt-2' >
                    <Link to={"/developingState"} className='text-black text-lg hover:text-gray-700 mr-7 focus:text-gray-400' >Crea tu cuenta</Link>
                    <Link to={"/developingState"} className='text-black text-lg hover:text-gray-700 mr-7 focus:text-gray-400' > Ingresar</Link>
                    <Link to='/cart' className='text-current ' ><CartWidget /></Link>

                </div>
                <div className='flex flex-row mt-4'>
                    <Link to={"/developingState"} className='text-black text-lg hover:text-gray-700 focus:text-gray-400 mr-6 ' >Ayuda</Link>
                    <Link to={"/developingState"} className='text-black text-lg hover:text-gray-700 focus:text-gray-400' >Vende tu articulo</Link>

                </div>
            </div>
        </nav>


    );
}

export default NavBar;
