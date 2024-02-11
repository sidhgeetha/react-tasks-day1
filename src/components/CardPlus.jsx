import React from "react";
import "./style/CardNew.css";
import ListItem from "./ListItem";
import Button from "./Button";

const renderCard = (item, index) => {
  return (
    <div className="col" key={index}>
      <div className="card">
        <p>{item.title}</p>
        <h4 className="card-header">{item.price}</h4>
        <div className="card-body">
          <ul className="fa-ul">
            <ListItem name={item.user} isenabled={true} />

            <ListItem name={item.storage} isenabled={true} />

            <ListItem name={item.project1} isenabled={true} />

            <ListItem name={item.access} isenabled={true} />

            <ListItem
              name={item.project2}
              isenabled={index === 1 || index === 2 ? true : false}
            />

            <ListItem
              name={item.phone}
              isenabled={index === 1 || index === 2 ? true : false}
            />

            <ListItem
              name={item.subdomain}
              isenabled={index === 1 || index === 2 ? true : false}
            />

            <ListItem
              name={item.reports}
              isenabled={index === 2 ? true : false}
            />
          </ul>
          <Button
            text={"BUY"}
            classcode={
              index === 2 ? "btn btn-primary" : "btn btn-primary disabled"
            }
          />
        </div>
      </div>
    </div>
  );
};

const CardPlus = ({ data }) => {
  return data.map((item, index) => renderCard(item, index));
};

export default CardPlus;
