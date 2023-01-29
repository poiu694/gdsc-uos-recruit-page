import styled from '@emotion/styled';
import { theme, Title, Typography } from 'gdsc-uos-design-system';
import { ContentWrapper, Flex, SideMenu, SummaryCard } from '../components';

function MainPage() {
  const currentYear = new Date().getFullYear();

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
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default MainPage;
