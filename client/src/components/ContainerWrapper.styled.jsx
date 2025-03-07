import { styled } from "styled-components";

export const ContainerWrapper = styled.div`
  width: 1000px;
  height: 600px;
  margin: 0 auto;

  div {
    display: flex;
    gap: 16px;
    width: 1000px;
    height: 500px;
  }

  .count-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  button {
    width: 70px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  .history-box {
    border: 1px solid black;
  }
`;
