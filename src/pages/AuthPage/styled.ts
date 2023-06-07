import styled from "styled-components";

import bgMain from "../../assets/bg/main.png";

export const AuthPageWrapp = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;

  display: flex;

  padding: 2%;
`;

export const AuthPageContent = styled.div`
  flex: 1;
  margin-right: 2%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AuthPageImage = styled.div`
  flex: 1.5;
  border-radius: 40px 0 40px 0;

  /* background: url(${bgMain}) no-repeat; */
  background-size: cover;
  background-color: #c29199;
`;

export const AuthPageSlider = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AuthPageSliderBtns = styled.div`
  text-align: right;
`;

export const AuthPageSliderBtn = styled.button`
  display: inline-block;
  height: 45px;
  width: 45px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: relative;
  margin-right: 13px;

  &:last-child {
    margin-right: 0;
  }

  /* &::after {
    content: "";
    display: inline-block;
    height: 26px;
    width: 26px;
    background: transparent;

    position: absolute;
    bottom: -1px;
    right: -1px;
  } */
`;

export const AuthPageSliderContent = styled.div``;

export const AuthPageLogo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const AuthPageForm = styled.div`
  margin-bottom: 25px;
`;

export const AuthPageTitle = styled.div`
  margin-bottom: 20px;
`;

export const AuthPageSliderTitle = styled.div`
  margin-bottom: 25px;
`;

export const AuthPageSliderText = styled.div`
  color: #fff;
  font-size: 16px;
  margin-bottom: 30px;
`;

export const AuthWrapperTitle = styled.div`
  margin-bottom: 20px;
`;
