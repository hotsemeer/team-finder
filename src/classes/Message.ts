import uniqueId from 'lodash/uniqueId';

export default class Message {
  id: string = uniqueId();
  sent_at = new Date();
  message: string;
  read: boolean = false;
  author_id: string;

  constructor(message: string, authorId: string) {
    this.message = message;
    this.author_id = authorId
  }
}
