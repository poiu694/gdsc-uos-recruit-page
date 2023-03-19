import { AdminAPI } from './ServiceAPI';

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};

export class TestAPI extends AdminAPI {
  public getTodoItem() {
    return this.request<TodoItem>({
      url: '/todos2',
      method: 'GET',
      secure: true,
    });
  }

  public saveTodoItem(data: TodoItem) {
    return this.request<TodoItem>({
      url: '/todos2',
      method: 'POST',
      data,
    });
  }
}
