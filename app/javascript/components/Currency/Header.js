import React from "react";

export const Header = (props) => {
  return (
    <div className="wrapper">
      <h1>
        <img src="" alt="" />
        Currency Name
      </h1>
      <div>
        <div className="totalReview"></div>
        <div className="startRating"></div>
        <div className="totalOutOf"> 3 out of 5</div>
      </div>
    </div>
  );
};

export default Header;
  