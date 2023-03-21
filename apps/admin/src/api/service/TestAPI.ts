import { AdminAPI } from './AdminAPI';

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};

export class TestAPI extends AdminAPI {
  public getTodoItem() {
    return this.request<TodoItem>({
      url: '/todos/1',
      method: 'GET',
      secure: true,
    });
  }

  public saveTodoItem(data: TodoItem) {
    return this.request<TodoItem>({
      url: '/todos',
      method: 'POST',
      data,
    });
  }
}
