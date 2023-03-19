function validateForm() {
  
    let a = document.forms["form"]["nombre"].value;
    let b = document.forms["form"]["apellido"].value;
    let c = document.forms["form"]["dni"].value;
    let d = document.forms["form"]["fecha"].value;
    let e = document.forms["form"]["correo"].value;

    if (a === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar su nombre',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return false;
    } 
    if (b === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar su apellido',
        icon: 'warning',
        confirmButtonText: 'OK'
      });;
      return false;
    } 
    if (c === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar su DNI',
        icon: 'warning',
        confirmButtonText: 'OK'
      });;
      return false;
    } 
    if (d === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar su fecha de nacimiento',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return false;
    } 
    if (e === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar su correo electronico',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return false;
    } 


      else {
        let x = document.forms["form"]["cv"].value; 
        if (x === "") {
          Swal.fire({
            title: 'Error!',
            text: 'No olvide completar su CV',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
          return false;
        }
      }

  } 


