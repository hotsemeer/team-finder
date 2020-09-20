import uniqueId from 'lodash/uniqueId';

export default class AccountType {
  public id: string = uniqueId();
  public name: string;
  public icon: string;

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }
}
