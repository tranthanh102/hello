import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "thanh",
    },
    {
      id: 2,
      title: "nam",
    },
    {
      id: 3,
      title: "tiem",
    },
  ];
  return <div>
    <h3>TodoList</h3>
    <TodoList todoList={todoList}/>
  </div>;
}

export default TodoFeature;
