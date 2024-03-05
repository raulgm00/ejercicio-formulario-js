const registerBtn = document.querySelector(".register-btn");

let objeUsuario = {
  email : "",
  password: "",
  legalEge: false,
  tycAccepted: false
}

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  let email = document.getElementById("email-input").value;
  // 2. Obtenemos los datos ingresados en el input de password
  let password = document.getElementById("password-input").value;
  // 3. Obtenemos el valor del input radio
  let radioMayorEdad = document.getElementsByName("legalAge");
  let mayorEdad = false;
  radioMayorEdad.forEach(function(elemento) {
    console.log(`Radio Elementos: ${elemento.value}`);
    console.log(`Radio Seleccionados: ${elemento.checked}`);
    if(elemento.value === "true" && elemento.checked === true){
        mayorEdad = true;
       
    }
  });
  

  // 4. Obtenemos el valor del input checkbox
  let checkBoxTerminos = document.getElementById("tyc-input");
      console.log(`Checked Elementos: ${checkBoxTerminos.value}`);
      console.log(`Checked  Seleccionados: ${checkBoxTerminos.checked}`);
  let tycAccepted = false;
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  console.log(`Es mayor de edad ${mayorEdad}`)
  if(!mayorEdad){
    alert("El usuario debe ser mayor de edad");
  }
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  if(!checkBoxTerminos.checked){
    alert("Debes aceptar los terminos y condiciones");
  }else{
    tycAccepted = true;
  } 
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  if(mayorEdad && checkBoxTerminos.checked){
    objeUsuario.email = email;
    objeUsuario.password = password;
    objeUsuario.legalEge = mayorEdad,
    objeUsuario.tycAccepted = tycAccepted

    console.table(objeUsuario);
  }
});
