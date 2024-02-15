import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 "
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="h-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/640px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10">
        <input type="text" />
        <button>
          <img
            className="pl-3 h-3"
            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            alt="search-logo"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
