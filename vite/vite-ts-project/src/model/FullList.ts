import ListItem from "./ListItem";
interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  //static is a class property, the function of static is to create a single instance of the class, so that the class can be used as a
  //add private because I will create a singleton, that means there will only be one instance of the class, and keep referring to that instance, because we only have one list in our application
  // so to do that, I put private in front of the Constructor, so that it can only be called from within the class, and I will create a static method, that will return the instance of the class
  private constructor(private _list: ListItem[] = []) {}
  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem); //notice I am referring to the class, because we user static, we can refer
      //fullList because we used static up here, wehn we caareated this.
    });
  }
  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
