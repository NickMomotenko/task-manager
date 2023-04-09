import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import { Avatar } from "../Avatar";
import { Textarea } from "../Textarea";
import { Button } from "../Button";
import { Icon } from "../Icon";

import {
  ReplyTextareaWrapp,
  ReplyTextareaBody,
  ReplyTextareaUser,
  ReplyTextareaBar,
  ReplyTextareaButtons,
} from "./styled";

import textOutlineIcon from "../../assets/icons/text-outline.svg";
import smileIcon from "../../assets/icons/smile.svg";
import attachIcon from "../../assets/icons/attach.svg";

type ReplyTextareaProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  handleSend?: () => void;
  submitButtonText?: string;
};

export const ReplyTextarea: React.FC<ReplyTextareaProps> = ({
  value,
  placeholder,
  onChange,
  handleSend,
  submitButtonText = "Send",
}) => {
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <ReplyTextareaWrapp>
      <ReplyTextareaUser>
        <Avatar
          url={authUser?.avatar}
          alt={`${authUser?.fullname} avatar`}
          size={30}
        />
      </ReplyTextareaUser>
      <ReplyTextareaBody>
        <Textarea value={value} onChange={onChange} placeholder={placeholder}>
          <ReplyTextareaBar gorizontalSpace="between">
            <ReplyTextareaButtons>
              <Button view="ghost">
                <Icon src={textOutlineIcon} alt="text outline icon" />
              </Button>
              <Button view="ghost">
                <Icon src={smileIcon} alt="smile icon" />
              </Button>
              <Button view="ghost">
                <Icon src={attachIcon} alt="attach icon" />
              </Button>
            </ReplyTextareaButtons>
            <Button size="m" onClick={handleSend}>
              {submitButtonText}
            </Button>
          </ReplyTextareaBar>
        </Textarea>
      </ReplyTextareaBody>
    </ReplyTextareaWrapp>
  );
};
