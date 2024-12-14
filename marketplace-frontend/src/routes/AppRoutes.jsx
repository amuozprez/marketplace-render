import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductoDetalle from "../Pages/ProductoDetalle";
import Perfil from "../Pages/Perfil";
import Contacto from "../Pages/Contacto";
import Nosotros from "../Pages/Nosotros";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CrearPublicacion from "../Pages/CrearPublicacion";
import Favoritos from "../Pages/MisFavoritos";
import Ajustes from "../Pages/Ajustes"; // Importamos Ajustes
import Categorias from "../Pages/Categorias";
import MisAnuncios from "../Pages/MisAnuncios"; // Importa tu componente "Mis Anuncios"
import Cart from "../components/Cart";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = ({ searchTerm }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm} />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/producto/:id" element={<ProductoDetalle />} />
      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ajustes"
        element={
          <ProtectedRoute>
            <Ajustes />
          </ProtectedRoute>
        }
      />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/publicar"
        element={
          <ProtectedRoute>
            <CrearPublicacion />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favoritos"
        element={
          <ProtectedRoute>
            <Favoritos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mis-anuncios"
        element={
          <ProtectedRoute>
            <MisAnuncios />
          </ProtectedRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
