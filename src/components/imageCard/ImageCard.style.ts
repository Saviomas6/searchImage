import styled, { keyframes } from "styled-components";
export const SkeletonLoadingAnimation = keyframes`
  0% {
    background: #2b3641;
  }
  100% {
    background:  #7A798A;
  }
`;

export const ImageCardMainLayout = styled.div``;
export const ImageGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
export const Button = styled.button`
  width: 170px;
  height: 50px;
  background: #3ab712;
  border-radius: 50px;
  border: none;
  outline: none;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  @media (max-width: 425px) {
    font-size: 16px;
    height: 45px;
    width: 140px;
  }
`;

export const LoadingCard = styled.div`
  height: 500px;
  border-radius: 10px;
  animation: 1s ${SkeletonLoadingAnimation} 1s linear infinite alternate;
`;

export const NoItemFound = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: #808080;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
