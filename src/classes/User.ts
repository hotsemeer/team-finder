import uniqueId from 'lodash/uniqueId';
import RunescapeAccount from './RunescapeAccount';
import UserMessage from './UserMessage';

export default class User {
  id: string = uniqueId();
  accounts: Array<RunescapeAccount> = [];
  userMessages: Array<UserMessage> = []

  constructor() {}
}
