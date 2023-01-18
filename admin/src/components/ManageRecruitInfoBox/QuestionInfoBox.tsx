import React from 'react';
import styled from '@emotion/styled';
import {
  Tab,
  theme,
  Modal,
  Button,
  TabMenu,
  TabContent,
  Typography,
  TeamKeyType,
  ButtonHierarchy,
  getTitleCaseTeam,
  QNAGeneratorModal,
} from 'gdsc-uos-design-system';

import TeamList from '../TeamList';
import QuestionAndAnswer from '../QuestionAndAnswer';

const DEFAULT_TEAM_VALUE = 'common';
const DEFAULT_TAB_VALUE = '1';

function QuestionInfoBox() {
  const [activeTeam, setActiveTeam] =
    React.useState<TeamKeyType>(DEFAULT_TEAM_VALUE);
  const [tabValue, setTabValue] = React.useState<string>(DEFAULT_TAB_VALUE);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleClickTeamName = (team: TeamKeyType) => {
    setActiveTeam(team);
    setTabValue('1');
  };

  const handleClickListItem = (nextTabValue: string) => {
    setTabValue(nextTabValue);
  };

  const handleClickQNAGeneratorConfirmButton = ({
    title,
    answer,
  }: {
    title: string;
    answer: string;
  }) => {
    console.log(title, answer);
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
            <AddButton
              hierarchy={ButtonHierarchy.Parent}
              onClick={() => setIsModalOpen(true)}
            >
              <Typography type="body5" color={theme.colors.primary.red}>
                추가
              </Typography>
            </AddButton>
          </TabMenus>
          <TabContents>
            {Array.from({ length: 5 }).map((_, idx) => (
              <TabContent value={`${idx + 1}`} key={idx}>
                <QuestionAndAnswer
                  title={`${getTitleCaseTeam(activeTeam)} 해야 하나요 ? ${
                    idx + 1
                  }`}
                  answer="필요 없습니다."
                />
              </TabContent>
            ))}
          </TabContents>
        </Tab>
      </TabWrapper>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <QNAGeneratorModal
          teamName={getTitleCaseTeam(activeTeam)}
          onClickConfirm={handleClickQNAGeneratorConfirmButton}
        />
      </Modal>
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
  width: 80%;
  display: flex;
  gap: 6px;
`;

const TabContents = styled.section`
  width: 80%;
  margin-top: 16px;
`;

const AddButton = styled(Button)`
  padding: 8px;
  transition: all 0.15s linear;
  margin-left: 16px;

  &:hover {
    background-color: ${theme.colors.ui.hover};
  }
`;

export default QuestionInfoBox;
