import React from "react";
import profileImage from "../assets/img/profile.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div
      className="d-flex flex-column align-items-center w-50 border rounded"
      style={{ backgroundColor: "#e9e9e9" }}
    >
      <h3 className="w-100 text-white bg-dark rounded">Perfil de Usuario</h3>
      <img
        src={profileImage}
        alt="Foto de perfil"
        className="w-25 rounded-circle border border-dark"
      />

      <h5 className="d-flex align-items-center justify-content-center mt-3 w-75 border border-info rounded bg-white p-3"
      style={{height: "35px"}}>Nombre: Gonzalo Rojas</h5>

      <h5
        className="d-flex align-items-center justify-content-center mt-2 w-75 border border-info rounded bg-white p-3"
        style={{ height: "35px" }}
      >
        Email: gonzalo.edurojas@gmail.com
      </h5>
      <Link to="/login" className="btn btn-danger w-75 m-4">
        Cerrar sesión
      </Link>
    </div>
  );
};

export default Profile;
