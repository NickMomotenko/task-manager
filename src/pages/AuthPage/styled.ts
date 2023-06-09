import styled from "styled-components";

export const AuthPageWrapp = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;

  padding: 2%;
`;

export const AuthPageContainer = styled.div`
  max-width: 1400px;
  display: flex;
  height: 100%;

  margin: 0 auto;
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
`;

export const AuthPageSlider = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const AuthPageSliderBtns = styled.div`
  display: flex;
`;

export const AuthPageSliderBtn = styled.div`
  margin-right: 13px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    transform: rotate(90deg);
  }
`;

export const AuthPageSliderBtnNext = styled(AuthPageSliderBtn)`
  svg {
    transform: rotate(-90deg);
  }
`;

export const AuthPageSliderContent = styled.div`
  background: #fff;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: rgba(177, 174, 210, 0.6) 0px 0px 10px;
`;

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

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthPageSliderText = styled.div`
  color: black;
  font-size: 16px;
`;

export const AuthWrapperTitle = styled.div`
  margin-bottom: 20px;
`;
