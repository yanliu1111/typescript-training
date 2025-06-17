import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement; // HTMLUListElement is a type that represents an unordered list element in the DOM
  clear(): void; // clear the list on the DOM, we don't want to have duplicates
  render(fullList: FullList): void; // render the list on the DOM, we want to create the list items and append them to the ul element, fullList is the instance of the FullList class 
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate(); //why static? because I want to create a single instance of the class, so that the class can be used as a singleton, and keep referring to that instance, because we only have one list in our application
  // what is singleton?
  // a singleton is a class that can only be instantiated once, so we can only have one instance of the class, and we can only have one list in our application, so we want to make sure that we only have one instance of the class, so we can only have one list in our application
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  } // clear the list on the DOM

  render(fullList: FullList): void {
    this.clear(); //clear the list on the DOM, we don't want to have duplicates
    fullList.list.forEach((item) => {
      //start to create the list items
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id;
      check.tabIndex = 0; // why didnt refer to the underscore? because it is a getter, so it is a property, not a method
      check.checked = item.checked; // boolean
      li.append(check);

      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label); //why need append? because we are appending to the li, not the ul. what is ul? it is the ul element on the DOM

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });
      this.ul.append(li);
    }); //strange, but they do have .list data inside
  }
}
