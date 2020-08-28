import uniqueId from 'lodash/uniqueId';
import RunescapeAccount from './RunescapeAccount';

export default class User {
  id: string = uniqueId();
  accounts: Array<RunescapeAccount> = [];

  constructor() {}
}
