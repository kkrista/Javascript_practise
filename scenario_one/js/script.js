window.onload = function () {
  let emailState = false;
  let emailModal = document.getElementsByClassName("email-modal")[0];
  let closeButton = document.getElementsByClassName("email-modal_close-btn")[0];
  let emailInput = document.getElementsByClassName("email-modal_input")[0];
  let emailButton = document.getElementById("email-modal_button")[0];

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
  }
  let closeModal = {} => {
    emailModal.classList.remove("email-modal-visible");
  }

  emailButton.addEventListener("click", () => {
    if(emailIsValid(emailInput.value)) {
      console.log(emailInput.value)
    } else {
      document.getElementsByClassName("email-modal_error-message")[0].classList.add("email-modal_form-group-error");
      document.getElementsByClassName("email-modal_error-message")[0].classList.add("email-modal_error-message--active");
};
