export interface Item {
  id: string;
  item: string;
  checked: boolean;
}
//underscore is passed to the constructor to avoid the error as the constructor is not a property of the class, but a parameter. as private _id: string = "" is a property of the class

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {} //empty because we are using the constructor to set the values, we do not have to have any assignments in the constructor
  //although if you do it's not illegal syntax, it double it up when complie to js, so you have two assignments
  get id(): string {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }
  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }
}
