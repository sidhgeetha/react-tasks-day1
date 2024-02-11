const dataObj = [
  {
    title: "FREE",
    price: "$0 / Month",
    user: "single user",
    storage: "5GB Storage",
  },
  {
    title: "FREE",
    price: "$1 / Month",
    user: "single user",
    storage: "5GB Storage",
  },
];

dataObj.map((item, index) => {
  console.log(item.title);
  console.log(index);
});
