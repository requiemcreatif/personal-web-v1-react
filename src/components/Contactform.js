import React from "react";
import styled from "styled-components";

const Div = styled.div`
  //background: #d8d8e4;
  background-color: #fff;
  padding: 1rem 0;
`;

const Wrapper = styled.div`
  font-family: "blinker", sans-serif;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  //background: #d8d8e4;
  background-color: #fff;
  padding: 5rem 0;
  margin: 5rem auto;
  max-width: 1300px;

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

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 0.9em;
    color: #101b21;
  }

  form {
    padding: 0 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    //align-items: center;

    textarea {
      width: 100%;
      padding: 1rem;
      border: 0.5px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
    }

    input {
      width: 100%;
      padding: 1rem;
      border: 0.5px solid #ccc;
      border-radius: 5px;
      margin: 0.5rem 0;
      background-color: #fff;
    }

    .form-one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      //flex-direction: row;
      gap: 1rem;
      width: 100%;

      input {
        width: 100%;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
  }

  .form-two {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

const InfoDiv = styled.div`
  padding: 1rem 2rem;
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

const Contactform = () => {
  return (
    <Div>
      <Wrapper>
        <FormDiv className="one">
          <form>
            <div className="form-one">
              <div className="input-group">
                <input required type="text" name="firstName" autoComplete="off" className="input" />
                <label className="user-label">First Name *</label>
              </div>
              <div className="input-group">
                <input required type="text" name="lastName" autoComplete="off" className="input" />
                <label className="user-label">Last Name *</label>
              </div>
            </div>
            <div className="form-two">
              <div className="input-group">
                <input required type="email" name="email" autoComplete="off" className="input" />
                <label className="user-label">Email *</label>
              </div>
              <div className="input-group">
                <input required type="text" name="subject" autoComplete="off" className="input" />
                <label className="user-label">Subject *</label>
              </div>
              <div className="input-group">
                <textarea required name="message" rows="8" className="input"></textarea>
                <label className="user-label">Message *</label>
              </div>
              <button type="submit">Send</button>
            </div>
          </form>
        </FormDiv>
        <InfoDiv className="two">
          <h3>Contact Information</h3>
          <p>
            Address: 123 Main St., Anytown, USA
            <br />
            Phone: 555-555-5555
            <br />
            Email: info@company.com
          </p>
        </InfoDiv>
      </Wrapper>
    </Div>
  );
};

export default Contactform;
