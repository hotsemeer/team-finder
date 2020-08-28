import RunescapeAccount from './RunescapeAccount';
import Message from './Message';

export default class UserMessage {
  user: RunescapeAccount;
  messages: Array<Message>;

  get unread(): number {
    return this.messages.reduce((p, c) => p + (c.read ? 1 : 0), 0);
  }

  constructor(user: RunescapeAccount, messages: Array<Message> = []) {
    this.user = user;
    this.messages = messages;
  }
}
