import "./css/style.css";
import FullList from "./model/FullList";
import ListTemplate from "./templates/ListTemplate";
import ListItem from "./model/ListItem";

const initApp = (): void => {
  const fullList = FullList.instance;
  const templates = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText) return; // checking the length property of the text value is not needed. An empty string evaluates as false, too.

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1; //if the list is empty, then the id is 1, otherwise, the id is the last item's id plus 1

    const newItem = new ListItem(itemId.toString(), newEntryText); //create a new list item
    //there was a checked value but its not required because we had default value inside of the constructor back in the list item.
    // so we dont have to pass in that checked value, we do need to pass in the id and the item text, because we prefer not to have those empty strings

    fullList.addItem(newItem); //add the new item to the list
    templates.render(fullList); //render the list on the DOM
  });

  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    fullList.clearList(); //clear the list in the model
    templates.clear(); //clear the display which is our template as well
  });

  //above two are event listeners, submit and the clear items button so they do not happen riht away, but what does happen right away is the loading the list, so we need to call fullList.load() and templates.render(fullList) right away
  fullList.load(); //if we don't pass the full list here, because an argument for full list was not provided, so after we defined those properly in our classes they guide us through the rest of our app
  templates.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
//we can defer inside of the script tag of JS, this essentially says we're not going to run our JS until the DOM is loaded, so we make sure the elements exist before we try to interact with them
