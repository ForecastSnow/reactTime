function HomeInfoNosotrosEnvios() {



    return (
        <>

            <div className="ml-[256px] mr-[256px]">

                <div className='border-1 border-black h-80 flex flex-row bg-orange-500  mt-12 '>
                    <div className='flex shadow-md'>
                        <img className='object-fit w-1/2 h-[320px]' src="/img/michiTank.jpg" alt="un michi en un tanque" />

                        <div className=' w-1/2 pt-4 pr-8 pl-8'>

                            <h3 className='mb-4 text-black text-4xl' >Globales y lideres</h3>
                            <p className='text-black text-xl mt-4' >Mercado Blindado es una empresa global líder en la venta de tanques y aviones antiguos, destacándose por ofrecer vehículos restaurados y funcionales a coleccionistas y museos de todo el mundo. Con una presencia internacional sólida y un enfoque exclusivo al cliente, se ha ganado el reconocimiento como la principal referencia en su industria. Además, la empresa comparte una peculiar pasión por los gatos, que se han convertido en una parte esencial de su cultura y ambiente de trabajo.</p>

                        </div>

                    </div>

                </div>

                <div className='border-1 border-black h-80 flex flex-row bg-blue-600 mt-12  '>
                    <div className='flex shadow-md'>


                        <div className=' w-1/2 pt-4 pr-8 pl-8'>

                            <h3 className='mb-4 text-black text-4xl' >Envios a todo el mundo</h3>
                            <p className='text-black text-xl mt-4' >Sabemos que una pieza histórica merece llegar en condiciones impecables a su destino, sin importar en qué lugar del mundo se encuentre. En Mercado Blindado, contamos con un equipo de logística especializado en transporte de vehículos pesados y aeronaves de colección, con una red global de transporte que abarca desde hangares privados hasta puertos y almacenes seguros en cada continente.</p>

                        </div>

                        <img className='object-fit w-1/2 h-[320px]' src="/img/militarHangar.jpg" alt="Hangar Militar" />

                    </div>

                </div>

            </div>

        </>
    )
}

export default HomeInfoNosotrosEnvios;