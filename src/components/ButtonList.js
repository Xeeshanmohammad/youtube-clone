import React from "react";
import Button from "./Button";

function ButtonList() {
  const listOfArray = [
    "All",
    "Shorts",
    "Reactjs",
    "Videos",
    "Javascript",
    "Movies",
    "English",
    "News",
    "Urdu",
    "Sports",
    "HTML5",
    "CSS3",
  ];
  return (
    <div className="flex">
      {listOfArray.map((items, index) => (
        <Button key={index} name={items} />
      ))}
    </div>
  );
}

export default ButtonList;
