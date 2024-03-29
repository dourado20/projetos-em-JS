
function adicionarNumero(numero) {
    const campoNumerico = document.getElementById("campoNumerico");
    if (campoNumerico.value.length < 15) {
        campoNumerico.value += numero;
        handlePhone();
      }
  }

  function handlePhone() {
    let input = document.getElementById('campoNumerico');
    let value = input.value;
    input.value = phoneMask(value);
  }

  function phoneMask(value) {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value;
  }