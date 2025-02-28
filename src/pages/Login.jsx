import React from "react";
import { useState } from "react";
import { useFormState } from "react-dom";
import Swal from "sweetalert2";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errores, setErrores] = useState([]);

  //Función para validar formulario identificando errores
  function validateLogin() {
    const errores = [];

    if (!userEmail) {
      errores.push({ campo: "userEmail", mensaje: "Debes ingresar un email" });
    }
    if (!userPassword) {
      errores.push({
        campo: "userPassword",
        mensaje: "Debes ingresar una contraseña",
      });
    }
    if (userPassword.length < 6) {
      errores.push({
        campo: "userPassword",
        mensaje: "La contraseña no puede ser menor a 6 caracteres",
      });
    }

    setErrores(errores);
    return errores.length === 0; //Devuelve true si no hay errores y false si hay errores
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formValido = validateLogin();

    if (formValido) {
      Swal.fire({
        title: "Inicio de sesión completado",
        icon: "success",
        draggable: true,
      });
    }
  }

  //Función para mostrar mensajes de error
  function getErrorMessage(field) {
    const error = errores.find((err) => err.campo === field);
    return error ? error.mensaje : null;
  }

  return (
    <section className="register-container container-fluid">
      <div className="register">
        <h2 className="text-center">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <h4>Email</h4>
          <div className="mb-3">
            <input
              type="email"
              value={userEmail}
              className={`form-control ${
                getErrorMessage("userEmail") ? "is-invalid" : ""
              }`}
              placeholder="example@example"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            {getErrorMessage("userEmail") && (
              <div className="invalid-feedback">
                {getErrorMessage("userEmail")}
              </div>
            )}
          </div>

          <h4>Contraseña</h4>
          <div className="mb-3">
            <input
              type="password"
              value={userPassword}
              className={`form-control ${
                getErrorMessage("userPassword") ? "is-invalid" : ""
              }`}
              placeholder="Introduce tu contraseña"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            {getErrorMessage("userPassword") && (
              <div className="invalid-feedback">
                {getErrorMessage("userPassword")}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
