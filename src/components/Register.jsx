import React from "react";
import { useState } from "react";
import { useFormState } from "react-dom";
import Swal from 'sweetalert2'

function Register() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [errores, setErrores] = useState([])

  //Función para validar formulario identificando errores
function validateRegister() {
  const errores = [];

  if(!userEmail){ errores.push({ campo: 'userEmail', mensaje: 'No has ingresado un email'})};
  if(!userPassword){ errores.push({ campo: 'userPassword', mensaje: 'Debes ingresar una contraseña'})};
  if(!confirmarPassword) { errores.push({ campo: 'confirmarPassword', mensaje: 'Necesitas confirmar tu contraseña' })};
  if(userPassword.length < 6 ){ errores.push( {campo: 'userPassword', mensaje: 'La contraseña no puede ser menor a 6 caracteres'})};
  if(userPassword !== confirmarPassword){ errores.push({ campo: 'confirmarPassword', mensaje: 'Las contraseñas ingresadas no coinciden'})};

  setErrores(errores);
  return errores.length === 0; //Devuelve true si no hay errores y false si hay errores
}


function handleSubmit(e) {
  e.preventDefault()

  const formValido = validateRegister()

  if (formValido){
    Swal.fire({
      title: "Te has registrado con éxito",
      icon: "success",
      draggable: true
    });

  } 
}

//Función para mostrar mensajes de error
function getErrorMessage(field) {
  const error = errores.find((err) => err.campo === field);
  return error ? error.mensaje : null
};

console.log("errores: ", errores);


  return (
    <section className="register-container container-fluid">
      <div className="register">
        <h2 className="text-center">Registrar</h2>

        <form onSubmit={handleSubmit}>
          <h4>Email</h4>          
          <div className="mb-3">
            <input
              type="email"
              value={userEmail}
              className= {`form-control ${getErrorMessage('userEmail') ? 'is-invalid': ''}`}
              placeholder="example@example"
              onChange={(e) => setUserEmail(e.target.value)}
              />
              { getErrorMessage('userEmail') && (
                <div className="invalid-feedback">{ getErrorMessage('userEmail') }</div>)}
          </div>

          <h4>Contraseña</h4>
          <div className="mb-3">
            <input
              type="password"
              value={userPassword}
              className= {`form-control ${getErrorMessage('userPassword') ? 'is-invalid': ''}`}
              placeholder="Introduce tu contraseña"
              onChange={(e) => setUserPassword(e.target.value)}
              />
              { getErrorMessage('userPassword') && (
                <div className="invalid-feedback">{getErrorMessage('userPassword') }</div>)}
          </div>

          <h4>Confirmar contraseña</h4>
          <div className="mb-3">
            <input
              type="password"
              value={confirmarPassword}
              className= {`form-control ${getErrorMessage('confirmarPassword') ? 'is-invalid': ''}`}
              placeholder="Introduce nuevamente tu contraseña"
              onChange={(e) => setConfirmarPassword(e.target.value)}
              />
              { getErrorMessage('confirmarPassword') && (
                <div className="invalid-feedback">{getErrorMessage('confirmarPassword') }</div>)}
          </div>

          <button type="submit" className = 'btn btn-primary w-100'>
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
