import React from 'react';
import styled from '@emotion/styled';
import {
  Chip,
  Input,
  Title,
  Button,
  Typography,
  ButtonHierarchy,
  TextArea,
  theme,
} from 'gdsc-uos-design-system';

import { ContentWrapper, Flex, SideMenu } from '../components';

/**
 * textArea와 email의 개행문자를 맞춰주는 유틸
 * @param text 이메일 내용
 * @returns 텍스트의 개행문자를 이메일 형식으로 바꾼 문자열
 */
const formatEmailBody = (text: string) => {
  return text.replaceAll('\n', '%0D%0A');
};

function ApplyDetailPage() {
  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title
          title="Email"
          descriptions="이메일을 전송할 수 있는 페이지입니다."
        />
        <Flex gap={16} style={{ marginTop: 16 }}>
          <Flex gap={8} flexDirection="column" flexGrow={1}>
            <Input
              label="제목"
              placeholder="메일 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <EmailContent
              label="내용"
              placeholder="메일 내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <MailSendButton
              href={`mailto:olmnuiui70@gmail.com,poiu694@naver.com?subject=${title}&body=${formatEmailBody(
                content
              )}`}
            >
              전송하기
            </MailSendButton>
          </Flex>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const EmailContent = styled(TextArea)`
  height: 480px;
`;

const MailSendButton = styled.a`
  text-align: end;
  text-decoration: none;
  color: ${theme.colors.text.general};
  transition: all 0.1s ease-in;

  &:hover {
    color: ${theme.colors.primary.blue};
  }
`;

export default ApplyDetailPage;
