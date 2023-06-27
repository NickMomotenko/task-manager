import { useSelector } from "react-redux";

import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation,
} from "emoji-picker-react";

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
  ReplyTextareaEmoji,
} from "./styled";

import textOutlineIcon from "../../assets/icons/text-outline.svg";
import smileIcon from "../../assets/icons/smile.svg";
import attachIcon from "../../assets/icons/attach-2.svg";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

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

  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [isEmojiPickedShow, setIsEmojiPickerShow] = useState(false);

  const replyTextareaRef = useRef(null);

  function handleChooseEmoji(emojiData: EmojiClickData, event: MouseEvent) {
    setSelectedEmoji(emojiData.unified);

    let sym = emojiData.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
  }

  const handleToggleEmojiPicker = () => {
    setIsEmojiPickerShow((prev) => !prev);
  };

  useClickOutside(replyTextareaRef, () => setIsEmojiPickerShow(false));

  return (
    <ReplyTextareaWrapp ref={replyTextareaRef}>
      <ReplyTextareaUser>
        <Avatar
          url={authUser?.avatar}
          alt={`${authUser?.fullname} avatar`}
          size={30}
        />
      </ReplyTextareaUser>
      <ReplyTextareaBody>
        <Textarea value={value} onChange={onChange} placeholder={placeholder}>
          <ReplyTextareaBar>
            <ReplyTextareaButtons>
              <Button view="ghost">
                <Icon
                  src={attachIcon}
                  fill="#2f80ed"
                  size={{ w: "15px", h: "15px" }}
                />
              </Button>
              <Button view="ghost" onClick={handleToggleEmojiPicker}>
                <Icon
                  src={smileIcon}
                  fill="#2f80ed"
                  size={{ w: "15px", h: "15px" }}
                />
              </Button>
            </ReplyTextareaButtons>
            <Button type="submit" size="m" onClick={handleSend}>
              {submitButtonText}
            </Button>
          </ReplyTextareaBar>
        </Textarea>
      </ReplyTextareaBody>
      {isEmojiPickedShow && (
        <ReplyTextareaEmoji>
          <EmojiPicker
            onEmojiClick={handleChooseEmoji}
            autoFocusSearch={false}
            emojiStyle={EmojiStyle.NATIVE}
            height={300}
            lazyLoadEmojis={true}
            searchPlaceHolder="Select icon"
          />
        </ReplyTextareaEmoji>
      )}
    </ReplyTextareaWrapp>
  );
};
