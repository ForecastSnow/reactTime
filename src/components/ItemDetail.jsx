import ItemCount from './ItemCount';
import { useContext, useRef } from 'react';
import { CartContext } from '../contexts/cartContext';

function ItemDetail({ item }) {

    const { itemCartAdd } = useContext(CartContext);

    const countRef = useRef(null);


    if (item.nombre == undefined) {
        return (

            <>

                <div className='flex flex-row ml-[256px] mr-[256px] h-[600px] justify-between mt-12'>
                    <img className='rounded-xl shadow-md w-[704px] h-[540px] border border-black' src="/img/tankLoading.gif" alt="animacion cargando" />

                    <div className='w-1/3 h-[540px] border border-black rounded-xl'>

                        <p className=' animate-pulse h-12 bg-gray-300 rounded-md ml-20 mr-20 text-5xl mb-14 mt-12'></p>

                        <p className='bg-gray-300 h-10 rounded-md ml-28 mr-28 text-5xl mb-14 mt-12'></p>

                        <div className='flex items-center justify-center mt-16'>

                            <ItemCount ref={countRef} />

                            <button onClick={() => { if (item !== undefined) { itemCartAdd(item, countRef.current.itemCount()) } }} className='btn w-52 bg-blue-500 hover:bg-blue-600' >Agregar al carrito</button>



                        </div>


                    </div>



                </div>
                <div className='ml-[256px] mr-[256px] mb-10'>

                    <p className=' mt-3 mb-10 w-[500px] h-8 bg-gray-300 rounded animate-pulse '></p>
                    <p className=' mt-3 h-4 bg-gray-300 rounded animate-pulse '></p>
                    <p className=' mt-3 h-4 bg-gray-300 rounded animate-pulse '></p>
                    <p className=' mt-3 h-4 bg-gray-300 rounded animate-pulse '></p>

                </div>



            </>




        )
    }

    return (
        <>
            <div className='flex flex-row ml-[256px] mr-[256px] h-[600px] justify-between mt-12'>
                <img className='rounded-xl shadow-md w-[704px] h-[540px]' src={item.img} />

                <div className='w-1/3 h-[540px] shadow-md bg-cyan-100 border border-black rounded-xl'>
                    <p className='text-black text-5xl whitespace-nowrap mb-14 mt-12'>{item.nombre}</p>



                    {item.precioDescuento == undefined && <p className='text-black text-4xl mt-10'>Precio: ${item.precio}</p>}

                    {item.precioDescuento !== undefined && <><del className='text-red-500 text-4xl mt-10'>Precio: ${item.precio}</del><p className='text-green-700 text-4xl mt-10'>Descuento: ${item.precioDescuento}</p></>}

                    <div className='flex items-center justify-center mt-16'>

                        <ItemCount ref={countRef} />

                        <button onClick={() => { if (item !== undefined) { itemCartAdd(item, countRef.current.itemCount()) } }} className='btn w-52 shadow-md bg-blue-500 hover:bg-blue-600' >Agregar al carrito</button>



                    </div>





                </div>



            </div>
            <div className='ml-[256px] mr-[256px] mb-10'>

                <p className='text-black text-4xl text-left mb-12'>{item.frase}</p>
                <p className='text-black text-xl text-left '>{item.descripcion}</p>

            </div>






        </>
    );
}

export default ItemDetail;