import React from "react";

export const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <form>
        <div>
          What do you think about this Currency.name? share your thoghts{" "}
        </div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title " />
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review Description "
          />
        </div>
        <div className="field">
          <div className="rating-container"></div>
          <div className="rating-title-text"> Rate This Currency</div>
          [rates component goes here ]
        </div>
        <button type="submit"> Submit Your Thoghts</button>
      </form>
    </div>
  );
};

export default ReviewForm;
