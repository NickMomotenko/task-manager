import styled from "styled-components";

export const MembersBlockBody = styled.div`
  margin-top: 24px;
`;

export const MembersBlockList = styled.ul`
  column-count: 2;
  margin-bottom: -20px;
`;

export const MemberItemWrapp = styled.li`
  display: inline-block;
  margin-bottom: 20px;
`;

export const MemberItemAvatar = styled.div``;

export const MemberItemCol = styled.div`
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

export const MemberItemFullname = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #4f4f4f;
`;

export const MemberItemPosition = styled.div`
  font-size: 11px;
  color: #828282;
`;
