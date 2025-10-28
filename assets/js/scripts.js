document.addEventListener("DOMContentLoaded", function () {
  // Máscaras
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  if (cpf) {
    cpf.addEventListener("input", () => {
      cpf.value = cpf.value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    });
  }

  if (telefone) {
    telefone.addEventListener("input", () => {
      telefone.value = telefone.value.replace(/\D/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    });
  }

  if (cep) {
    cep.addEventListener("input", () => {
      cep.value = cep.value.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2");
    });
  }

  // Validação
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input[required]");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = "red";
          valid = false;
        } else {
          input.style.borderColor = "green";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      }
    });
  }

  // Menu hambúrguer
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
});
