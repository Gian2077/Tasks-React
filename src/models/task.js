export class Task {
  constructor(title, type) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.type = type;
    this.completed = false;
    this.dateCreated = new Date().toISOString();
    this.dateCompleted = null;
  }
}
