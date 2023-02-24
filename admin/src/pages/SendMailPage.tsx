import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Input,
  Title,
  Typography,
  TextArea,
  Button,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';

import { useEmailAction } from '@/hooks';
import { DUMMY_APPLYS } from '@/dummy/apply';
import { ApplicationEmailList, ContentWrapper, Flex, SideMenu } from '@/components';

function ApplyDetailPage() {
  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const { selectedEmailList, FormatMailHref, updateEmailList, isSelectedEmail, isAllActiveEmail } =
    useEmailAction();

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title title="Email" descriptions="이메일을 전송할 수 있는 페이지입니다." />
        <Typography type="h6">이메일 대상자</Typography>
        <Flex gap={4} flexWrap="wrap" style={{ marginBlock: 16 }}>
          {selectedEmailList.map((application) => (
            <TargetEmailName key={application.id}>
              <Button
                hierarchy={ButtonHierarchy.Parent}
                onClick={() => updateEmailList(application)}
              >
                {application.name} ❌
              </Button>
            </TargetEmailName>
          ))}
        </Flex>
        <Flex gap={16}>
          <Flex gap={8} flexDirection="column" flexGrow={1}>
            <Input
              label="제목"
              placeholder="메일 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <EmailContent
              label="내용"
              value={content}
              placeholder="메일 내용"
              onChange={(e) => setContent(e.target.value)}
            />
            <MailSendButton href={FormatMailHref(selectedEmailList, title, content)}>
              전송하기
            </MailSendButton>
          </Flex>
          <Flex style={{ marginRight: 32 }} flexBasis={'350px'}>
            <ApplicationEmailList
              list={DUMMY_APPLYS}
              updateEmailList={updateEmailList}
              isSelectedEmail={isSelectedEmail}
              isAllActiveEmail={isAllActiveEmail}
            />
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
  ${({ theme }) => css`
    text-align: end;
    text-decoration: none;
    color: ${theme.colors.text.general};
    transition: all 0.1s ease-in;

    &:hover {
      color: ${theme.colors.primary.blue};
    }
  `}
`;

const TargetEmailName = styled.div`
  ${({ theme }) => css`
    padding: 8px 4px;
    border: 1px solid ${theme.colors.ui.border};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
      background-color: ${theme.palette.red200};
      border: 1px solid ${theme.palette.red400};
    }
  `}
`;

export default ApplyDetailPage;
