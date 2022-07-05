import React, { useEffect, useState } from "react";
import {
  addTodo,
  clearAllTodos,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "./apis/todo-list-crud";
import "./App.css";
import InputForm from "./components/input-form";
import TodoList from "./components/todo-list";
import { TodoItemType } from "./types";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const fetchUpdatedTodoList = (filterText?: string) => {
    getAllTodos(filterText).then((allTodos: TodoItemType[]) => {
      setTodos(allTodos);
    });
  };

  useEffect(() => {
    clearAllTodos();
    fetchUpdatedTodoList();
  }, []);

  const onFilterTodo = (value: string) => {
    fetchUpdatedTodoList(value);
  };

  const onAddTodo = (value: string) => {
    addTodo(value).then(() => fetchUpdatedTodoList());
  };

  const onMarkAsDone = (id: number, done: boolean) => {
    updateTodo(id, done).then(() => fetchUpdatedTodoList());
  };

  const onDelete = (id: number) => {
    deleteTodo(id).then(() => fetchUpdatedTodoList());
  };

  return (
    <div className="App">
      <InputForm handleChange={onFilterTodo} handleSubmit={onAddTodo} />
      <TodoList todos={todos} onMarkAsDone={onMarkAsDone} onDelete={onDelete} />
    </div>
  );
}

export default App;
