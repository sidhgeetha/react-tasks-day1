import React from "react";
import "./style/CardNew.css";
import ListItem from "./ListItem";

const renderCard = (item, index) => {
  return (
    <div className="col" key={index}>
      <div className="card">
        <p>{item.title}</p>
        <h4 className="card-header">{item.price}</h4>
        <div className="card-body">
          <ul className="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fas fa-check" aria-hidden="true"></i>
              </span>
              {item.user}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check" aria-hidden="true"></i>
              </span>
              {item.storage}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check" aria-hidden="true"></i>
              </span>

              {item.project1}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check" aria-hidden="true"></i>
              </span>
              <span>{item.access}</span>
            </li>
            <li>
              <span class="fa-li ">
                <i
                  class={
                    index === 1 || index === 2
                      ? "fa fa-check"
                      : "fa fa-times disabled-icon"
                  }
                  aria-hidden="true"
                ></i>
              </span>
              <span class={index === 1 || index === 2 ? "" : item.disableText}>
                {item.project2}
              </span>
            </li>
            <li>
              <span class="fa-li">
                <i
                  class={
                    index === 1 || index === 2
                      ? "fa fa-check"
                      : "fa fa-times disabled-icon"
                  }
                  aria-hidden="true"
                ></i>
              </span>
              <span class={index === 1 || index === 2 ? "" : item.disableText}>
                {item.phone}
              </span>
            </li>
            <li>
              <span class="fa-li">
                <i
                  class={
                    index === 1 || index === 2
                      ? "fa fa-check"
                      : "fa fa-times disabled-icon"
                  }
                  aria-hidden="true"
                ></i>
              </span>
              <span class={index === 1 || index === 2 ? "" : item.disableText}>
                {item.subdomain}
              </span>
            </li>
            <li>
              <span class="fa-li">
                <i
                  class={
                    index === 2 ? "fa fa-check" : "fa fa-times disabled-icon"
                  }
                  aria-hidden="true"
                ></i>
              </span>
              <span class={index === 2 ? "" : item.disableText}>
                {item.reports}
              </span>
            </li>
          </ul>
          <div class="d-grid">
            <a
              href="#"
              // class="btn btn-primary"
              // disabled={index === 0 || index === 1}
              className={
                index === 2 ? "btn btn-primary" : "btn btn-primary disabled"
              }
            >
              BUTTON
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardNew = ({ data }) => {
  return data.map((item, index) => renderCard(item, index));
};

export default CardNew;
