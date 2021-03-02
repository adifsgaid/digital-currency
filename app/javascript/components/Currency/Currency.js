import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const Main = styled.div`
  padding-left: 60px;
`;

export const Currency = (props) => {
  const [currency, setCurrency] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/currencies/${slug}`;

    axios
      .get(url)
      .then((response) => {
        setCurrency(response.data);
        setLoaded(true);
      })
      .catch((response) => console.log(response));
  }, []);

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={currency.data.attributes}
                reviews={currency.included}
              />
            </Main>
            <div className="review"></div>
          </Column>
          <Column>
            <ReviewForm attributes={props.attributes} />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  ); 
};

export default Currency;
