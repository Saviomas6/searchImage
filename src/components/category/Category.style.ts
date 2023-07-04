import styled from "styled-components";

export const CategoryButton = styled.button<any>`
  height: 50px;
  width: 120px;
  background-color: ${({ isSelectedValue }) =>
    isSelectedValue ? "#3ab712" : "#ececec"};
  color: #000;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: ${({ isSelectedValue }) => (isSelectedValue ? "600" : "500")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
  @media (max-width: 425px) {
    font-size: 14px;
    height: 45px;
    width: 110px;
  }
`;

export const CategoryButtonContainer = styled.div`
  min-height: 50px;
  margin: 15px 0;
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
