import ItemCount from './ItemCount';

function ItemDetail({ item }) {



    return (
        <>
            <div className='flex flex-row justify-around'>
                <img src={`/reactTime/img/${item.categoria}${item.id}.jpg`} alt={`${item.categoria} ${item.nombre}`} />

                <div>
                    <p className='text-black text-6xl'>{item.nombre}</p>
                    <p className='text-black text-4xl'>Precio:${item.precio}</p>
                    <p className='text-black text-2xl'>{item.frase}</p>
                    <p className='text-black text-xl w-96'>{item.descripcion}</p>
                    
                </div>
            </div>

            <h2 className='text-black text-4xl'>Soy el ItemDetailConteiner {item.id}</h2>
            <ItemCount />
        </>
    );
}

export default ItemDetail;