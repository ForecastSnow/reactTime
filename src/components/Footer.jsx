import { Link } from 'react-router-dom'

function Footer() {


    return (
        <>
            <footer className='mt-12'>
                <div>
                    <Link >Terminos y condiciones</Link>
                    <Link >Informacion sobre seguros</Link>
                    <Link >Ayuda</Link>
                </div>

                <div>
                    <Link >Informacion sobre seguros</Link>
                    <Link >Conoce las normas</Link>
                    <Link >Contacto</Link>
                </div>
            </footer>

        </>
    );
}

export default Footer;