interface TodoType {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

interface TodoList {
  todos: TodoType[];

  createTodo: (todo: TodoType) => void;
  findById: (id: number) => TodoType;
  updateTodo: (todo: TodoType) => void;
  updateTodoTag: (id: number, tagIndex: number, tag: string) => void;
  deleteTodo: (id: number) => void;
  resetTodo: () => void;
  deleteTag: (todoIndex: number, tagIndex: number) => void;
  deleteAllTag: (todoIndex: number) => void;
}

// 구현 코드  //
let todos: TodoType[] = [];

const createTodo = (todo: TodoType) => {
  todos.push(todo);
};

const findById = (id: number) => {
  return todos.filter((el) => el.id === id);
};

const updateTodo = (todo: TodoType) => {
  const newArr = todos.filter((el) => el.id !== todo.id);
  newArr.push(todo);
  todos = newArr;
};

const updateTodoTag = (id: number, tagIndex: number, tag: string) => {
  const todoArr = todos.filter((el) => el.id === id);
  if (!todoArr) return;
  const tags = todoArr[0].tags;
  if (!tags) return;
  tags[tagIndex] = tag;

  todoArr.filter((el) => el.tags);
};

const deleteTodo = (id: number) => {
  const newArr = todos.filter((el) => el.id !== id);
  todos = newArr;
};

const resetTodo = () => {
  todos = [];
};

const deleteTag = (todoIndex: number, tagIndex: number) => {
  const todo = todos[todoIndex];
  if (!todo.tags) return;
  const tag = todo.tags[tagIndex];
  const newTag = todo.tags.filter((el) => el !== tag);
  todo.tags = newTag;
};
const deleteAllTag = (todoIndex: number) => {
  const todo = todos[todoIndex];
  if (!todo.tags) return;
  todo.tags = [];
};
