import uniqueId from 'lodash/uniqueId';

export default class AccountType {
  id: String = uniqueId();
  name: String;
  icon: String;

  constructor(name: String, icon: String) {
    this.name = name;
    this.icon = icon
  }
}
