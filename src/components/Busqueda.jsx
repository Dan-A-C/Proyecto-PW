import React, { useEffect, useState } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

function Busqueda() {
    // Estado para almacenar los productos
    const [productos, setProductos] = useState([]);

    // Función para generar productos aleatorios
    const generarProductos = () => {
        const productosData = [
            {
                imagenSrc: 'ruta/de/imagen1.jpg',
                titulo: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)',
                fabricante: 'Bandai',
            },
            {
                imagenSrc: 'ruta/de/imagen2.jpg',
                titulo: 'Saint Seiya HQS Plus Athena Limited Edition Statue',
                fabricante: 'Bandai - Serie: Saint Seiya HQS',
            },
            {
                imagenSrc: 'ruta/de/imagen3.jpg',
                titulo: 'Saint Seiya Premium Masterline Dragon Shiryu Final Bronze Cloth 1/4 Scale Statue',
                fabricante: 'Prime 1 Studio - Serie: Knights of The Zodiac',
            },
            {
                imagenSrc: 'ruta/de/imagen4.jpg',
                titulo: 'Producto 4',
                fabricante: 'Fabricante 4',
            },
            {
                imagenSrc: 'ruta/de/imagen5.jpg',
                titulo: 'Producto 5',
                fabricante: 'Fabricante 5',
            },
            {
                imagenSrc: 'ruta/de/imagen6.jpg',
                titulo: 'Producto 6',
                fabricante: 'Fabricante 6',
            },
        ];

        // Generar precios aleatorios
        const productosConPrecio = productosData.map(producto => ({
            ...producto,
            precio: (Math.random() * (5000 - 100) + 100).toFixed(2)
        }));

        // Actualizar el estado con los productos generados
        setProductos(productosConPrecio);
    };

    // Llamar a la función para generar productos cuando el componente se monte
    useEffect(() => {
        generarProductos();
    }, []);

    return (
        <>
            <Cabecera />
            <div className="ordenar-container">
                <div className="ordenar">
                    <span>Ordenar Por: </span>
                    <select name="Precio">
                        <option>Precio</option>
                        <option>Nombre</option>
                        <option>Opcion C</option>
                    </select>
                </div>
            </div>
            <div className="productos">
                {/* Renderizar los productos en el JSX */}
                {productos.map((producto, index) => (
                    <div key={index} className="productos-container2">
                        <img src={producto.imagenSrc} alt="" />
                        <div className="producto-detalle">
                            <p className="producto-titulo">{producto.titulo}</p>
                            <p className="producto-fabri">Por: {producto.fabricante}</p>
                            <p className="producto-precio">S/ {producto.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="paginacion">
                <ul className="navega">
                    <li className="anterior">« Anterior</li>
                    <li className="pagina"><a href="#">1</a></li>
                    <li className="pagina"><a href="#">2</a></li>
                    <li className="pagina"><a href="#">3</a></li>
                    <li className="pagina"><a href="#">4</a></li>
                    <li className="puntos">...</li>
                    <li className="pagina"><a href="#">11</a></li>
                    <li className="siguiente">Siguiente »</li>
                </ul>
            </div>
            <Pie/>
        </>
    );
}

export default Busqueda;
