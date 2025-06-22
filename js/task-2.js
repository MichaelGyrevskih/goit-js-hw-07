class Storage{
    #items;
    constructor(items){
        this.#items = items;
    }
    getItems(){
        return this.#items;
    }
    addItem(newItem){
        if (!newItem) {
        console.warn("Тут нічого немає!");
        return;
    }
        this.#items.push(newItem);
    }
    removeItem(item){
        if(this.#items.includes(item))
        {
            this.#items.splice(this.#items.indexOf(item), 1);
        }
    }
}
console.log("      ");
console.log("Task-2"); 
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]