import uniqueId from 'lodash/uniqueId';
import RunescapeAccount from './RunescapeAccount';
import UserMessage from './UserMessage';

export default class User {
  public id: string = uniqueId();
  public accounts: RunescapeAccount[] = [];
  public userMessages: UserMessage[] = [];

  constructor() {}
}
