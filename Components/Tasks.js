import React from "react";

const Tasks = (props) => {
  return (
    <div className="p-8 bg-slate-200 text-black flex flex-col gap-5 font-[gilroy]">
      {props.renderTask}
    </div>
  );
};

export default Tasks;
