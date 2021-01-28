import styled from "styled-components";

export const Form = styled.form`
  margin: 0 0 0 15px;
  padding: 20px;
  flex-grow: 1;
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 18px;
  box-shadow: inset 1px 1px 3px 0 rgba(79, 82, 88, 0.34);

  &::-webkit-search-cancel-button {
    position: relative;
    right: 40px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  position: absolute;
  right: 25px;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.i`
  border: 1px solid transparent;
  background-color: transparent;
  color: #333;
  display: inline-block;
  text-decoration: none;
  border-radius: 0;
  line-height: inherit;
`;
