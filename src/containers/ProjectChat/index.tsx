import { Avatar } from "../../components/Avatar";
import { Row } from "../../components/Layout";
import { MultiAvatar } from "../../components/MultiAvatar";
import { Title } from "../../components/Title";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

import { ProjectChatItem } from "./ProjectChatItem";

import photo_1 from "../../assets/member/3.png";
import textOutlineIcon from "../../assets/icons/text-outline.svg";
import smileIcon from "../../assets/icons/smile.svg";
import attachIcon from "../../assets/icons/attach.svg";

import { chatList } from "./mock";

import {
  ProjectChatWrapp,
  ProjectChatTitle,
  ProjectChatContent,
  ProjectChatTeamList,
  ProjectChatTeamLabelText,
  ProjectChatTeamMultiAvatar,
  ProjectChatTextareaBlock,
  ProjectChatTextareaBlockRow,
  ProjectChatTextareaAvatar,
  ProjectChatTextareaBottom,
  ProjectChatBody,
  ProjectChatBodyList,
  ProjectChatTextarea,
  ProjectChatTextareaButton,
  ProjectChatPaper,
} from "./styled";

import { useTextarea } from "../../hooks/useTextarea";

export const ProjectChat = () => {
  const { value, handleChange } = useTextarea();

  return (
    <ProjectChatWrapp>
      <ProjectChatPaper>
        <ProjectChatTitle>
          <Title text="Project Chat" />
        </ProjectChatTitle>
        <ProjectChatContent>
          <ProjectChatTeamList>
            <Row>
              <ProjectChatTeamLabelText>Team:</ProjectChatTeamLabelText>
              <ProjectChatTeamMultiAvatar>
                <MultiAvatar size={30} />
              </ProjectChatTeamMultiAvatar>
            </Row>
          </ProjectChatTeamList>
          <ProjectChatBody>
            <ProjectChatBodyList>
              {chatList.map((chat) => (
                <ProjectChatItem key={chat.id} as="li" {...chat} />
              ))}
            </ProjectChatBodyList>
          </ProjectChatBody>
          <ProjectChatTextareaBlock>
            <ProjectChatTextareaBlockRow>
              <ProjectChatTextareaAvatar>
                <Avatar url={photo_1} alt="avatar icon" size={30} />
              </ProjectChatTextareaAvatar>
              <ProjectChatTextarea>
                <Textarea
                  value={value}
                  onChange={handleChange}
                  placeholder="Reply or post an update"
                >
                  <ProjectChatTextareaBottom>
                    <Row>
                      <ProjectChatTextareaButton>
                        <Icon src={textOutlineIcon} alt="text outline icon" />
                      </ProjectChatTextareaButton>
                      <ProjectChatTextareaButton>
                        <Icon src={smileIcon} alt="smile icon" />
                      </ProjectChatTextareaButton>
                      <ProjectChatTextareaButton>
                        <Icon src={attachIcon} alt="attach icon" />
                      </ProjectChatTextareaButton>
                    </Row>
                    <Button size="s">Send</Button>
                  </ProjectChatTextareaBottom>
                </Textarea>
              </ProjectChatTextarea>
            </ProjectChatTextareaBlockRow>
          </ProjectChatTextareaBlock>
        </ProjectChatContent>
      </ProjectChatPaper>
    </ProjectChatWrapp>
  );
};
