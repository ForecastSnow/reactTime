import React, { useState, useContext } from 'react';
import { registroCompras } from "../fireBase/db"
import { CartContext } from '../contexts/cartContext';

function CheckoutForm() {

    const { cart } = useContext(CartContext);


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registroCompras({ cart, formData })
    };

    return (


        <form onSubmit={handleSubmit} className="m-10 w-4/6 p-8 rounded-xl border border-gray-300 bg-gray-100 shadow-lg space-y-6">

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left">Nombre: </label>
                <input className="w-full text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2 flex h-8 m-0">
                <label className="block text-2xl font-semibold text-black text-left">Email: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3 className="text-2xl text-black font-semibold mt-6">Dirección de Envío</h3>
            <div className="space-y-2 flex h-8 m-0">
                <label className="block text-2xl font-semibold text-black text-left">Dirección: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left">Ciudad: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left whitespace-nowrap">Código Postal: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3 className="text-2xl text-black font-semibold mt-6">Detalles de Pago</h3>
            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left whitespace-nowrap">Número de Tarjeta: </label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    maxLength="16"
                />
            </div>

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left whitespace-nowrap">Fecha de Exp: </label>
                <input className=" w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="month"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="space-y-2 flex h-8">
                <label className="block text-2xl font-semibold text-black text-left">CVV:</label>
                <input className="w-full p-3 text-lg rounded-lg border border-gray-300 text-black bg-white focus:outline-none "
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    maxLength="3"
                />
            </div>

            <button type="submit" className="btn w-full bg-green-500 rounded-lg font-semibold hover:bg-green-600 focus:outline-none ">
                Finalizar Compra
            </button>
        </form>


    );
}

export default CheckoutForm;