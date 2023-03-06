import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { Tab, TabContent, TabMenu, Title } from 'gdsc-uos-design-system';

import {
  QuestionInfoBox,
  MainRecruitInfoBox,
  IntroductionInfoBox,
  ApplyQuestionInfoBox,
} from '@/components';

const DEFAULT_PAGE_VALUE = '1';

function ManageRecruitInfoPage() {
  const [tabValue, setTabValue] = React.useState<string>(DEFAULT_PAGE_VALUE);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeTabMenu = (nextTabValue: string) => {
    setTabValue(nextTabValue);
    searchParams.set('value', nextTabValue as string);
    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    const value = searchParams.get('value');
    if (value) {
      setTabValue(value);
    }
  }, [searchParams]);

  return (
    <Wrapper>
      <Title title="Recruit-Info" descriptions="리크루팅 관련 정보를 다루는 페이지입니다." />
      <Tab value={tabValue} onChange={handleChangeTabMenu}>
        <TabMenus>
          <TabMenu value="1" label="Main" />
          <TabMenu value="2" label="FAQ" />
          <TabMenu value="3" label="Introduction" />
          <TabMenu value="4" label="Application" />
        </TabMenus>
        <TabContents>
          <TabContent value="1">
            <MainRecruitInfoBox />
          </TabContent>
          <TabContent value="2">
            <QuestionInfoBox />
          </TabContent>
          <TabContent value="3">
            <IntroductionInfoBox />
          </TabContent>
          <TabContent value="4">
            <ApplyQuestionInfoBox />
          </TabContent>
        </TabContents>
      </Tab>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const TabMenus = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
`;

const TabContents = styled.section`
  margin-top: 16px;
`;

export default ManageRecruitInfoPage;
