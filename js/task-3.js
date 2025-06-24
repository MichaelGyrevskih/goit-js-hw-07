console.log("Task-3"); 
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) =>
{
    const value = event.target.value.trim();
    if (event.target.value === "" || event.target.value === null|| value === "") {
        output.textContent = "Anonymous";
    } else { output.textContent = event.target.value.trim();}
});