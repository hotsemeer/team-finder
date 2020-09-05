import uniqueId from 'lodash/uniqueId';

export default class AccountType {
  public id: String = uniqueId();
  public name: String;
  public icon: String;

  constructor(name: String, icon: String) {
    this.name = name;
    this.icon = icon;
  }
}
