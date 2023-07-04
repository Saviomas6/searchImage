import styled from "styled-components";
export const SearchBoxMainLayout = styled.div<any>`
  height: 500px;
  padding: 0 15px;
  background: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBoxContainer = styled.div`
  background-color: transparent;
`;

export const SearchBoxHeader = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 15px;
  background-color: transparent;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const SearchBoxDescription = styled.div`
  font-size: 16px;
  color: #fff;
  margin-bottom: 15px;
  background-color: transparent;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const SearchBoxInputContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: transparent;
  @media (max-width: 425px) {
    height: 40px;
  }
`;

export const SearchBoxInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 48px;
  outline: none;
  border: none;
  color: #000;
  background-color: #fafafa;
  padding: 0px 20px;
  font-size: 18px;
  box-sizing: border-box;
  font-weight: 500;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #808080;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;
