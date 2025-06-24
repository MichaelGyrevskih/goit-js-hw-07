const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");


console.log("Task-1"); 
console.log(`Number of categories: ${items.length}`);
console.log("      ");
for (let i = 0; i < items.length; i++) {
  console.log(`Category: ${items[i].firstElementChild.textContent}`);
  console.log(`Elements: ${items[i].querySelector("ul").children.length}`);
}