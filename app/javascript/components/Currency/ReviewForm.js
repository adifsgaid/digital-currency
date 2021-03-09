import React, { Fragment } from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";

const RatingContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0px 10px 0px;
  border: 1px solid #e6e6e6;
  background: #fff;
`;

const RatingStars = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF8,${Hover}");
  }
`;
const RatingTitle = styled.div``;

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
          <RatingContainer>
            <div className="rating-title-text"> Rate This Currency</div>
            <RatingStars>{RatingOptions}</RatingStars>
          </RatingContainer>
        </div>
        <button type="submit"> Submit Your Thoghts</button>
      </form>
    </div>
  );
};

export default ReviewForm;
