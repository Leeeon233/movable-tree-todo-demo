/// <reference path="./interfaces.d.ts"/>
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const TodoItem = ({
  todo,
  editing,
  onToggle,
  onDestroy,
  onSave,
  onCancel,
  onEdit,
}: ITodoItemProps) => {
  const [editText, setEditText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    onEdit();
    setEditText(todo.title);
  };

  const handleSubmit = () => {
    var val = editText.trim();
    if (val) {
      onSave(val);
      setEditText(val);
    } else {
      onDestroy();
    }
  };
  const handleChange = (e: React.FormEvent) => {
    var input: any = e.target;
    setEditText(input.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === ESCAPE_KEY) {
      setEditText(todo.title);
      onCancel(e);
    } else if (e.keyCode === ENTER_KEY) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (editing) {
      const inputNode = inputRef.current!;
      inputNode.focus();
      inputNode.setSelectionRange(
        inputNode.value.length,
        inputNode.value.length
      );
    }
  }, [editing]);

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={(_) => handleEdit()}>{todo.title}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref={inputRef}
        className="edit"
        value={editText}
        onBlur={() => handleSubmit()}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </li>
  );
};

export default TodoItem;
