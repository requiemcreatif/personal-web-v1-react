import React from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    padding: 0 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    // form second div
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      //margin: 1rem 0;
      width: 100%;
      textarea {
        width: 100%;
        padding: 1rem;
        border: 0.5px solid #ccc;
        border-radius: 5px;
      }
      label {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
        width: 100%;
        input {
          width: 100%;
          padding: 1rem;
          border: 0.5px solid #ccc;
          border-radius: 5px;
          margin: 0.5rem 0;
        }
      }
    }

    div:first-of-type {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
      }
    }
  }

  button {
    width: 100%;
    padding: 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: #203f59;
    //border: 0.5px solid #c3c6ce;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #fe5f55; // 203f59
      color: #fff;
      //scale: 1.1;
    }
  }
`;

const Wrapper = styled.div`
  background: #d8d8e4;
  padding: 5rem 0;
  margin: 5rem auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "one"
      "two";
    .one {
      grid-area: two;
    }
    .two {
      grid-area: one;
    }
  }
`;

const InfoDiv = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.6em;
    font-weight: 600;
  }
  p {
    line-height: 1.3;
    //padding: 0 2rem;
  }
`;

const Div = styled.div`
  background: #d8d8e4;
  padding: 1rem 0;
`;

const Contact = () => {
  return (
    <Div>
      <Wrapper>
        <FormDiv className="one">
          {/* <h2>Contact</h2> */}
          <form>
            <div>
              <label>
                <input type="text" placeholder="Name *" />
              </label>
              <label>
                <input type="text" placeholder="Last Name *" />
              </label>
            </div>
            <div>
              <label>
                <input type="text" placeholder="Email *" />
              </label>
              <label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </label>
            </div>

            <button>Submit</button>
          </form>
        </FormDiv>
        <InfoDiv className="two">
          <h3 className="font">Find me on social media</h3>
          <p className="font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at enim ad officia nobis
            voluptatum, numquam doloribus deserunt adipisci ducimus nemo eaque odit obcaecati facere
            nihil ut magni inventore aliquid!
          </p>
        </InfoDiv>
      </Wrapper>
    </Div>
  );
};

export default Contact;
