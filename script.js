document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  const submitButton = document.querySelector("#submit");
  const messageSent = document.querySelector(".message-sent");

function resetForm() {
    const inputElements = document.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='radio'], input[type='checkbox'], textarea"
      );
      inputElements.forEach((input) => {
        input.value = "";
      });
}






  submitButton.addEventListener("click", (event) => {
    let formValid = true;
    const inputElements = document.querySelectorAll(
      "input[type='text'], input[type='email'], input[type='radio'], input[type='checkbox'], textarea"
    );
    inputElements.forEach((input) => {
      if (!input.validity.valid) {
        formValid = false;
        const span = input.nextElementSibling;
        if (span && span.tagName === "SPAN") {
          span.style.visibility = "visible";
          input.style.border = "1px solid var(--Red)";
        }
      } else {
        const span = input.nextElementSibling;
        if (span && span.tagName === "SPAN") {
          span.style.visibility = "hidden";
          input.style.border = "1px solid var(--Green-600-medium)";
          // Reset border if valid
        }
      }
    });
    if (formValid) {
      messageSent.style.display = "block";
      resetForm();
    } else {
      messageSent.style.display = "none";
    }
  });
});
