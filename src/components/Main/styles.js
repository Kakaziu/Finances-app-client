import styled from "styled-components";

export const MainTag = styled.div`
  background-color: #03012c;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  top: 40%;
  display: flex;
  width: 85%;
  margin: auto;
  justify-content: space-between;
`;

export const FinanceContainer = styled.div`
  color: black;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  width: 350px;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  span {
    font-size: 50px;
    font-weight: bold;
  }
`;
