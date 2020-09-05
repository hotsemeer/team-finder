import RunescapeAccount from './RunescapeAccount';
import Message from './Message';

export default class UserMessage {
  public user: RunescapeAccount;
  public messages: Message[];

  get unread(): number {
    return this.messages.reduce((p, c) => p + (c.read ? 1 : 0), 0);
  }

  constructor(user: RunescapeAccount, messages: Message[] = []) {
    this.user = user;
    this.messages = messages;
  }
}
