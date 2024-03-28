"use client";
import { todoType } from "@/types/todoType";
import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import {
  addTodo,
  DeleteTodo,
  updateIsCompleted,
  UpdateTodoText,
} from "@/actions/todoActions";

const Todos = ({ todos }: { todos: todoType[] }) => {
  const [todosItems, setTodoItems] = useState(todos);

  const createTodo = (text: string) => {
    const id = Number(todosItems.at(-1)?.id || 0) + 1;
    addTodo(id, text);
    setTodoItems((prev) => [...prev, { id: id, text: text, isDone: false }]);
  };

  const UpdateIsDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    updateIsCompleted(id, !todosItems.find((todo) => todo.id === id)?.isDone!);
  };

  const updateText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
    UpdateTodoText(id, text);
  };

  const deleteTodo = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    DeleteTodo(id);
  };

  return (
    <div className="flex flex-col gap-2 ">
      <AddTodo createTodo={createTodo} />

      <h2 className="text-2xl font-bold pt-6 mx-auto w-96">Todos</h2>
      {todosItems.map((todo) => (
        <Todo
          key={todo.id}
          UpdateIsDone={UpdateIsDone}
          updateText={updateText}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
