import React from 'react';
import CartWidget from './CartWidget.jsx'

function Navbar() {
    return (
        <nav>
            <h1 className="hidden">Furia Blindada</h1>
            <div>
                <a href="/index.html"><img src="./src/assets/img/icono.png" alt="icono tienda" /></a>
                <form action="">
                    <input type="text" placeholder='Sherman' />
                </form>
                <ul>
                    <li>
                        <a href="">Tanques</a>
                    </li>
                    <li>
                        <a href="">Aviones</a>
                    </li>
                    <li>
                        <a href="">Ofertas</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </div>

            <div>
                <div>
                    <a href="">Crea tu cuenta</a>
                    <a href=""> Ingresar</a>
                </div>
                <div>
                    <a href="">Ayuda</a>
                    <a href="">Vende tu articulo</a>
                    <CartWidget />
                </div>
            </div>
        </nav>


    );
}

export default Navbar;