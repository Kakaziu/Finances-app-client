import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03012c;
`;

export const Form = styled.form`
  padding: 30px;
  background-color: #2f2841;
  color: white;
  border-radius: 10px;
  width: 540px;
  box-shadow: -5px 9px 50px 12px rgba(0, 0, 0, 0.5);

  h1 {
    margin-bottom: 50px;
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    color: #38ff50;
    font-family: monospace;
  }
`;

export const Camp = styled.div`
  input {
    padding: 10px 15px;
    width: 100%;
    border-radius: 10px;
    border: none;
    color: #f0ffffde;
    background-color: #514869;
    box-shadow: -10px 2px 20px 8px rgba(0, 0, 0, 0.3);
    font-size: 17px;

    &::placeholder {
      color: #f0ffffde;
    }

    &:focus {
      outline: none;
    }
  }

  margin-bottom: 35px;
`;

export const Button = styled.button`
  border-radius: 10px;
  width: 100%;
  border: none;
  padding: 10px 0px;
  font-size: 22px;
  font-family: monospace;
  font-weight: 700;
  background-color: #38ff50;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(56, 255, 80, 0.8);
  }
`;
