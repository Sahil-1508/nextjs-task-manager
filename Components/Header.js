import React, { useState } from "react";

const Header = (props) => {
  return (
    <>
      <h1 className="bg-[#222] text-white p-5 text-2xl font-extralight font-[monument]">
        <i className="ri-todo-line mr-2"></i>Todo List
      </h1>
      <form
        onSubmit={props.submitHandler}
        className="px-10 py-4 flex justify-end gap-3 font-[gilroy] border-b-[0.2px] border-gray-300"
      >
        <input
          placeholder="Enter task title here"
          className="text-[16px] border-2 border-zinc-500 rounded-md px-2.5 py-1.5 outline-0"
          value={props.title}
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        />
        <input
          placeholder="Enter description here"
          className="text-[16px] border-2 border-zinc-500 rounded-md px-2.5 py-1.5 outline-0"
          value={props.desc}
          onChange={(e) => {
            props.setDesc(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-gray-500 rounded-md text-white font-medium">
          Add Task
        </button>
      </form>
    </>
  );
};

export default Header;
