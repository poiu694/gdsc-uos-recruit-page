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
} from 'gdsc-uos-design-system';

import TeamList from '../TeamList';
import { FAQ } from '../../@types';
import { QNAGeneratorModal } from '../Modal';
import QuestionAndDescription from '../QuestionAndDescription';

const DEFAULT_TEAM_VALUE = 'common';
const DEFAULT_TAB_VALUE = '1';

function QuestionInfoBox() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [tabValue, setTabValue] = React.useState<string>(DEFAULT_TAB_VALUE);
  const [activeTeam, setActiveTeam] = React.useState<TeamKeyType>(DEFAULT_TEAM_VALUE);
  const [FAQList, setFAQList] = React.useState<FAQ[]>([]);

  const handleClickTeamName = (team: TeamKeyType) => {
    setActiveTeam(team);
    setTabValue('1');
  };

  const handleClickListItem = (nextTabValue: string) => {
    setTabValue(nextTabValue);
  };

  const handleClickQNAGeneratorConfirmButton = ({ title, description }: FAQ) => {
    setFAQList((prev) => [...prev, { title, description }]);
  };

  const handleClickQuestionDeleteButton = (faq: FAQ) => {
    const nextFAQList = [...FAQList].filter((item) => item.title !== faq.title);
    setFAQList(nextFAQList);
  };

  React.useEffect(() => {
    (async () => {
      setFAQList(() =>
        [...Array.from({ length: 5 })].map((_, idx) => ({
          title: `${getTitleCaseTeam(activeTeam)} 해야 하나요 ? ${idx + 1}`,
          description: '필요 없습니다.',
        }))
      );
    })();
  }, [activeTeam]);

  return (
    <Wrapper>
      <TeamList isCommonNeed activeTeam={activeTeam} onClickTeamName={handleClickTeamName} />
      <TabWrapper>
        <Tab value={tabValue} onChange={handleClickListItem}>
          <TabMenus>
            {FAQList.map((_, idx) => (
              <TabMenu key={idx} value={`${idx + 1}`} label={`${idx + 1}`} />
            ))}
            <AddButton hierarchy={ButtonHierarchy.Parent} onClick={() => setIsModalOpen(true)}>
              <Typography type="body5" color={theme.colors.primary.red}>
                추가
              </Typography>
            </AddButton>
          </TabMenus>
          <TabContents>
            {FAQList.map((faq, idx) => (
              <TabContent value={`${idx + 1}`} key={idx}>
                <QuestionAndDescription
                  type="edit"
                  title={faq.title}
                  description={faq.description}
                  onDeleteClick={handleClickQuestionDeleteButton}
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
