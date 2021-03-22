import React, { Fragment } from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";

const RatingContainer = styled.div`
  margin-top: 40px;
  font-family: sans-serif;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0px 10px 0px;
  border: 1px solid #e6e6e6;
  background: #fff;
  margin-left: 20px;
  width: 94%;
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

const Wrapper = styled.div`
  background: white;
  padding: 20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom: 80px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`;

const Field = styled.div`
  margin-top: 40px;
  border-radius: 4px;
  input {
    width: 90%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
    margin-left: 20px;
  }

  textarea {
    width: 90%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
    margin-left: 20px;
  }
`;

const SubmitBtn = styled.div`
  margin-top: 80px;
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;
  padding: 12px 12px;
  border: 1px solid #71b406;
  width: 90%;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #6dad05;
    border-color: #5d9405;
  }
  text-align: center;
`;

const HeadLine = styled.div`
  margin-left: 70px;
  font-size: 20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const NameCurrency = styled.div`
  display: inline;
  color: gold;
`;
export const ReviewForm = (props) => {
  const RatingOptions = [5, 4, 3, 2, 1].map((rating, index) => {
    return (
      <Fragment>
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
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <HeadLine>
          What do you think about
          <NameCurrency> {props.attributes.name} </NameCurrency>? share your
          thoghts
        </HeadLine>
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
            <RatingTitle> Rate This Currency</RatingTitle>
            <RatingStars>{RatingOptions}</RatingStars>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit"> Submit Your Thoghts</SubmitBtn>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
