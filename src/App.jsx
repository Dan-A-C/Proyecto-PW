import { Routes, Route } from "react-router-dom"
import UsuarioAdminDashboard from './components/UsuarioAdminDahsboard'
import Inicio from './components/Inicio'
import Checkout from "./components/Checkout"
import Carrito from "./components/Carrito"
import PedidoCompleto from "./components/PedidoCompleto"
import Detalle from "./components/Detalle"
import Busqueda from "./components/Busqueda"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/Inicio" element={ <Inicio /> } />
        <Route path="/Busqueda" element={ <Detalle /> } />
        <Route path="/Detalle" element={ <Busqueda /> } />
        <Route path="/usuario_admin_dashboard" element={ <UsuarioAdminDashboard /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/pedido_completo" element={ <PedidoCompleto /> } />
      </Routes>
    </div>
  )
}

export default App