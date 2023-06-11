import { useSelector } from "react-redux";

import { Button } from "../../components/Button";

import { RootState } from "../../redux/store";

import {
  Page404BackBtn,
  Page404Wrapp,
  Page404Content,
  Page404Image,
} from "./styled";

import image_404 from "../../assets/404/1.jpg";
import { useNavigate } from "react-router-dom";
import { authPathes } from "../../helpers/routes";

export const Page404 = () => {
  const { isLogin } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  const navigateToLogin = () => {
    if (isLogin) {
      navigate("/");
    } else {
      navigate(authPathes.login);
    }
  };

  return (
    <Page404Wrapp>
      <Page404Content>
        <Page404Image src={image_404} alt="404 page image" />
        <Page404BackBtn>
          <Button size="b" onClick={navigateToLogin}>
            Go back
          </Button>
        </Page404BackBtn>
      </Page404Content>
    </Page404Wrapp>
  );
};
