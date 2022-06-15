export class Model {
  user;
  items;

  constructor() {
    this.user = 'Mustafa';
    this.items = [
      new ToDoItem('Spor', false),
      new ToDoItem('Kahvaltı', false),
      new ToDoItem('Kitap Okumak', false),
      new ToDoItem('Sinema', false),
    ];
  }
}

export class ToDoItem {
  description: String;
  action: boolean;

  constructor(description: String, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
