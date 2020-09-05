import uniqueId from 'lodash/uniqueId';

export default class Message {
  public id: string = uniqueId();
  public sent_at = new Date();
  public message: string;
  public read: boolean = false;
  public author_id: string;

  constructor(message: string, authorId: string) {
    this.message = message;
    this.author_id = authorId;
  }
}
