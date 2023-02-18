import React from 'react';
import styled from '@emotion/styled';
import { useFieldArray, FormProvider, useForm } from 'react-hook-form';
import { theme, Button, Typography, TeamKeyType, ButtonHierarchy } from 'gdsc-uos-design-system';

import TeamList from '../../TeamList';
import { IntroductionList } from '../../../@types';
import { INTRODUCTION } from '../../../dummy/introduction';
import TitleWithIntroductions from './TitleWithIntroductions';

const DEFAULT_TEAM_VALUE = 'frontend';

function IntroductionInfoBox() {
  const [activeTeam, setActiveTeam] = React.useState<TeamKeyType>(DEFAULT_TEAM_VALUE);
  const forms = useForm<IntroductionList>({
    mode: 'onBlur',
    defaultValues: { introductions: INTRODUCTION },
  });
  const { fields } = useFieldArray({ control: forms.control, name: 'introductions' });

  const handleClickTeamName = (team: TeamKeyType) => {
    setActiveTeam(team);
  };

  const handleSubmitForm = (data: IntroductionList) => {
    console.log('1', data);
  };

  return (
    <Wrapper>
      <TeamList activeTeam={activeTeam} onClickTeamName={handleClickTeamName} />
      <Content>
        <FormProvider {...forms}>
          <form onSubmit={forms.handleSubmit(handleSubmitForm)}>
            {fields.map((introduction, index) => (
              <TitleWithIntroductions key={introduction.id} index={index} />
            ))}
            <Button
              type="submit"
              hierarchy={ButtonHierarchy.Danger}
              style={{ padding: '8px 20px', marginRight: 16 }}
            >
              <Typography type="body5" color={theme.colors.primary.white} textAlign="end">
                업데이트
              </Typography>
            </Button>
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export default IntroductionInfoBox;
