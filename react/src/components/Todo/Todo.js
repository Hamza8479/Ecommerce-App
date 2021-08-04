import React, { useState } from "react";
import "./Todo.css";
import todoImg from "../../images/icons8-todo-list-100.png";
import { Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// import { Button } from "bootstrap";

const { Item } = Menu;
const Todo = (props) => {
  const [inputState, setInputState] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!inputState) {
    } else {
      setItem([...item, inputState]);
      setInputState("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = item.filter((el, ind) => {
      return ind !== id;
    });
    setItem(updatedItems);
  };

  const removeAll = () => {
    setItem([]);
  };

  return (
    <>
      <div className="Container">
        <div className="main">
          <figure>
            <img src={todoImg} alt="todo logo" />
            <figcaption className="fig">Add Your List Here </figcaption>
          </figure>
          <div className="add-item">
            <input
              type="text"
              placeholder="Add Items..."
              id=""
              className="p-2"
              value={inputState}
              onChange={(e) => setInputState(e.target.value)}
              autoFocus
            />
            <i class="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {item.map((curr, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{curr}</h3>
                  <i
                    class="fa fa-trash-o"
                    aria-hidden="true"
                    title="Delete Item"
                    onClick={() => {
                      deleteItem(ind);
                    }}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="btnDiv">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              {" "}
              <span> Check List </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
