import uniqueId from 'lodash/uniqueId';
import AccountType from './AccountType';
import store from '@/store';

export default class RunescapeAccount {
  public id: string = uniqueId();
  public username: string = '';
  public type: AccountType = store.state.accountTypes[0];

  constructor(
    username: string = '',
    type: AccountType = store.state.accountTypes[0]
  ) {
    this.username = username;
    this.type = type;
  }
}
