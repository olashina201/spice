import React from "react";
import styled from "styled-components";
import image from "../images/MaskGroup.png";

const Contact = () => {
  return (
    <CommentContainer>
      <CommentText>Work With Me</CommentText>
      <CommentMain>
        <CommentImg>
          <img src={image} alt="" />
        </CommentImg>

        <CommentForm>
          <FormText>You’ll get a reply in less than two (2) hours </FormText>
          <div className="input-field">
            <label>Fullname</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Leave a Message</label>
            <textarea rows="10" cols="10"></textarea>
          </div>
          <CommentButton>Send Message</CommentButton>
        </CommentForm>
      </CommentMain>
    </CommentContainer>
  );
};

export default Contact;

const CommentContainer = styled.div`
  background: #000;
  height: 100%;
  padding: 50px 0;
`;
const CommentText = styled.h1`
  font-family: "Playfair Display";
  font-size: 36px;
  line-height: 48px;
  color: #ffca47;
  text-align: center;
  margin: 30px auto;
  @media (max-width: 568px) {
    font-size: 28px;
    line-height: 37px;
  }
`;
const CommentMain = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 0 60px;
`;
const CommentImg = styled.div`
  width: 25rem;
  height: 30rem;
  background: #000;
  opacity: 0.56;

  img {
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const CommentForm = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 320px) {
    width: 300px;
    height: 563px;
  }
  .input-field {
    display: grid;
  }
  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 15px;
  }
  input {
    width: 472px;
    height: 46px;
    border: 2px solid #ffffff;
    background: transparent;
    margin-bottom: 10px;
    @media (max-width: 568px) {
      width: 337px;
      height: 56px;
    }
    @media (max-width: 320px) {
      width: 300px;
    }
  }
  textarea {
    background: transparent;
    border: 2px solid #ffffff;
    margin-bottom: 30px;
    @media (max-width: 568px) {
      width: 337px;
      height: 152px;
    }
    @media (max-width: 320px) {
      width: 300px;
    }
  }
`;

const CommentButton = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #ffca47;
  border: 2px solid #ffca47;
  width: 196px;
  height: 56px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 10px;
  @media (max-width: 568px) {
    width: 197px;
    height: 56px;
    align-self: center;
  }
`;
const FormText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 2rem;
  text-align: center;
`;
