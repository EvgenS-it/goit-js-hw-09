const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

populateFormFields();

form.addEventListener("input", (evt) => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (form.elements.email.value === "" || form.elements.message.value === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

function populateFormFields() {
  const dataFromLs = localStorage.getItem(localStorageKey);

  if (dataFromLs) {
    const dataFromLsParse = JSON.parse(dataFromLs);
    form.elements.email.value = dataFromLsParse.email;
    form.elements.message.value = dataFromLsParse.message;
  }

}










