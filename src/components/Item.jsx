import { Link } from 'react-router-dom'


function Item({ item }) {


    return (
        <>
            <div className='border-1 border-black bg-white bg-opacity-50'>
                <img src={`/reactTime/img/${item.categoria}${item.id}.jpg`}
                    alt={`${item.categoria} ${item.nombre}`} />
                <p className='text-black text-5xl mt-4'>{item.nombre}</p>
                <p className='text-black text-3xl mt-4'>${item.precio}</p>
                <p className='text-black text-xl mt-4'></p>
                <Link className='text-blue text-4xl' to={`/reactTime/product/${item.id}`}>detalles</Link>

            </div>


        </>


    )
}

export default Item