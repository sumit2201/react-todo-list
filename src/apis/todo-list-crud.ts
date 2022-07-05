// Promises can be replaced with real http calls

import { TodoItemType } from "../types";

const getTodoListFromLocalStorage = () => {
  const todoListStr = localStorage.getItem("todos");
  return todoListStr ? (JSON.parse(todoListStr) as TodoItemType[]) : [];
};

const setTodoListInLocalStorage = (todos: TodoItemType[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const clearAllTodos = () => {
  localStorage.removeItem("todos");
};

export const getAllTodos = (filterText?: string) => {
  return new Promise<TodoItemType[]>((resolve, reject) => {
    try {
      let todos: Array<TodoItemType> = getTodoListFromLocalStorage();
      if (todos.length && filterText) {
        todos = todos.filter((item: TodoItemType) => {
          return item.text.search(filterText) !== -1;
        });
      }
      resolve(todos);
    } catch (exp) {
      reject(exp);
    }
  });
};

export const addTodo = (todoText: string) => {
  return new Promise((resolve, reject) => {
    try {
      const todos: Array<TodoItemType> = getTodoListFromLocalStorage();
      const newTodo = {
        id: todos.length + 1,
        text: todoText,
        done: false,
      };
      todos.push(newTodo);
      setTodoListInLocalStorage(todos);
      resolve(todos);
    } catch (exp) {
      reject(exp);
    }
  });
};

export const deleteTodo = (id: number) => {
  return new Promise((resolve, reject) => {
    try {
      let todos: Array<TodoItemType> = getTodoListFromLocalStorage();
      todos = todos.filter((item: TodoItemType) => {
        return item.id !== id;
      });
      setTodoListInLocalStorage(todos);
      resolve(true);
    } catch (exp) {
      reject(exp);
    }
  });
};

export const updateTodo = (id: number, done: boolean) => {
  return new Promise((resolve, reject) => {
    try {
      let todos: Array<TodoItemType> =
        getTodoListFromLocalStorage() as TodoItemType[];
      todos = todos.map((item: TodoItemType) => {
        if (item.id === id) {
          item.done = done;
        }
        return item;
      });
      setTodoListInLocalStorage(todos);
      resolve(true);
    } catch (exp) {
      reject(exp);
    }
  });
};
