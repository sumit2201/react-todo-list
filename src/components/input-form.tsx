import React, { useState } from "react";
import { InputFormType } from "../types";
import styles from "../styles";
import Button from "./button";

const InputForm = ({ handleChange, handleSubmit }: InputFormType) => {
  const [value, setValue] = useState("");

  const isValidInput = () => {
    return value && value.trim() ? false : true;
  };

  const clearInput = () => {
    setValue("");
    handleChange("");
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(value);
    clearInput()
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleChange(newValue);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(value);
    clearInput()
  };

  const handleClearInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        clearInput()
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="todo-list-input-wrapper">
        <input className="todo-list-input" type="text" placeholder="Filter or add a todo" onChange={handleInputChange} value={value} />
        <Button className="clear" type="button" onClick={handleClearInput}>
          Clear
        </Button>
        <Button className="add" type="submit" disabled={isValidInput()} onClick={handleAddTodo}>
          Add
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
