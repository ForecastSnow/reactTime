import { Link } from 'react-router-dom'

function ItemGalery({ item }) {


    return (

        <>
            {item == null && (<div className='border-1 shadow-md border-black h-80 flex flex-row bg-galeryTankColor '>
                <img src={"/img/galeryLoading.gif"} alt="tanque de carga de galeria" />
                <div>
                    <p className='mb-4 text-black text-4xl' >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-black text-xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis ipsam perspiciatis dicta placeat temporibus amet alias corporis, pariatur quo nihil provident cumque autem, sint sed aliquam quis dignissimos minus!</p>

                </div>
            </div>)}

            {item != null && (<Link to={`/product/${item.id}`} className='border-1 border-black h-80 flex flex-row bg-galeryTankColor   '>
                <div className='flex shadow-md'>
                    <img className='object-fit w-5/12 h-[320px]' src={item.img} alt={item.nombre} />

                    <div className=' w-7/12 pt-4 pr-8 pl-8'>
                        <p className='mb-4 text-black text-4xl' >{item.frase}</p>
                        <p className='text-black text-xl mt-4' >{item.descripcion}</p>

                    </div>
                </div>


            </Link>)}
        </>

    );

}



export default ItemGalery