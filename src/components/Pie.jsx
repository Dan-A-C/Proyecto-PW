import React from 'react';
import './Parte1.css';

function Pie() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nombre">
          <h2>LA TIENDITA DEL ABUELO</h2>
          <p>&copy; 2010-2020</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">Privacy — Terms</a>
        </div>
        <div className="footer-nombre">
          <p>Cuenta</p>
          <a href="">Login</a>
          <a href="">Registro</a>
          <a href="">Carrito</a>
        </div>
        <div className="footer-nombre">
          <p>Productos</p>
          <a href="">Mas vendidos</a>
          <a href="">Nuevos</a>
          <a href="">Ofertas</a>
        </div>
        <div className="footer-nombre">
          <p>Ayuda</p>
          <a href="">Acerca de Nosotros</a>
          <a href="">Politica de Envio</a>
          <a href="">FAQ</a>
        </div>
        <div className="footer-nombre2">
          <a href="#Facebook"><img src="../Imagenes/facebook-square.svg" alt="Facebook" /></a>
          <a href="#Instagram"><img src="../Imagenes/instagram.svg" alt="Instagram" /></a>
          <a href="#X"><img src="../Imagenes/twitter-square.svg" alt="X" /></a>
          <a href="#Youtube"><img src="../Imagenes/youtube-square.svg" alt="Youtube" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Pie;