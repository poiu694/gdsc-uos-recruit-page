import React from 'react';
import styled from '@emotion/styled';
import {
  Button,
  Tab,
  TabContent,
  TabMenu,
} from '@gdsc-uos-recruit-page/design-system';

import TeamList from '../TeamList';
import QuestionAndAnswer from '../QuestionAndAnswer';
import { TeamKeyType } from '@gdsc-uos-recruit-page/design-system/@types/Team';

const DEFAULT_TEAM_VALUE = 'common';
const DEFAULT_TAB_VALUE = '1';

function QuestionInfoBox() {
  const [activeTeam, setActiveTeam] =
    React.useState<TeamKeyType>(DEFAULT_TEAM_VALUE);
  const [tabValue, setTabValue] = React.useState<string>(DEFAULT_TAB_VALUE);

  const handleClickTeamName = (team: TeamKeyType) => {
    setActiveTeam(team);
  };
  const handleClickListItem = (nextTabValue: string) => {
    setTabValue(nextTabValue);
  };

  return (
    <Wrapper>
      <TeamList activeTeam={activeTeam} onClickTeamName={handleClickTeamName} />
      <TabWrapper>
        <Tab value={tabValue} onChange={handleClickListItem}>
          <TabMenus>
            <TabMenu value="1" label="1" />
            <TabMenu value="2" label="2" />
            <TabMenu value="3" label="3" />
            <TabMenu value="4" label="4" />
            <TabMenu value="5" label="5" />
            <AddButton>추가</AddButton>
          </TabMenus>
          <TabContents>
            {Array.from({ length: 5 }).map((_, idx) => (
              <TabContent value={`${idx + 1}`}>
                <QuestionAndAnswer
                  title={`${activeTeam} 해야 하나요 ? ${idx + 1}`}
                  answer="필요 없습니다."
                />
              </TabContent>
            ))}
          </TabContents>
        </Tab>
      </TabWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

const TabWrapper = styled.div`
  width: 100%;
  margin-left: 40px;
`;

const TabMenus = styled.nav`
  width: 50%;
`;

const TabContents = styled.section`
  width: 50%;
  margin-top: 16px;
`;

const AddButton = styled(Button)`
  padding: 8px;
  float: right;
`;

export default QuestionInfoBox;
