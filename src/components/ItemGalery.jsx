import { Link } from 'react-router-dom'

function ItemGalery({ item }) {



    return (

        <>
            <Link to={`/reactTime/product/${item.id}`} className='border-1 border-black h-80 flex flex-row bg-galeryTankColor  mt-8 ml-28 mr-28  lg:ml-36 mr-36 xl:ml-56 mr-56 2xl:ml-64 mr-64 '>
                <img src={`/reactTime/img/${item.categoria}${item.id}.jpg`} alt={`${item.categoria} ${item.nombre}`} />
                <div>
                    <p className='mb-4 text-black text-4xl' >{item.frase}</p>
                    <p className='text-black text-xl' >{item.descripcion}</p>

                </div>
            </Link>
        </>

    );

}



export default ItemGalery