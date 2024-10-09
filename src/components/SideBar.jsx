import React from "react";

export default function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h1>{props.data.title}</h1>
        <div>
          <p className="description">{props.data.date}</p>
          <p>{props.data.explanation}</p>
        </div>
        <button onClick={() => props.handleToggleModal()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
