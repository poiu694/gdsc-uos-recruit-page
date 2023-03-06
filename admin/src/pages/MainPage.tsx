import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Title, Typography } from 'gdsc-uos-design-system';

import {
  Flex,
  SideMenu,
  SummaryCard,
  ContentWrapper,
  ApplicationStatusChart,
  TeamColorDescriptionBox,
} from '@/components';
import React from 'react';
import axios from 'axios';

function MainPage() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    (async () => {
      const res = await axios.get('/todos2');
      console.log(res);
    })();
  }, []);

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title
          title="Dashboard"
          descriptions={`${currentYear} GSDC UOS Recruit 정보를 요약한 페이지입니다.`}
        />
        <Typography type="h4" style={{ marginTop: 32 }}>
          General Statistics
        </Typography>
        <Flex style={{ marginTop: 64, width: '60%' }} gap={16} justifyContent={'space-around'}>
          <SummaryCard
            label="Total Apply"
            value={'654'}
            description="지원자 수"
            iconType="form"
            fill={theme.colors.primary.green}
          />
          <SummaryCard
            label="Today's User"
            value={`2,300`}
            description="오늘 방문한 유저"
            iconType="user"
            fill={theme.colors.primary.yellow}
          />
        </Flex>
        <Flex style={{ marginTop: 32 }} gap={32}>
          <ApplicationStatusChart title={'현재 지원 현황'} />
          <ApplicationStatusChart title={'임시 저장 현황'} />
          <TeamColorDescriptionBox />
        </Flex>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default MainPage;
