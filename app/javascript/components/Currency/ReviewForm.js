import React, { Fragment } from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding: 20px;
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
const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;
  padding: 12px 12px;
  border: 1px solid #71b406;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`;

const ReviewWrapper = styled.div`
  width: 45%;
  position: fixed;
  padding: 20px;
  margin-left: 15px;
  border-radius: 25px;
  padding-bottom: 129px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
`;

const ReviewHeadline = styled.div`
  font-size: 20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`;

const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align: center;
  padding: 4px;
`;

const NameCurrency = styled.div`
  display: inline;
  color: gold;
`;
export const ReviewForm = (props) => {
  const RatingOptions = [5, 4, 3, 2, 1].map((rating, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={rating}
          name="rating"
          onChange={() => console.log("rating:", rating)}
          checked={props.review.rating == rating}
          id={`rating-${rating}`}
        />
        <label onClick={props.setRatings.bind(this, rating)}></label>
      </Fragment>
    );
  });

  return (
    <ReviewWrapper>
      <form onSubmit={props.handleSubmit}>
        <ReviewHeadline>
          What do you think about
          <NameCurrency> {props.attributes.name} </NameCurrency>? share your
          thoghts
        </ReviewHeadline>
        <Field>
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Review Title "
            value={props.review.title}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="description"
            placeholder="Review Description"
            onChange={props.handleChange}
            value={props.review.description}
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingBoxTitle>Rate This Currency</RatingBoxTitle>
            <RatingStars>{RatingOptions}</RatingStars>
          </RatingContainer>
        </Field>
        <SubmitBtn type="Submit"> Submit Your Thoghts</SubmitBtn>
      </form>
    </ReviewWrapper>
  );
};

export default ReviewForm;
