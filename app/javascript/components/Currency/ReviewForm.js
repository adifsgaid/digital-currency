import React, { Fragment } from "react";

export const ReviewForm = (props) => {
  const RatingOptions = [5, 4, 3, 2, 1].map((rating, index) => {
    return (
      <Fragment>
        <input
          type="radio"
          value={rating}
          name="rating"
          onChange={() => console.log("rating:", rating)}
          id={`rating-${rating}`}
        />
        <label></label>
      </Fragment>
    );
  });
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>
          What do you think about this {props.attributes.name}? share your
          thoghts
        </div>
        <div className="field">
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Review Title "
            value={props.review.title}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review Description"
            onChange={props.handleChange}
            value={props.review.description}
          />
        </div>
        <div className="field">
          <div className="rating-container"></div>
          <div className="rating-title-text"> Rate This Currency</div>
          {RatingOptions}
        </div>
        <button type="submit"> Submit Your Thoghts</button>
      </form>
    </div>
  );
};

export default ReviewForm;
