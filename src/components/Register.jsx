import React from "react";
import { useState } from "react";
import { useFormState } from "react-dom";

function Register() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [errores, setErrores] = useState([])

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
    alert('Te has registrado con éxito')
  } 
}

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
              placeholder="example@example"
              onChange={(e) => setUserEmail(e.target.value)}
              />
          </div>

          <h4>Contraseña</h4>
          <div className="mb-3">
            <input
              type="password"
              value={userPassword}
              placeholder="Introduce tu contraseña"
              onChange={(e) => setUserPassword(e.target.value)}
              />
          </div>

          <h4>Confirmar contraseña</h4>
          <div className="mb-3">
            <input
              type="password"
              value={confirmarPassword}
              placeholder="Introduce nuevamente tu contraseña"
              onChange={(e) => setConfirmarPassword(e.target.value)}
              />
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
