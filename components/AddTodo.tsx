import React, { FC, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

type props = {
  createTodo: (text: string) => void;
};

const AddTodo: FC<props> = ({ createTodo }) => {
  const [todoState, setTodoState] = useState("");

  const handleAdd = async () => {
    createTodo(todoState);
    setTodoState("");
  };
  return (
    <div className="mx-auto flex flex-col gap4 w-96">
      <h2 className="text-2xl font-bold">Add Todo</h2>
      <p className="text-sm text-muted-foreground text-wrap">
        You can add a new todo by typing in the input field and clicking the ☑️
        button.
      </p>
      <div className="w-full flex gap-2 py-4">
        <Input
          type="text"
          value={todoState}
          onChange={(e) => setTodoState(e.target.value)}
        />
        <Button size="icon" onClick={handleAdd}>
          <Check className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
