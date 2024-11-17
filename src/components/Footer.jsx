import { Link } from 'react-router-dom'

function Footer() {


    return (
        <>
            <footer className="flex bg-stone-500 mt-12 h-[270px]  " >
                <div className="flex flex-col items-center w-1/2 mt-10 ml-[256px]">
                    <Link to={"/developingState"} className="text-left w-1/2 text-black text-2xl mb-6" >Terminos y condiciones</Link>
                    <Link to={"/developingState"} className="text-left w-1/2 text-black text-2xl mb-6">Informacion sobre seguros</Link>
                    <Link to={"/developingState"} className="text-left w-1/2 text-black text-2xl mb-6">Ayuda</Link>
                </div>

                <div className='flex flex-col items-center w-1/2 mt-10 mr-[256px]'>
                    <Link to={"/developingState"} className="text-left w-1/2 text-black text-2xl mb-6">Informacion sobre seguros</Link>
                    <Link to={"/developingState"} className="text-left w-1/2 text-black text-2xl mb-6">Conoce las normas</Link>
                    <Link to={"/developingState"} className="text-left w-1/2 text-black text-2xl mb-6">Contacto</Link>
                </div>
            </footer>

        </>
    );
}

export default Footer;