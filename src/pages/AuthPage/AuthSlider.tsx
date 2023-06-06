import { Title } from "../../components/Title";

import {
  AuthPageSlider,
  AuthPageSliderContent,
  AuthPageSliderTitle,
  AuthPageSliderText,
  AuthPageSliderBtns,
  AuthPageSliderBtn,
} from "./styled";

export const AuthSlider = () => {
  return (
    <>
      <AuthPageSlider>
        <AuthPageSliderContent>
          <AuthPageSliderTitle>
            <Title text="Our Features" color="#fff" size={30} />
          </AuthPageSliderTitle>
          <AuthPageSliderText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            officiis? Sed explicabo eius atque illum nesciunt enim harum laborum
            repellat, voluptatibus itaque asperiores, totam quae iste delectus,
            illo impedit repudiandae?
          </AuthPageSliderText>
        </AuthPageSliderContent>
        <AuthPageSliderBtns>
          <AuthPageSliderBtn />
          <AuthPageSliderBtn />
        </AuthPageSliderBtns>
      </AuthPageSlider>
    </>
  );
};
