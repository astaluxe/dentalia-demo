// DENTALIA DEMO


// ==============================
// SELECCIÓN DE TRATAMIENTO
// ==============================

const treatmentButtons =
  document.querySelectorAll(".choose-treatment");

const treatmentSelect =
  document.getElementById("treatmentSelect");


treatmentButtons.forEach(button => {

  button.addEventListener("click", () => {

    treatmentSelect.value =
      button.dataset.treatment;

    document
      .getElementById("cita")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


// ==============================
// FAQ
// ==============================

const questions =
  document.querySelectorAll(".faq-question");


questions.forEach(question => {

  question.addEventListener("click", () => {

    const item =
      question.parentElement;

    item.classList.toggle("open");

  });

});


// ==============================
// FORMULARIO DEMO
// ==============================

const form =
  document.getElementById("appointmentForm");

const modal =
  document.getElementById("successModal");

const closeModal =
  document.getElementById("closeModal");

const finishButton =
  document.getElementById("finishButton");


form.addEventListener("submit", event => {

  event.preventDefault();

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

});


// ==============================
// CERRAR MODAL
// ==============================

function cerrarModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


closeModal.addEventListener(
  "click",
  cerrarModal
);

finishButton.addEventListener(
  "click",
  () => {

    cerrarModal();

    form.reset();

  }
);


modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {
      cerrarModal();
    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      cerrarModal();
    }

  }
);
