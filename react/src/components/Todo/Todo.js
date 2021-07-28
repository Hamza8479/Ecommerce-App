import React from "react";
import "./Todo.css";
import todoImg from "../../images/icons8-todo-list-100.png";
import AddIcon from "@material-ui/icons/Add";
import SvgIcon from "@material-ui/icons/Add";

const Todo = (props) => {
  return (
    <>
      <div className="container">
        <div className="main">
          <figure>
            <img src={todoImg} alt="todo logo" />
            <figcaption className="fig">Add Your List Here </figcaption>
          </figure>
          <div className="add-item">
            <input type="text" placeholder="Add Items..." id="" />
            <div className="plus">
              <SvgIcon>
                <AddIcon />
              </SvgIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
