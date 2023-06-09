import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

import { useSlider } from "../../hooks/useSlider";

import {
  AuthPageSlider,
  AuthPageSliderContent,
  AuthPageSliderTitle,
  AuthPageSliderText,
  AuthPageSliderBtns,
  AuthPageSliderBtn,
  AuthPageSliderBtnNext,
} from "./styled";

import arrowIcon from "../../assets/icons/arrow.svg";
import bgImage from "../../assets/bg/4565326.jpg";

import { slides, ISlides } from "../../helpers/slides";
import { useEffect, useState } from "react";

export const AuthSlider = () => {
  const [slide, setSlide] = useState<ISlides>(slides[0]);

  const { index, next, prev } = useSlider({
    limit: Number(slides.length),
  });

  useEffect(() => {
    const searchableSlide = slides[index];

    setSlide(searchableSlide);
  }, [index]);

  return (
    <>
      <AuthPageSlider style={{ backgroundImage: `url(${bgImage})` }}>
        <AuthPageSliderContent>
          <AuthPageSliderTitle>
            <Title text={slide.title} color="black" size={30} />
            <AuthPageSliderBtns>
              <AuthPageSliderBtn>
                <Button view="ghost" onClick={prev}>
                  <Icon
                    src={arrowIcon}
                    size={{ h: "20px", w: "20px" }}
                    fill="black"
                  />
                </Button>
              </AuthPageSliderBtn>
              <AuthPageSliderBtnNext>
                <Button view="ghost" onClick={next}>
                  <Icon
                    src={arrowIcon}
                    size={{ h: "20px", w: "20px" }}
                    fill="black"
                  />
                </Button>
              </AuthPageSliderBtnNext>
            </AuthPageSliderBtns>
          </AuthPageSliderTitle>
          <AuthPageSliderText>{slide.info}</AuthPageSliderText>
        </AuthPageSliderContent>
      </AuthPageSlider>
    </>
  );
};
