"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import Tasks from "@/Components/Tasks";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && desc) {
      setMainTask([...mainTask, { title, desc }]);
    } else {
      return;
    }
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex justify-between gap-10 border rounded-md px-4 py-2 w-2/3">
            <h5 className="text-2xl font-semibold bg-blue-200 w-1/3 rounded-md p-2.5">
              <span className="text-2xl font-semibold">Title</span> -{" "}
              <br /> {t.title}
            </h5>
            <p className="text-lg font-medium bg-red-200 w-2/3 rounded-md p-2.5">
              <span className="text-2xl font-semibold">Description</span>{" "}
              - <br /> {t.desc}
            </p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 px-4 py-2 rounded-md text-white text-lg font-semibold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <Header
        title={title}
        desc={desc}
        submitHandler={submitHandler}
        setTitle={setTitle}
        setDesc={setDesc}
      />
      <Tasks renderTask={renderTask} />
    </>
  );
};

export default page;
