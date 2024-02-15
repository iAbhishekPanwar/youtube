import React from "react";
import Button from "./Button";

const ButtonList = (props) => {
  // Define an array of button names
  const buttonNames = [
    "All",
    "Songs",
    "Movies",
    "Gaming",
    "News",
    "Cricket",
    "Football",
    "Cooking",
    "Mixes",
    "Live",
  ];

  return (
    <div className="flex">
      {/* Map over the button names array and render Button components */}
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
