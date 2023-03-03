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
  private constructor(private _list: ListItem[] = []) {}

  list: ListItem[] = [];
  load() {
    const data = localStorage.getItem("list");
    if (data) {
      this.list = JSON.parse(data);
    }
  }
  save() {
    localStorage.setItem("list", JSON.stringify(this.list));
  }
  clearList() {
    this.list = [];
    this.save();
  }
  addItem(itemObj: ListItem) {
    this.list.push(itemObj);
    this.save();
  }
  removeItem(id: string) {
    this.list = this.list.filter((item) => item.id !== id);
    this.save();
  }
}
