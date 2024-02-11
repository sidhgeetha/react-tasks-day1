import React from "react";

const ListItem = ({ name, isenabled }) => {
  return (
    <li>
      <span class="fa-li">
        <i
          class={isenabled ? "fa fa-check" : "fa fa-times disabled-icon"}
          aria-hidden="true"
        ></i>
      </span>
      <span class={isenabled ? "" : "disabled-text"}>{name}</span>
    </li>
  );
};

export default ListItem;
