"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CheckCircle, Pencil, Trash2, X, XCircle } from "lucide-react";
import { todoType } from "@/types/todoType";
import { cn } from "@/lib/utils";

type TodoProps = {
  todo: todoType;
  UpdateIsDone: (id: number) => void;
  updateText: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
};

const Todo = ({ todo, UpdateIsDone, updateText, deleteTodo }: TodoProps) => {
  const [todoString, setTodoString] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoString(e.target.value);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTodoString(todo.text);
    setIsEditing(false);
  };

  return (
    <div className=" flex flex-col items-center justify-between gap-2 border p-2  rounded-lg my-1 mx-auto h-fit w-96">
      <div className="w-full h-10 flex gap-2 items-center">
        <Checkbox
          className="size-6"
          checked={todo.isDone}
          onClick={() => UpdateIsDone(todo.id)}
        />
        <Input
          disabled={!isEditing}
          className={`w-full h-full disabled:opacity-100 ${
            todo.isDone && !isEditing ? "line-through" : ""
          }`}
          value={todoString}
          onChange={handleTodoChange}
        />
      </div>
      <div className="w-full h-fit flex justify-end gap-2">
        {isEditing ? (
          <Button variant="secondary" onClick={handleCancel}>
            Cancel <XCircle className="h-4 px-1" />
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            Edit <Pencil className="h-4 px-1" />
          </Button>
        )}
        {isEditing ? (
          <Button
            onClick={() => {
              updateText(todo.id, todoString);
              setIsEditing(false);
            }}
          >
            Save <CheckCircle className="h-4 px-1" />
          </Button>
        ) : null}
        <Button variant="destructive" onClick={() => deleteTodo(todo.id)}>
          Delete <Trash2 className="h-4 px-1" />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
