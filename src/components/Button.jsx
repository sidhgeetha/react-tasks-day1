import React from "react";

const Button = ({ text, classcode }) => {
  return (
    <div class="d-grid">
      <a href="#" class={classcode}>
        {text}
      </a>
    </div>
  );
};

export default Button;
