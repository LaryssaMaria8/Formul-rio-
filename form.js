// Adiciona um listener de eventos para quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function() {

    // Adiciona um listener de eventos para quando o formulário for enviado
    document.querySelector('form').addEventListener('submit', function(e) {
  
      // Previne o envio do formulário caso não seja válido
      if (!validateForm()) {
        e.preventDefault();
      }
    });
  
    // Adiciona um listener de eventos para quando o valor da barra de range for alterado
    document.querySelector('input[type=range]').addEventListener('input', function() {
      updateRangeValue(this.value);
    });
  });
  
  // Função para atualizar o valor exibido na barra de range
  function updateRangeValue(value) {
    document.getElementById('range-value').innerHTML = 'R$ ' + value + ',00';
  }
  
  // Função para validar o formulário
  function validateForm() {
  
    // Verifica se o email é válido
    let email = document.getElementById('email');
    if (!validateEmail(email.value)) {
      email.setCustomValidity('Email inválido');
    } else {
      email.setCustomValidity('');
    }
  
    // Retorna true se o formulário é válido
    return document.querySelector('form').checkValidity();
  }
  
  // Função para validar o email
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }