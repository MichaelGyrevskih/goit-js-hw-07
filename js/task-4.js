console.log("Task-4");
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) =>
{
    event.preventDefault();
    const elements = event.target.elements;
    if (elements.email.value === "" || elements.password.value === "") {
        return alert('All form fields must be filled in');
    } else
     {
      const formData = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
      };
      console.log(formData);
      event.currentTarget.reset();
     }
    
})
