import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{props.data.title}</h2>
        <h1>APOD project</h1>
      </div>

      {!props.showSidebar && (
        <button
          onClick={() => {
            props.handleToggleModal();
          }}
        >
          <i className="fa-solid fa-circle-info"></i>
        </button>
      )}
    </footer>
  );
}
