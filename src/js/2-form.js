const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const { email, message } = form.elements;

populateFormFields();

form.addEventListener("input", (evt) => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (email.value.trim() === "" || message.value.trim() === "") {
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
    email.value = dataFromLsParse.email;
    message.value = dataFromLsParse.message;
  }

}










