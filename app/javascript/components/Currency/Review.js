import React from "react";
import Rating from "../Rating/Rating";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
  margin-left: 5px;
`;
const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: "Poppins-Bold";
  font-size: 18px;
`;
const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function Review(props) {
  const { rating, title, description } = props.attributes;
  return (
    <Card>
      <RatingContainer>
        <Rating rating={rating} />
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

export default Review;
