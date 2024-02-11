import React from "react";
import CardPlus from "./components/CardPlus";
import CardNew from "./components/CardNew";

const App = () => {
  const dataObj = [
    {
      title: "FREE",
      price: "$0 / Month",
      user: "single user",
      storage: "50GB Storage",
      storagetext: "text-decoration-underline",
      project1: "Unlimited Public Projects",
      access: "Community Access",
      project2: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports",
      buttonDisabled: true,
      disableText: "disabled-text",
    },
    {
      title: "PLUS",
      price: "$12 / Month",
      user: "5 users",
      storage: "50GB Storage",
      project1: "Unlimited Public Projects",
      access: "Community Access",
      project2: "Unlimited Private Projects",
      phone: " Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports",
      resportsIcon: "disabled-icon",
      buttonDisabled: true,
      disableText: "disabled-text",
    },
    {
      title: "PRO",
      price: "$49 / Month",
      user: "Unlimited users",
      storage: "50GB Storage",
      project1: "Unlimited Public Projects",
      access: "Community Access",
      project2: "Unlimited private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports",
      disableText: "disabled-text",
    },
  ];

  return (
    <div className="row">
      <CardNew data={dataObj} />
    </div>
  );
};

export default App;
